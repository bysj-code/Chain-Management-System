<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','product_number') || $check_field('add','product_number') || $check_field('set','product_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品编号" prop="product_number">
												<el-input id="product_number" v-model="form['product_number']" placeholder="请输入商品编号"
							  v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','product_number')) || (!form['procurement_information_id'] && $check_field('add','product_number'))" :disabled="disabledObj['product_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_number')">{{form['product_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','product_name') || $check_field('add','product_name') || $check_field('set','product_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="product_name">
												<el-input id="product_name" v-model="form['product_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','product_name')) || (!form['procurement_information_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_name')">{{form['product_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','purchase_date') || $check_field('add','purchase_date') || $check_field('set','purchase_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="采购日期" prop="purchase_date">
								<el-date-picker :disabled="disabledObj['purchase_date_isDisabled']" v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','purchase_date')) || (!form['procurement_information_id'] && $check_field('add','purchase_date'))" id="purchase_date"
						v-model="form['purchase_date']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','purchase_date')">{{form['purchase_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','supplier') || $check_field('add','supplier') || $check_field('set','supplier')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="供应商" prop="supplier">
								<el-select id="supplier" v-model="form['supplier']"
						v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','supplier')) || (!form['procurement_information_id'] && $check_field('add','supplier'))">
						<el-option v-for="o in list_supplier" :key="o['corporate_name']" :label="o['corporate_name']"
							:value="o['corporate_name']">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','supplier')">{{form['supplier']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','procurement_personnel') || $check_field('add','procurement_personnel') || $check_field('set','procurement_personnel')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="采购人员" prop="procurement_personnel">
												<el-input id="procurement_personnel" v-model="form['procurement_personnel']" placeholder="请输入采购人员"
							  v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','procurement_personnel')) || (!form['procurement_information_id'] && $check_field('add','procurement_personnel'))" :disabled="disabledObj['procurement_personnel_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','procurement_personnel')">{{form['procurement_personnel']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','purchase_quantity') || $check_field('add','purchase_quantity') || $check_field('set','purchase_quantity')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="采购数量" prop="purchase_quantity">
												<el-input id="purchase_quantity" v-model="form['purchase_quantity']" placeholder="请输入采购数量"
							  v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','purchase_quantity')) || (!form['procurement_information_id'] && $check_field('add','purchase_quantity'))" :disabled="disabledObj['purchase_quantity_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','purchase_quantity')">{{form['purchase_quantity']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','purchase_price') || $check_field('add','purchase_price') || $check_field('set','purchase_price')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="采购价格" prop="purchase_price">
												<el-input id="purchase_price" v-model="form['purchase_price']" placeholder="请输入采购价格"
							  v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','purchase_price')) || (!form['procurement_information_id'] && $check_field('add','purchase_price'))" :disabled="disabledObj['purchase_price_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','purchase_price')">{{form['purchase_price']}}</div>
											</el-form-item>
			</el-col>
							<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核状态" prop="examine_state">
					<el-select id="examine_state" v-model="form['examine_state']"
						v-if="user_group === '管理员' || (form['examine_state'] && $check_examine()) || (!form['examine_state'] && $check_examine())">
						<el-option key="未审核" label="未审核" value="未审核"></el-option>
						<el-option key="已通过" label="已通过" value="已通过"></el-option>
						<el-option key="未通过" label="未通过" value="未通过"></el-option>
					</el-select>
					<div v-else>{{form["examine_state"]}}</div>
				</el-form-item>
			</el-col>
					<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核回复" prop="examine_reply">
					<el-input id="examine_reply" v-model="form['examine_reply']" placeholder="请输入审核回复"
						v-if="user_group === '管理员' || (form['examine_reply'] && $check_examine()) || (!form['examine_reply'] && $check_examine())"></el-input>
					<div v-else>{{form["examine_reply"]}}</div>
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
				field: "procurement_information_id",
				url_add: "~/api/procurement_information/add?",
				url_set: "~/api/procurement_information/set?",
				url_get_obj: "~/api/procurement_information/get_obj?",
				url_upload: "~/api/procurement_information/upload?",

				query: {
					"procurement_information_id": 0,
				},

				form: {
								"product_number":  '', // 商品编号
										"product_name":  '', // 商品名称
										"purchase_date":  '', // 采购日期
										"supplier":  '', // 供应商
										"procurement_personnel":  '', // 采购人员
										"purchase_quantity":  '', // 采购数量
										"purchase_price":  '', // 采购价格
									"examine_state": "未审核",
							"examine_reply": "",
							"procurement_information_id": 0, // ID
						
				},
				disabledObj:{
								"product_number_isDisabled": false,
										"product_name_isDisabled": false,
										"purchase_date_isDisabled": false,
										"supplier_isDisabled": false,
										"procurement_personnel_isDisabled": false,
										"purchase_quantity_isDisabled": false,
										"purchase_price_isDisabled": false,
										},

	
		
		
						// 供应商选项列表
				list_supplier: [""],
	
		
		
		
	
			}
		},
		methods: {


	
	
			
	
			
	
			
				/**
			 * 获取供应商列表
			 */
			async get_list_supplier() {
				var json = await this.$get("~/api/supplier_management/get_list?");
				if(json.result && json.result.list){
					this.list_supplier = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
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
						        if (this.form["purchase_date"].indexOf("-")===-1){
          this.form["purchase_date"] = this.$toTime(parseInt(this.form["purchase_date"]),"yyyy-MM-dd")
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


								        if(this.form["purchase_date"]=="0000-00-00"){
          this.form["purchase_date"] = null;
        }
				if(parseInt(this.form["purchase_date"]) > 9999){
					this.form["purchase_date"] = this.$toTime(parseInt(this.form["purchase_date"]),"yyyy-MM-dd")
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
					bl = this.$check_action('/procurement_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/procurement_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/procurement_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/procurement_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/procurement_information/view','get');
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
										this.get_list_supplier();
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
