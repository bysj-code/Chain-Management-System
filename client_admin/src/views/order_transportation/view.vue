<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','product_number') || $check_field('add','product_number') || $check_field('set','product_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品编号" prop="product_number">
												<el-input id="product_number" v-model="form['product_number']" placeholder="请输入商品编号"
							  v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','product_number')) || (!form['order_transportation_id'] && $check_field('add','product_number'))" :disabled="disabledObj['product_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_number')">{{form['product_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','product_name') || $check_field('add','product_name') || $check_field('set','product_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="product_name">
												<el-input id="product_name" v-model="form['product_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','product_name')) || (!form['order_transportation_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_name')">{{form['product_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','salesman') || $check_field('add','salesman') || $check_field('set','salesman')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="销售人员" prop="salesman">
												<el-input id="salesman" v-model="form['salesman']" placeholder="请输入销售人员"
							  v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','salesman')) || (!form['order_transportation_id'] && $check_field('add','salesman'))" :disabled="disabledObj['salesman_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','salesman')">{{form['salesman']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','customer_name') || $check_field('add','customer_name') || $check_field('set','customer_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="客户姓名" prop="customer_name">
												<el-input id="customer_name" v-model="form['customer_name']" placeholder="请输入客户姓名"
							  v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','customer_name')) || (!form['order_transportation_id'] && $check_field('add','customer_name'))" :disabled="disabledObj['customer_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','customer_name')">{{form['customer_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','contact_number') || $check_field('add','contact_number') || $check_field('set','contact_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="联系电话" prop="contact_number">
												<el-input id="contact_number" v-model="form['contact_number']" placeholder="请输入联系电话"
							  v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','contact_number')) || (!form['order_transportation_id'] && $check_field('add','contact_number'))" :disabled="disabledObj['contact_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','contact_number')">{{form['contact_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','delivery_tools') || $check_field('add','delivery_tools') || $check_field('set','delivery_tools')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="配送工具" prop="delivery_tools">
												<el-input id="delivery_tools" v-model="form['delivery_tools']" placeholder="请输入配送工具"
							  v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','delivery_tools')) || (!form['order_transportation_id'] && $check_field('add','delivery_tools'))" :disabled="disabledObj['delivery_tools_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','delivery_tools')">{{form['delivery_tools']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','drivers_name') || $check_field('add','drivers_name') || $check_field('set','drivers_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="司机姓名" prop="drivers_name">
												<el-input id="drivers_name" v-model="form['drivers_name']" placeholder="请输入司机姓名"
							  v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','drivers_name')) || (!form['order_transportation_id'] && $check_field('add','drivers_name'))" :disabled="disabledObj['drivers_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','drivers_name')">{{form['drivers_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','contact_information') || $check_field('add','contact_information') || $check_field('set','contact_information')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="联系方式" prop="contact_information">
												<el-input id="contact_information" v-model="form['contact_information']" placeholder="请输入联系方式"
							  v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','contact_information')) || (!form['order_transportation_id'] && $check_field('add','contact_information'))" :disabled="disabledObj['contact_information_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','contact_information')">{{form['contact_information']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','route_delivery') || $check_field('add','route_delivery') || $check_field('set','route_delivery')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="路线配送" prop="route_delivery">
												<el-input id="route_delivery" v-model="form['route_delivery']" placeholder="请输入路线配送"
							  v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','route_delivery')) || (!form['order_transportation_id'] && $check_field('add','route_delivery'))" :disabled="disabledObj['route_delivery_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','route_delivery')">{{form['route_delivery']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','transportation_remarks') || $check_field('add','transportation_remarks') || $check_field('set','transportation_remarks')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="运输备注" prop="transportation_remarks">
								<el-input type="textarea" id="transportation_remarks" v-model="form['transportation_remarks']" placeholder="请输入运输备注"
						v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','transportation_remarks')) || (!form['order_transportation_id'] && $check_field('add','transportation_remarks'))" :disabled="disabledObj['transportation_remarks_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','transportation_remarks')">{{form['transportation_remarks']}}</div>
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
				field: "order_transportation_id",
				url_add: "~/api/order_transportation/add?",
				url_set: "~/api/order_transportation/set?",
				url_get_obj: "~/api/order_transportation/get_obj?",
				url_upload: "~/api/order_transportation/upload?",

				query: {
					"order_transportation_id": 0,
				},

				form: {
								"product_number":  '', // 商品编号
										"product_name":  '', // 商品名称
										"salesman":  '', // 销售人员
										"customer_name":  '', // 客户姓名
										"contact_number":  '', // 联系电话
										"delivery_tools":  '', // 配送工具
										"drivers_name":  '', // 司机姓名
										"contact_information":  '', // 联系方式
										"route_delivery":  '', // 路线配送
										"transportation_remarks":  '', // 运输备注
											"order_transportation_id": 0, // ID
						
				},
				disabledObj:{
								"product_number_isDisabled": false,
										"product_name_isDisabled": false,
										"salesman_isDisabled": false,
										"customer_name_isDisabled": false,
										"contact_number_isDisabled": false,
										"delivery_tools_isDisabled": false,
										"drivers_name_isDisabled": false,
										"contact_information_isDisabled": false,
										"route_delivery_isDisabled": false,
										"transportation_remarks_isDisabled": false,
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
					bl = this.$check_action('/order_transportation/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/order_transportation/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/order_transportation/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/order_transportation/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/order_transportation/view','get');
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
