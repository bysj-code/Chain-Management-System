<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','product_number') || $check_field('add','product_number') || $check_field('set','product_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品编号" prop="product_number">
												<el-input id="product_number" v-model="form['product_number']" placeholder="请输入商品编号"
							  v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','product_number')) || (!form['sales_information_id'] && $check_field('add','product_number'))" :disabled="disabledObj['product_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_number')">{{form['product_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','product_name') || $check_field('add','product_name') || $check_field('set','product_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="product_name">
												<el-input id="product_name" v-model="form['product_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','product_name')) || (!form['sales_information_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_name')">{{form['product_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','salesman') || $check_field('add','salesman') || $check_field('set','salesman')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="销售人员" prop="salesman">
												<el-input id="salesman" v-model="form['salesman']" placeholder="请输入销售人员"
							  v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','salesman')) || (!form['sales_information_id'] && $check_field('add','salesman'))" :disabled="disabledObj['salesman_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','salesman')">{{form['salesman']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','commodity_price') || $check_field('add','commodity_price') || $check_field('set','commodity_price')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品价格" prop="commodity_price">
												<el-input id="commodity_price" v-model="form['commodity_price']" placeholder="请输入商品价格"
							  v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','commodity_price')) || (!form['sales_information_id'] && $check_field('add','commodity_price'))" :disabled="disabledObj['commodity_price_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','commodity_price')">{{form['commodity_price']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','sales_date') || $check_field('add','sales_date') || $check_field('set','sales_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="销售日期" prop="sales_date">
								<el-date-picker :disabled="disabledObj['sales_date_isDisabled']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','sales_date')) || (!form['sales_information_id'] && $check_field('add','sales_date'))" id="sales_date"
						v-model="form['sales_date']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','sales_date')">{{form['sales_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','sales_volumes') || $check_field('add','sales_volumes') || $check_field('set','sales_volumes')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="销售数量" prop="sales_volumes">
								<el-input-number id="sales_volumes" v-model.number="form['sales_volumes']"
						v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','sales_volumes')) || (!form['sales_information_id'] && $check_field('add','sales_volumes'))" :disabled="disabledObj['sales_volumes_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','sales_volumes')">{{form['sales_volumes']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','sales_amount') || $check_field('add','sales_amount') || $check_field('set','sales_amount')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="销售金额" prop="sales_amount">
												<el-input id="sales_amount" v-model="form['sales_amount']" placeholder="请输入销售金额"
							  v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','sales_amount')) || (!form['sales_information_id'] && $check_field('add','sales_amount'))"  @focus="set_sales_amount()" :disabled="disabledObj['sales_amount_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','sales_amount')">{{form['sales_amount']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','customer_name') || $check_field('add','customer_name') || $check_field('set','customer_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="客户姓名" prop="customer_name">
												<el-input id="customer_name" v-model="form['customer_name']" placeholder="请输入客户姓名"
							  v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','customer_name')) || (!form['sales_information_id'] && $check_field('add','customer_name'))" :disabled="disabledObj['customer_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','customer_name')">{{form['customer_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','contact_information') || $check_field('add','contact_information') || $check_field('set','contact_information')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="联系方式" prop="contact_information">
												<el-input id="contact_information" v-model="form['contact_information']" placeholder="请输入联系方式"
							  v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','contact_information')) || (!form['sales_information_id'] && $check_field('add','contact_information'))" :disabled="disabledObj['contact_information_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','contact_information')">{{form['contact_information']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','sales_remarks') || $check_field('add','sales_remarks') || $check_field('set','sales_remarks')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="销售备注" prop="sales_remarks">
								<el-input type="textarea" id="sales_remarks" v-model="form['sales_remarks']" placeholder="请输入销售备注"
						v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','sales_remarks')) || (!form['sales_information_id'] && $check_field('add','sales_remarks'))" :disabled="disabledObj['sales_remarks_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','sales_remarks')">{{form['sales_remarks']}}</div>
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
				field: "sales_information_id",
				url_add: "~/api/sales_information/add?",
				url_set: "~/api/sales_information/set?",
				url_get_obj: "~/api/sales_information/get_obj?",
				url_upload: "~/api/sales_information/upload?",

				query: {
					"sales_information_id": 0,
				},

				form: {
								"product_number":  '', // 商品编号
										"product_name":  '', // 商品名称
										"salesman":  '', // 销售人员
										"commodity_price":  '', // 商品价格
										"sales_date":  '', // 销售日期
										"sales_volumes":  0, // 销售数量
										"sales_amount":  '', // 销售金额
										"customer_name":  '', // 客户姓名
										"contact_information":  '', // 联系方式
										"sales_remarks":  '', // 销售备注
											"sales_information_id": 0, // ID
						
				},
				disabledObj:{
								"product_number_isDisabled": false,
										"product_name_isDisabled": false,
										"salesman_isDisabled": false,
										"commodity_price_isDisabled": false,
										"sales_date_isDisabled": false,
					          			"sales_volumes_isDisabled": false,
										"sales_amount_isDisabled": false,
										"customer_name_isDisabled": false,
										"contact_information_isDisabled": false,
										"sales_remarks_isDisabled": false,
										},

	
		
		
		
		
		
		
		
		
		
	
			}
		},
		methods: {


	
	
			
	
			
	
			
	
			
	
			
	
			
	
										set_sales_amount(){
				this.form.sales_amount = parseFloat(this.form.commodity_price) * parseFloat(this.form.sales_volumes)
			},
							
	
			
	
			
	
		
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
										        if (this.form["sales_date"].indexOf("-")===-1){
          this.form["sales_date"] = this.$toTime(parseInt(this.form["sales_date"]),"yyyy-MM-dd")
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


														        if(this.form["sales_date"]=="0000-00-00"){
          this.form["sales_date"] = null;
        }
				if(parseInt(this.form["sales_date"]) > 9999){
					this.form["sales_date"] = this.$toTime(parseInt(this.form["sales_date"]),"yyyy-MM-dd")
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
					bl = this.$check_action('/sales_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/sales_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/sales_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/sales_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/sales_information/view','get');
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
