<template>
	<view class="diy_edit page_sales_information" id="sales_information_edit">
		<view class='warp'>
			<view class='container'>
				<view class='row'>
						<view v-if="$check_field('set','product_number') || $check_field('add','product_number') || $check_field('get','product_number')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								商品编号:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_product_number" v-model="form['product_number']" placeholder="请输入商品编号" v-if="(form['product_number'] && $check_field('set','product_number')) || (!form['product_number'] && $check_field('add','product_number'))" :disabled="disabledObj['product_number_isDisabled']" />
							<text v-else-if="$check_field('get','product_number')">{{ form['product_number'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','product_name') || $check_field('add','product_name') || $check_field('get','product_name')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								商品名称:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_product_name" v-model="form['product_name']" placeholder="请输入商品名称" v-if="(form['product_name'] && $check_field('set','product_name')) || (!form['product_name'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']" />
							<text v-else-if="$check_field('get','product_name')">{{ form['product_name'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','salesman') || $check_field('add','salesman') || $check_field('get','salesman')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								销售人员:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_salesman" v-model="form['salesman']" placeholder="请输入销售人员" v-if="(form['salesman'] && $check_field('set','salesman')) || (!form['salesman'] && $check_field('add','salesman'))" :disabled="disabledObj['salesman_isDisabled']" />
							<text v-else-if="$check_field('get','salesman')">{{ form['salesman'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','commodity_price') || $check_field('add','commodity_price') || $check_field('get','commodity_price')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								商品价格:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_commodity_price" v-model="form['commodity_price']" placeholder="请输入商品价格" v-if="(form['commodity_price'] && $check_field('set','commodity_price')) || (!form['commodity_price'] && $check_field('add','commodity_price'))" :disabled="disabledObj['commodity_price_isDisabled']" />
							<text v-else-if="$check_field('get','commodity_price')">{{ form['commodity_price'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','sales_date') || $check_field('add','sales_date') || $check_field('get','sales_date')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								销售日期:
							</text>
						</view>
								<!-- 日期 -->
						<view class="diy_field diy_date">
							<uni-datetime-picker :disabled="disabledObj['sales_date_isDisabled']" type="date" id="form_sales_date" v-model="form['sales_date']" placeholder="请输入销售日期" v-if="(form['sales_date'] && $check_field('set','sales_date')) || (!form['sales_date'] && $check_field('add','sales_date'))" />
							<text v-else-if="$check_field('get','sales_date')">{{ form['sales_date'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','sales_volumes') || $check_field('add','sales_volumes') || $check_field('get','sales_volumes')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								销售数量:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_sales_volumes" v-model="form['sales_volumes']" placeholder="请输入销售数量" v-if="(form['sales_volumes'] && $check_field('set','sales_volumes')) || (!form['sales_volumes'] && $check_field('add','sales_volumes'))" :disabled="disabledObj['sales_volumes_isDisabled']" />
							<text v-else-if="$check_field('get','sales_volumes')">{{ form['sales_volumes'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','sales_amount') || $check_field('add','sales_amount') || $check_field('get','sales_amount')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								销售金额:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_sales_amount" v-model="form['sales_amount']" placeholder="请输入销售金额" v-if="(form['sales_amount'] && $check_field('set','sales_amount')) || (!form['sales_amount'] && $check_field('add','sales_amount'))" @focus="set_sales_amount()" :disabled="disabledObj['sales_amount_isDisabled']" />
							<text v-else-if="$check_field('get','sales_amount')">{{ form['sales_amount'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','customer_name') || $check_field('add','customer_name') || $check_field('get','customer_name')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								客户姓名:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_customer_name" v-model="form['customer_name']" placeholder="请输入客户姓名" v-if="(form['customer_name'] && $check_field('set','customer_name')) || (!form['customer_name'] && $check_field('add','customer_name'))" :disabled="disabledObj['customer_name_isDisabled']" />
							<text v-else-if="$check_field('get','customer_name')">{{ form['customer_name'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','contact_information') || $check_field('add','contact_information') || $check_field('get','contact_information')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								联系方式:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_contact_information" v-model="form['contact_information']" placeholder="请输入联系方式" v-if="(form['contact_information'] && $check_field('set','contact_information')) || (!form['contact_information'] && $check_field('add','contact_information'))" :disabled="disabledObj['contact_information_isDisabled']" />
							<text v-else-if="$check_field('get','contact_information')">{{ form['contact_information'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','sales_remarks') || $check_field('add','sales_remarks') || $check_field('get','sales_remarks')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								销售备注:
							</text>
						</view>
								<!-- 多文本 -->
						<view class="diy_field diy_desc diy_text_row">
							<textarea id="form_sales_remarks" v-model="form['sales_remarks']" v-if="(form['sales_remarks'] && $check_field('set','sales_remarks')) || (!form['sales_remarks'] && $check_field('add','sales_remarks'))" :disabled="disabledObj['sales_remarks_isDisabled']"/>
							<text v-else-if="$check_field('get','sales_remarks')">{{ form['sales_remarks'] }}</text>
						</view>
							</view>
	
				</view>
				<view class="row">
					<view class="col-12">
						<view class="btn_box">
							<button class="btn_submit primary_btn" @click="submit()">提交</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import mixin from "@/libs/mixins/page.js";
export default {
	mixins:[mixin],
	components:{},
	data(){
		return{
			url_get_obj:"~/api/sales_information/get_obj?",
			url_add:"~/api/sales_information/add?",
			url_set:"~/api/sales_information/set?",

			// 登录权限
			oauth: {
				"signIn": true,
				"user_group": []
			},

			// 查询条件
			query: {
					"product_number": "",
						"product_name": "",
						"salesman": "",
						"commodity_price": "",
						"sales_date": "",
						"sales_volumes": 0,
						"sales_amount": "",
						"customer_name": "",
						"contact_information": "",
						"sales_remarks": "",
					"sales_information_id": 0
			},

			obj: {
					"product_number":  '', // 商品编号
						"product_name":  '', // 商品名称
						"salesman":  '', // 销售人员
						"commodity_price":  '', // 商品价格
						"sales_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"sales_volumes":  0 , // 销售数量
						"sales_amount":  '', // 销售金额
						"customer_name":  '', // 客户姓名
						"contact_information":  '', // 联系方式
						"sales_remarks":  '', // 销售备注
					"sales_information_id": 0,

			},

			// 表单字段
			form: {
					"product_number":  '', // 商品编号
						"product_name":  '', // 商品名称
						"salesman":  '', // 销售人员
						"commodity_price":  '', // 商品价格
						"sales_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"sales_volumes":  0 , // 销售数量
						"sales_amount":  '', // 销售金额
						"customer_name":  '', // 客户姓名
						"contact_information":  '', // 联系方式
						"sales_remarks":  '', // 销售备注
					"sales_information_id": 0,
			},
			disabledObj:{
					"product_number_isDisabled": false,
						"product_name_isDisabled": false,
						"salesman_isDisabled": false,
						"commodity_price_isDisabled": false,
						"sales_date_isDisabled": false,
								"sales_amount_isDisabled": false,
						"customer_name_isDisabled": false,
						"contact_information_isDisabled": false,
						"sales_remarks_isDisabled": false,
				},

																				
			field:"sales_information_id",
			table_key:"sales_information",

		}
	},
	methods: {
			
	
				
	
				
	
				
	
				
	
				
	
				
	
								set_sales_amount(){
			this.form.sales_amount = parseFloat(this.form.commodity_price) * parseFloat(this.form.sales_volumes)
			  let r = /^\+?[1-9][0-9]*$/; // 正整数
			  if(!r.test(this.form.sales_amount) ){
				this.form.sales_amount = this.form.sales_amount.toFixed(2);
			  }
		},
									
	
				
	
				
	
			change_file(key_name){
			var _self = this;
				this.$chooseFile().then(res=>{
					console.log(res)

						const uploadTask = uni.uploadFile({
							url: _self.$fullUrl("/api/feedback/upload?"),
							filePath: res[0].path,
							name: "file",
							formData: {
								i_want_to_customize: "test",
							},
							header: {
								"x-auth-token": _self.$store.state.user.token,
							},
							success: function(uploadFileRes) {
								console.log(uploadFileRes)
								var filename = JSON.parse(uploadFileRes.data).result.url;
								_self.form[key_name] = filename;
							},
						});

						uploadTask.onProgressUpdate(function(res) {
							_self.percent = res.progress;
							console.log("上传进度" + res.progress);
							console.log("已经上传的数据长度" + res.totalBytesSent);
							console.log(
								"预期需要上传的数据总长度" + res.totalBytesExpectedToSend
							);
						});

				})
		},
		change_img(key_name) {
			var _self = this;
			_self.upload_img_flag = false
			// 选择图像方法
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function(res) {
					const tempFilePaths = res.tempFilePaths;
					const uploadTask = uni.uploadFile({
						url: _self.$fullUrl('/api/sales_information/upload?'),
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'sales_information': 'test'
						},
						header: {
							'x-auth-token': _self.$store.state.user.token
						},
						success: function(uploadFileRes) {
							var filename = JSON.parse(uploadFileRes.data).result.url
							var img_url = filename
							_self.form[key_name] = img_url
						}
					});

					uploadTask.onProgressUpdate(function(res) {
						_self.percent = res.progress;
						console.log('上传进度' + res.progress);
						console.log('已经上传的数据长度' + res.totalBytesSent);
						console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
					});
				},
				error: function(e) {
					console.log(e);
				}
			});
		},

		/**
		 * 获取对象后获取缓存表单
		 * @param {Object} json
		 * @param {Object} func
		 */
		get_obj_before(param){
			var form = uni.db.get("form");
			if (form) {
        delete(form.examine_state)
        delete(form.examine_reply)
				this.obj = uni.push(this.obj ,form);
				this.form = uni.push(this.form ,form);
			}
			var arr = []
			for (let key in form) {
				arr.push(key)
			}
			for (var i=0;i<arr.length;i++){
				this.disabledObj[arr[i] + '_isDisabled'] = true
			}
													if (this.form["sales_date"] && JSON.stringify(this.form["sales_date"]).indexOf("-")===-1) {
				this.form["sales_date"] = this.$toTime(parseInt(this.form["sales_date"]), "yyyy-MM-dd")
			}
														uni.db.del("form");
			return param;
		},

		/**
		 * 获取对象后获取缓存表单
		 * @param {Object} json
		 * @param {Object} func
		 */
		get_obj_after(json ,func){
			var form = uni.db.get("form");
			var obj = Object.assign({} ,form ,this.obj);
			if (form) {
				this.obj = uni.push(this.obj ,obj);
			}
			if (form) {
				this.form = uni.push(this.form ,form);
			}
			if(func){
				func(json);
			}
		},

	},
	onLoad(){
																															},
}
</script>

<style scoped>
	input{
		font-size: 10px;
	}

	.form_edit {
		background-color: #fff;
		margin-bottom: 0.5rem;
		padding: 1rem;
		font-size: 10px;
	}

	.item {
		display: flex;
		padding: 0.2rem 0;
	}

	.left_text {
		flex: 0 0 25%;
		display: flex;
		align-items: center;
	}

	.right_text {
		flex: 0 0 75%;
		border-bottom: 1px solid #eee;
	}
	.right_text.btn_warp{
		border-bottom: 0;
	}

	.btn_submit {
		text-align: center;
		background-color: #fff;
		padding: 0.3rem;
		margin: 0.1rem 1rem;
		border: 1px solid #eee;
		border-radius: 0.5rem;
	}

	.btn_submit:hover {
		opacity: 0.5;
	}
	.btn_add_img{
		color: #D3D3D3;
		text-align: center;
		border: 1px solid #eee;
		height: 5rem;
		width: 5rem;
		position: relative;
	}
	.btn_add_img text{
		font-size: 35px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}




</style>
<style scoped>
/*新样式*/
.diy_text_row {
  display: inline-block;
}
.container {
	margin-top:1rem ;
	padding: 1rem;
    -webkit-box-shadow: 0px 0px 0px #888888;
    box-shadow: 0px 0px 0px #888888;
}
.primary_btn{
		background-color: #22B8B8;
		color: #FFFFFF;
	}
	.btn_submit{
		padding: 0;
		margin-top:1rem ;
	}
	.row-item {
		padding: 10px 10px;
	    background: #f8f6fc;
		margin-bottom: 1rem;
	}
	.diy_field{
		padding-left: 1rem;
	}
	.diy_title{
		align-items: center;
        font-size: 14px;
        color: #333;
	}

	.row-item{
		display: flex !important;
		align-items: baseline;
	}
	.diy_select_flex{
		flex: 1;
	}
	.query_select{
		flex: 1;
		border-color: rgb(229, 229, 229);
		background-color: rgb(255, 255, 255);
		border-radius: 4px;
		box-sizing: border-box;
		flex: 1;
		width: 100%;
		line-height: 2;
		font-size: 14px;
		height: 2.4em;
		min-height: 2.4em;
		display: block;
		outline:none;
	}
</style>

