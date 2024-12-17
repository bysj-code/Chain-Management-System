<template>
	<view class="diy_edit page_outbound_information" id="outbound_information_edit">
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
							<view v-if="$check_field('set','outbound_personnel') || $check_field('add','outbound_personnel') || $check_field('get','outbound_personnel')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								出库人员:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_outbound_personnel" v-model="form['outbound_personnel']" placeholder="请输入出库人员" v-if="(form['outbound_personnel'] && $check_field('set','outbound_personnel')) || (!form['outbound_personnel'] && $check_field('add','outbound_personnel'))" :disabled="disabledObj['outbound_personnel_isDisabled']" />
							<text v-else-if="$check_field('get','outbound_personnel')">{{ form['outbound_personnel'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','delivery_time') || $check_field('add','delivery_time') || $check_field('get','delivery_time')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								出库时间:
							</text>
						</view>
								<!-- 日期 -->
						<view class="diy_field diy_date">
							<uni-datetime-picker :disabled="disabledObj['delivery_time_isDisabled']" type="date" id="form_delivery_time" v-model="form['delivery_time']" placeholder="请输入出库时间" v-if="(form['delivery_time'] && $check_field('set','delivery_time')) || (!form['delivery_time'] && $check_field('add','delivery_time'))" />
							<text v-else-if="$check_field('get','delivery_time')">{{ form['delivery_time'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','outbound_quantity') || $check_field('add','outbound_quantity') || $check_field('get','outbound_quantity')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								出库数量:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_outbound_quantity" v-model="form['outbound_quantity']" placeholder="请输入出库数量" v-if="(form['outbound_quantity'] && $check_field('set','outbound_quantity')) || (!form['outbound_quantity'] && $check_field('add','outbound_quantity'))" :disabled="disabledObj['outbound_quantity_isDisabled']" />
							<text v-else-if="$check_field('get','outbound_quantity')">{{ form['outbound_quantity'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','outbound_remarks') || $check_field('add','outbound_remarks') || $check_field('get','outbound_remarks')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								出库备注:
							</text>
						</view>
								<!-- 多文本 -->
						<view class="diy_field diy_desc diy_text_row">
							<textarea id="form_outbound_remarks" v-model="form['outbound_remarks']" v-if="(form['outbound_remarks'] && $check_field('set','outbound_remarks')) || (!form['outbound_remarks'] && $check_field('add','outbound_remarks'))" :disabled="disabledObj['outbound_remarks_isDisabled']"/>
							<text v-else-if="$check_field('get','outbound_remarks')">{{ form['outbound_remarks'] }}</text>
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
			url_get_obj:"~/api/outbound_information/get_obj?",
			url_add:"~/api/outbound_information/add?",
			url_set:"~/api/outbound_information/set?",

			// 登录权限
			oauth: {
				"signIn": true,
				"user_group": []
			},

			// 查询条件
			query: {
					"product_number": "",
						"product_name": "",
						"outbound_personnel": "",
						"delivery_time": "",
						"outbound_quantity": 0,
						"outbound_remarks": "",
					"outbound_information_id": 0
			},

			obj: {
					"product_number":  '', // 商品编号
						"product_name":  '', // 商品名称
						"outbound_personnel":  '', // 出库人员
						"delivery_time": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"outbound_quantity":  0 , // 出库数量
						"outbound_remarks":  '', // 出库备注
					"outbound_information_id": 0,

			},

			// 表单字段
			form: {
					"product_number":  '', // 商品编号
						"product_name":  '', // 商品名称
						"outbound_personnel":  '', // 出库人员
						"delivery_time": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"outbound_quantity":  0 , // 出库数量
						"outbound_remarks":  '', // 出库备注
					"outbound_information_id": 0,
			},
			disabledObj:{
					"product_number_isDisabled": false,
						"product_name_isDisabled": false,
						"outbound_personnel_isDisabled": false,
						"delivery_time_isDisabled": false,
								"outbound_remarks_isDisabled": false,
				},

												
			field:"outbound_information_id",
			table_key:"outbound_information",

		}
	},
	methods: {
			
	
				
	
				
	
				
	
				
	
				
	
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
						url: _self.$fullUrl('/api/outbound_information/upload?'),
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'outbound_information': 'test'
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
											if (this.form["delivery_time"] && JSON.stringify(this.form["delivery_time"]).indexOf("-")===-1) {
				this.form["delivery_time"] = this.$toTime(parseInt(this.form["delivery_time"]), "yyyy-MM-dd")
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

