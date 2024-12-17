<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','product_number') || $check_field('add','product_number') || $check_field('set','product_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品编号" prop="product_number">
												<el-input id="product_number" v-model="form['product_number']" placeholder="请输入商品编号"
							  v-if="user_group === '管理员' || (form['warehousing_information_id'] && $check_field('set','product_number')) || (!form['warehousing_information_id'] && $check_field('add','product_number'))" :disabled="disabledObj['product_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_number')">{{form['product_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','product_name') || $check_field('add','product_name') || $check_field('set','product_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="product_name">
												<el-input id="product_name" v-model="form['product_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['warehousing_information_id'] && $check_field('set','product_name')) || (!form['warehousing_information_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_name')">{{form['product_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','warehousing_employees') || $check_field('add','warehousing_employees') || $check_field('set','warehousing_employees')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="入库员工" prop="warehousing_employees">
												<el-input id="warehousing_employees" v-model="form['warehousing_employees']" placeholder="请输入入库员工"
							  v-if="user_group === '管理员' || (form['warehousing_information_id'] && $check_field('set','warehousing_employees')) || (!form['warehousing_information_id'] && $check_field('add','warehousing_employees'))" :disabled="disabledObj['warehousing_employees_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','warehousing_employees')">{{form['warehousing_employees']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','warehousing_time') || $check_field('add','warehousing_time') || $check_field('set','warehousing_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="入库时间" prop="warehousing_time">
								<el-date-picker :disabled="disabledObj['warehousing_time_isDisabled']" v-if="user_group === '管理员' || (form['warehousing_information_id'] && $check_field('set','warehousing_time')) || (!form['warehousing_information_id'] && $check_field('add','warehousing_time'))" id="warehousing_time"
						v-model="form['warehousing_time']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','warehousing_time')">{{form['warehousing_time']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','receipt_quantity') || $check_field('add','receipt_quantity') || $check_field('set','receipt_quantity')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="入库数量" prop="receipt_quantity">
								<el-input-number id="receipt_quantity" v-model.number="form['receipt_quantity']"
						v-if="user_group === '管理员' || (form['warehousing_information_id'] && $check_field('set','receipt_quantity')) || (!form['warehousing_information_id'] && $check_field('add','receipt_quantity'))" :disabled="disabledObj['receipt_quantity_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','receipt_quantity')">{{form['receipt_quantity']}}</div>
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
				field: "warehousing_information_id",
				url_add: "~/api/warehousing_information/add?",
				url_set: "~/api/warehousing_information/set?",
				url_get_obj: "~/api/warehousing_information/get_obj?",
				url_upload: "~/api/warehousing_information/upload?",

				query: {
					"warehousing_information_id": 0,
				},

				form: {
								"product_number":  '', // 商品编号
										"product_name":  '', // 商品名称
										"warehousing_employees":  '', // 入库员工
										"warehousing_time":  '', // 入库时间
										"receipt_quantity":  0, // 入库数量
											"warehousing_information_id": 0, // ID
						
				},
				disabledObj:{
								"product_number_isDisabled": false,
										"product_name_isDisabled": false,
										"warehousing_employees_isDisabled": false,
										"warehousing_time_isDisabled": false,
					          			"receipt_quantity_isDisabled": false,
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
																				// 获取缓存数据附加
				form = $.db.get("form");
							$.push(this.form ,form);
																// 获取缓存数据附加
				form = $.db.get("form");
							$.push(this.form ,form);
																
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
								        if (this.form["warehousing_time"].indexOf("-")===-1){
          this.form["warehousing_time"] = this.$toTime(parseInt(this.form["warehousing_time"]),"yyyy-MM-dd")
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


											        if(this.form["warehousing_time"]=="0000-00-00"){
          this.form["warehousing_time"] = null;
        }
				if(parseInt(this.form["warehousing_time"]) > 9999){
					this.form["warehousing_time"] = this.$toTime(parseInt(this.form["warehousing_time"]),"yyyy-MM-dd")
				}
					


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
					bl = this.$check_action('/warehousing_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/warehousing_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/warehousing_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/warehousing_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/warehousing_information/view','get');
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
