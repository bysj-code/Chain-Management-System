<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','department_name') || $check_field('add','department_name') || $check_field('set','department_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="部门名称" prop="department_name">
												<el-input id="department_name" v-model="form['department_name']" placeholder="请输入部门名称"
							  v-if="user_group === '管理员' || (form['department_information_id'] && $check_field('set','department_name')) || (!form['department_information_id'] && $check_field('add','department_name'))" :disabled="disabledObj['department_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','department_name')">{{form['department_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','department_head') || $check_field('add','department_head') || $check_field('set','department_head')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="部门主管" prop="department_head">
												<el-input id="department_head" v-model="form['department_head']" placeholder="请输入部门主管"
							  v-if="user_group === '管理员' || (form['department_information_id'] && $check_field('set','department_head')) || (!form['department_information_id'] && $check_field('add','department_head'))" :disabled="disabledObj['department_head_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','department_head')">{{form['department_head']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','department_location') || $check_field('add','department_location') || $check_field('set','department_location')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="部门位置" prop="department_location">
												<el-input id="department_location" v-model="form['department_location']" placeholder="请输入部门位置"
							  v-if="user_group === '管理员' || (form['department_information_id'] && $check_field('set','department_location')) || (!form['department_information_id'] && $check_field('add','department_location'))" :disabled="disabledObj['department_location_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','department_location')">{{form['department_location']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','number_of_employees') || $check_field('add','number_of_employees') || $check_field('set','number_of_employees')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="员工人数" prop="number_of_employees">
								<el-input-number id="number_of_employees" v-model.number="form['number_of_employees']"
						v-if="user_group === '管理员' || (form['department_information_id'] && $check_field('set','number_of_employees')) || (!form['department_information_id'] && $check_field('add','number_of_employees'))" :disabled="disabledObj['number_of_employees_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','number_of_employees')">{{form['number_of_employees']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','remarks') || $check_field('add','remarks') || $check_field('set','remarks')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="备注信息" prop="remarks">
								<el-input type="textarea" id="remarks" v-model="form['remarks']" placeholder="请输入备注信息"
						v-if="user_group === '管理员' || (form['department_information_id'] && $check_field('set','remarks')) || (!form['department_information_id'] && $check_field('add','remarks'))" :disabled="disabledObj['remarks_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','remarks')">{{form['remarks']}}</div>
							</el-form-item>
			</el-col>
					
	
	
	
	
	
	
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item>
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "department_information_id",
				url_add: "~/api/department_information/add?",
				url_set: "~/api/department_information/set?",
				url_get_obj: "~/api/department_information/get_obj?",
				url_upload: "~/api/department_information/upload?",

				query: {
					"department_information_id": 0,
				},

				form: {
								"department_name":  '', // 部门名称
										"department_head":  '', // 部门主管
										"department_location":  '', // 部门位置
										"number_of_employees":  0, // 员工人数
										"remarks":  '', // 备注信息
											"department_information_id": 0, // ID
						
				},
				disabledObj:{
								"department_name_isDisabled": false,
										"department_head_isDisabled": false,
										"department_location_isDisabled": false,
					          			"number_of_employees_isDisabled": false,
										"remarks_isDisabled": false,
										},

	
		
		
		
		
	
			}
		},
		methods: {


	
	
			
	
			
	
			
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
																																		
				if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
														$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){


															


			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
				let msg = null
																					return msg;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/department_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/department_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/department_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/department_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/department_information/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
												},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




</style>
