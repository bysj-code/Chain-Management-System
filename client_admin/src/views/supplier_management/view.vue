<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','corporate_name') || $check_field('add','corporate_name') || $check_field('set','corporate_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="公司名称" prop="corporate_name">
												<el-input id="corporate_name" v-model="form['corporate_name']" placeholder="请输入公司名称"
							  v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','corporate_name')) || (!form['supplier_management_id'] && $check_field('add','corporate_name'))" :disabled="disabledObj['corporate_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','corporate_name')">{{form['corporate_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','company_location') || $check_field('add','company_location') || $check_field('set','company_location')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="公司地点" prop="company_location">
												<el-input id="company_location" v-model="form['company_location']" placeholder="请输入公司地点"
							  v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','company_location')) || (!form['supplier_management_id'] && $check_field('add','company_location'))" :disabled="disabledObj['company_location_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','company_location')">{{form['company_location']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','person_in_charge') || $check_field('add','person_in_charge') || $check_field('set','person_in_charge')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="负责人" prop="person_in_charge">
												<el-input id="person_in_charge" v-model="form['person_in_charge']" placeholder="请输入负责人"
							  v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','person_in_charge')) || (!form['supplier_management_id'] && $check_field('add','person_in_charge'))" :disabled="disabledObj['person_in_charge_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','person_in_charge')">{{form['person_in_charge']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','contact_information') || $check_field('add','contact_information') || $check_field('set','contact_information')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="联系方式" prop="contact_information">
												<el-input id="contact_information" v-model="form['contact_information']" placeholder="请输入联系方式"
							  v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','contact_information')) || (!form['supplier_management_id'] && $check_field('add','contact_information'))" :disabled="disabledObj['contact_information_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','contact_information')">{{form['contact_information']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','main_products') || $check_field('add','main_products') || $check_field('set','main_products')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="主要产品" prop="main_products">
												<el-input id="main_products" v-model="form['main_products']" placeholder="请输入主要产品"
							  v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','main_products')) || (!form['supplier_management_id'] && $check_field('add','main_products'))" :disabled="disabledObj['main_products_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','main_products')">{{form['main_products']}}</div>
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
				field: "supplier_management_id",
				url_add: "~/api/supplier_management/add?",
				url_set: "~/api/supplier_management/set?",
				url_get_obj: "~/api/supplier_management/get_obj?",
				url_upload: "~/api/supplier_management/upload?",

				query: {
					"supplier_management_id": 0,
				},

				form: {
								"corporate_name":  '', // 公司名称
										"company_location":  '', // 公司地点
										"person_in_charge":  '', // 负责人
										"contact_information":  '', // 联系方式
										"main_products":  '', // 主要产品
											"supplier_management_id": 0, // ID
						
				},
				disabledObj:{
								"corporate_name_isDisabled": false,
										"company_location_isDisabled": false,
										"person_in_charge_isDisabled": false,
										"contact_information_isDisabled": false,
										"main_products_isDisabled": false,
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
					bl = this.$check_action('/supplier_management/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/supplier_management/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/supplier_management/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/supplier_management/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/supplier_management/view','get');
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
