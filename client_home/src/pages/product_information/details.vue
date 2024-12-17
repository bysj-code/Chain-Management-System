<template>
	<view class="page_product_information diy_detail diy_detail--new" id="product_information_details">
		<view class="warp">
			<view class="container-fluid">
				<view class="row">
					<view v-if="$check_field('get','product_number')" class="col-12 col-6">
						<view class="view">
							<view class="diy_title">
								<span>商品编号</span>
							</view>
								<view class="diy_field diy_text">
								<span>
									{{ obj["product_number"] }}
								</span>
							</view>
							</view>
					</view>
					<view v-if="$check_field('get','product_name')" class="col-12 col-6">
						<view class="view">
							<view class="diy_title">
								<span>商品名称</span>
							</view>
								<view class="diy_field diy_text">
								<span>
									{{ obj["product_name"] }}
								</span>
							</view>
							</view>
					</view>
					<view v-if="$check_field('get','product_type')" class="col-12 col-6">
						<view class="view">
							<view class="diy_title">
								<span>商品类型</span>
							</view>
								<view class="diy_field diy_text">
								<span>
									{{ obj["product_type"] }}
								</span>
							</view>
							</view>
					</view>
					<view v-if="$check_field('get','storage_location')" class="col-12 col-6">
						<view class="view">
							<view class="diy_title">
								<span>存放位置</span>
							</view>
								<view class="diy_field diy_text">
								<span>
									{{ obj["storage_location"] }}
								</span>
							</view>
							</view>
					</view>
					<view v-if="$check_field('get','commodity_price')" class="col-12 col-6">
						<view class="view">
							<view class="diy_title">
								<span>商品价格</span>
							</view>
								<view class="diy_field diy_text">
								<span>
									{{ obj["commodity_price"] }}
								</span>
							</view>
							</view>
					</view>
					<view v-if="$check_field('get','inventory_quantity')" class="col-12 col-6">
						<view class="view">
							<view class="diy_title">
								<span>库存数量</span>
							</view>
								<view class="diy_field diy_number">
								<span>
									{{ obj["inventory_quantity"] }}
								</span>
							</view>
							</view>
					</view>
					<view v-if="$check_field('get','remarks')" class="col-12 col-6">
						<view class="view">
							<view class="diy_title">
								<span>备注信息</span>
							</view>
								<view class="diy_field diy_desc">
								<span>
									{{ obj["remarks"] }}
								</span>
							</view>
							</view>
					</view>
				</view>
			</view>
		</view>




		<view class="warp">
			<view class="container-fluid container-fluid-comment--new">
				<view class="row">
					<view class="col">
									<button type="button" class="btn btn-primary" v-if="$check_action('/procurement_information/edit','add')" @click="to_form('/pages/procurement_information/edit')">
							<span>采购</span>
						</button>
								<button type="button" class="btn btn-primary" v-if="$check_action('/sales_information/edit','add')" @click="to_form('/pages/sales_information/edit')">
							<span>销售</span>
						</button>
								<button type="button" class="btn btn-primary" v-if="$check_action('/warehousing_information/edit','add')" @click="to_form('/pages/warehousing_information/edit')">
							<span>入库</span>
						</button>
								<button type="button" class="btn btn-primary" v-if="$check_action('/outbound_information/edit','add')" @click="to_form('/pages/outbound_information/edit')">
							<span>出库</span>
						</button>
			
<!--						<button type="button" class="btn btn-primary" @click="cancel()">返回</button>-->





					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import list_comment from "@/components/diy/list_comment.vue";
	import bar_title from "@/components/diy/bar_title.vue";
	import form_editor from "@/components/diy/form_editor.vue";

	import mixin from "@/libs/mixins/page.js";
	export default {
		mixins: [mixin],
		components: {
			list_comment,
			bar_title,
			form_editor
		},
		data() {
			return {
				url_get_obj: "~/api/product_information/get_obj?",
				field: "product_information_id",
				query: {
					"product_information_id": 0
				},
				// 商品详情初始化
				obj: {
						"product_number": "",
							"product_name": "",
							"product_type": "",
							"storage_location": "",
							"commodity_price": "",
							"inventory_quantity": 0,
							"remarks": "",
						"product_information_id": 0,

				},
				// 点赞
				praise: 0,
				// 点赞状态
				state_praise: false,
				// 收藏
				collect: 0,
				// 收藏状态
				state_collect: false,
				// 评论列表初始化
				list_comment: [],
				// 评论bar标题
				bar_title: "评论区",
				// 评论bar的链接
				bar_url: "",
										}
		},
		methods: {
			openUrl(url) {
				console.log(1111)
				uni.navigateTo({
					url:`/pages/webview/webview?url=${url}`
				})
			},




			/**
			 * 获取对象之后
			 * @param {Object} json 结果对象
			 */
			get_obj_after(json) {
				// 判断是否获取到数据
				if (this.obj) {
					var obj = this.obj;
				}
			},

									},
		created() {
									},
		mounted() {
		},
	}

</script>

<style>
	.page_goods {
		padding-bottom: 3rem;
	}

	.link {
		text-align: center;
		padding: 0.5rem 0;
		border: 1px solid #DBDBDB;
		border-radius: 0.5rem;
	}

	.buy_wrap {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	.dialog {
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
		position: fixed;
		left: 0;
		top: 0;
		padding: 20vh 0;
	}

	.dialog-content {
		width: 500upx;
		height: 60vh;
		margin: 0 auto;
		background: #FFF;
		border-radius: 10upx;
		overflow: hidden;
		position: relative;
		display: flex;
		flex-direction: column;
		padding:  5vh;
		text-align: center;

	}
	.dialog-content span{
		margin-top:  3vh;
		}

	.dialog-close {
		width: 40upx;
		height: 40upx;
		border-radius: 20upx;
		position: absolute;
		right: 10upx;
		top: 10upx;
		font-size: 26upx;
		line-height: 40upx;
		text-align: center;
	}

	.dialog-list {
		padding: 40upx 20upx;
	}

	scroll-view {
		width: 100%;
		height: 100%;
	}

	.show-dialog {
		animation: 100ms showDialog linear forwards;
	}

	.hide-dialog {
		animation: 100ms hideDialog linear forwards;
	}

	@keyframes hideDialog {
		0% {
			opacity: 1;
		}


		100% {
			opacity: 0;
		}
	}

	@keyframes showDialog {
		0% {
			opacity: 0;
		}


		100% {
			opacity: 1;
		}
	}

	/* new style start */
	.diy_detail--new{
		padding: 5px;
	}
	.diy_detail--new .view {
		border-bottom: 1px solid #ccc;
		padding: 8px 0 ;
	}
	.diy_detail--new .view uni-view{
		display: inline-block;
	}
	.diy_detail--new .view .diy_title{
		color: var(--color_primary);
		margin-right: 5px;
		vertical-align: top;
	}
	.diy_detail--new .view .diy_img img{
		width: 100%;
	}
	.diy_detail--new .view .diy_music{
		vertical-align: text-top;
	}
	.diy_detail--new .bar_title{
		position: relative;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2px;
		background: var(--color_primary);
		border-radius: 10px;
		height: 46px;
	}
	.diy_detail--new .bar_title .title{
		margin: 0 auto;
		color: var(--color_white);
		font-weight: 600;
	}
	.diy_detail--new .container-fluid-comment--new{
		margin: 10px 0.6rem;
	}
	.diy_detail--new .container-fluid-comment--new .col{
		display: flex;
		flex: auto;
		flex-wrap: wrap;
		flex-direction: row;
		margin-left: -10px;
	}
	.diy_detail--new .container-fluid-comment--new .btn{
		display: inline-block;
		border: none;
		background: var(--color_primary);
		color: #fff;
		font-size: 16px !important;
		padding: 2px 12px !important;
		border-radius: 20px;
		line-height: inherit;
		margin-bottom: 5px;
		margin-left: 10px;
		margin-right: 0;
	}
	.diy_detail--new .container-fluid-comment--new .btn:after{
		display: none;
	}
	.diy_detail--new .container-fluid-comment--new .btn .uni-icons{
		color: #fff !important;
	}
	.diy_detail--new .comment_title{
		margin-top: 10px;
	}
	/* new style end */

</style>
