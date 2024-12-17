<template>
	<view class="diy_edit page_procurement_information" id="procurement_information_edit">
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
							<view v-if="$check_field('set','purchase_date') || $check_field('add','purchase_date') || $check_field('get','purchase_date')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								采购日期:
							</text>
						</view>
								<!-- 日期 -->
						<view class="diy_field diy_date">
							<uni-datetime-picker :disabled="disabledObj['purchase_date_isDisabled']" type="date" id="form_purchase_date" v-model="form['purchase_date']" placeholder="请输入采购日期" v-if="(form['purchase_date'] && $check_field('set','purchase_date')) || (!form['purchase_date'] && $check_field('add','purchase_date'))" />
							<text v-else-if="$check_field('get','purchase_date')">{{ form['purchase_date'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','supplier') || $check_field('add','supplier') || $check_field('get','supplier')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								供应商:
							</text>
						</view>
								<!-- 选项 -->
						<view class="diy_field diy_down diy_select_flex">
							<uni-data-select
									id="form_supplier"
									v-model="form['supplier']"
									:localdata="list_supplier"
									v-if="(form['supplier'] && $check_field('set','supplier')) || (!form['supplier'] && $check_field('add','supplier'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','supplier')">{{ form['supplier'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','procurement_personnel') || $check_field('add','procurement_personnel') || $check_field('get','procurement_personnel')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								采购人员:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_procurement_personnel" v-model="form['procurement_personnel']" placeholder="请输入采购人员" v-if="(form['procurement_personnel'] && $check_field('set','procurement_personnel')) || (!form['procurement_personnel'] && $check_field('add','procurement_personnel'))" :disabled="disabledObj['procurement_personnel_isDisabled']" />
							<text v-else-if="$check_field('get','procurement_personnel')">{{ form['procurement_personnel'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','purchase_quantity') || $check_field('add','purchase_quantity') || $check_field('get','purchase_quantity')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								采购数量:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_purchase_quantity" v-model="form['purchase_quantity']" placeholder="请输入采购数量" v-if="(form['purchase_quantity'] && $check_field('set','purchase_quantity')) || (!form['purchase_quantity'] && $check_field('add','purchase_quantity'))" :disabled="disabledObj['purchase_quantity_isDisabled']" />
							<text v-else-if="$check_field('get','purchase_quantity')">{{ form['purchase_quantity'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','purchase_price') || $check_field('add','purchase_price') || $check_field('get','purchase_price')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								采购价格:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_purchase_price" v-model="form['purchase_price']" placeholder="请输入采购价格" v-if="(form['purchase_price'] && $check_field('set','purchase_price')) || (!form['purchase_price'] && $check_field('add','purchase_price'))" :disabled="disabledObj['purchase_price_isDisabled']" />
							<text v-else-if="$check_field('get','purchase_price')">{{ form['purchase_price'] }}</text>
						</view>
										</view>
						<view v-if="user_group === '管理员' || $check_examine()" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								审核状态:
							</text>
						</view>
						<view class="diy_field diy_text diy_text_row diy_select_flex">
							<uni-data-select
									v-model="form['examine_state']"
									:localdata="list_examine_state"
							></uni-data-select>
						</view>
						<view class="diy_field diy_text diy_text_row">
							<text>
								{{ form['examine_state'] }}
							</text>
						</view>
					</view>
					<view v-if="user_group === '管理员' || $check_examine()" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								审核回复:
							</text>
						</view>
						<view class="diy_field diy_text diy_text_row">
							<textarea v-model="form['examine_reply']">
							</textarea>
						</view>
						<view class="diy_field diy_text diy_text_row">
							<text>
								{{ form['examine_reply'] }}
							</text>
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
			url_get_obj:"~/api/procurement_information/get_obj?",
			url_add:"~/api/procurement_information/add?",
			url_set:"~/api/procurement_information/set?",

			// 登录权限
			oauth: {
				"signIn": true,
				"user_group": []
			},

			// 查询条件
			query: {
					"product_number": "",
						"product_name": "",
						"purchase_date": "",
						"supplier": "",
						"procurement_personnel": "",
						"purchase_quantity": "",
						"purchase_price": "",
					"procurement_information_id": 0
			},

			obj: {
					"product_number":  '', // 商品编号
						"product_name":  '', // 商品名称
						"purchase_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"supplier":  '', // 供应商
						"procurement_personnel":  '', // 采购人员
						"purchase_quantity":  '', // 采购数量
						"purchase_price":  '', // 采购价格
					"examine_state": "未审核",
				"examine_reply": "",
				"procurement_information_id": 0,

			},

			// 表单字段
			form: {
					"product_number":  '', // 商品编号
						"product_name":  '', // 商品名称
						"purchase_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"supplier":  '', // 供应商
						"procurement_personnel":  '', // 采购人员
						"purchase_quantity":  '', // 采购数量
						"purchase_price":  '', // 采购价格
					"examine_state": "未审核",
				"examine_reply": "",
				"procurement_information_id": 0,
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

										list_supplier: [],
								
			field:"procurement_information_id",
			table_key:"procurement_information",

	list_examine_state:[{value:"未审核",text:"未审核"},{value:"已通过",text:"已通过"},{value:"未通过",text:"未通过"}],
		}
	},
	methods: {
			
	
				
	
				
	
				/**
		 * 获取供应商列表
		 */
		async get_list_supplier() {
							var json = await this.$get("~/api/supplier_management/get_list?");
			if(json.result && json.result.list){
				json.result.list.map((o) => this.list_supplier.push({value:o.corporate_name,text:o.corporate_name}));
			}
			else if(json.error){
				console.error(json.error);
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
						url: _self.$fullUrl('/api/procurement_information/upload?'),
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'procurement_information': 'test'
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
									if (this.form["purchase_date"] && JSON.stringify(this.form["purchase_date"]).indexOf("-")===-1) {
				this.form["purchase_date"] = this.$toTime(parseInt(this.form["purchase_date"]), "yyyy-MM-dd")
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
												this.get_list_supplier();
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

