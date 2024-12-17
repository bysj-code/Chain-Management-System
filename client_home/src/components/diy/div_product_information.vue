<template>
	<view class="diy_details diy_div_product_information">
		<view v-if="Object.keys(obj).length!==0" class="warp">
			<view class="container">
				<view class="row">
					<view v-if="$check_field('get','product_number')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>商品编号:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["product_number"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','product_name')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>商品名称:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["product_name"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','product_type')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>商品类型:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["product_type"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','storage_location')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>存放位置:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["storage_location"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','commodity_price')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>商品价格:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["commodity_price"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','inventory_quantity')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>库存数量:</span>
						</view>
							<view class="diy_field diy_number">
							<text>
								{{ obj["inventory_quantity"] }}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','remarks')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>备注信息:</span>
						</view>
							<view class="diy_field diy_desc">
							<text>
								{{ obj["remarks"] }}
							</text>
						</view>
						</view>
				</view>
			</view>
		</view>

			<view class="warp">
			<view class="container">
				<view class="row">
					<view class="col">
						<button type="button" class="diy_btn" @click="to_form('/pages/procurement_information/edit')" v-if="$check_action('/procurement_information/edit','add') || $check_action('/procurement_information/edit','set')" >采购</button>
					</view>
				</view>
			</view>
		</view>
			<view class="warp">
			<view class="container">
				<view class="row">
					<view class="col">
						<button type="button" class="diy_btn" @click="to_form('/pages/sales_information/edit')" v-if="$check_action('/sales_information/edit','add') || $check_action('/sales_information/edit','set')" >销售</button>
					</view>
				</view>
			</view>
		</view>
			<view class="warp">
			<view class="container">
				<view class="row">
					<view class="col">
						<button type="button" class="diy_btn" @click="to_form('/pages/warehousing_information/edit')" v-if="$check_action('/warehousing_information/edit','add') || $check_action('/warehousing_information/edit','set')" >入库</button>
					</view>
				</view>
			</view>
		</view>
			<view class="warp">
			<view class="container">
				<view class="row">
					<view class="col">
						<button type="button" class="diy_btn" @click="to_form('/pages/outbound_information/edit')" v-if="$check_action('/outbound_information/edit','add') || $check_action('/outbound_information/edit','set')" >出库</button>
					</view>
				</view>
			</view>
		</view>
		</view>
</template>

<script>
	import mixin from "@/libs/mixins/component.js";
	export default {
		mixins: [mixin],
		props: {
			obj_goods: {
				type: Object,
				default(){
					return {}
				}
			},
			query:{
				type: Object,
				default(){
					return {
						product_information_id: 0
					}
				}
			}
		},
		data() {
			return {
				obj_goods_type: {},
				obj: {},
										}
		},
		methods: {
			async get_obj_goods_type() {
				var res = await this.$get("~/api/goods_type/get_obj", {
					name: this.obj_goods.type
				})

				if (res.result.obj) {
					this.obj_goods_type = res.result.obj
				} else {
					console.log("没有请求到商品分类");
				}
			},
			async get_obj_by_goods() {
				var {
					source_table,
					source_field
				} = this.obj_goods_type
				var {
					source_id
				} = this.obj_goods
				var query = {}
				query[source_field] = source_id
				this.$get("~/api/" + source_table + "/get_obj", {}, (res) => {
					if (res.result.obj) {
						this.obj = res.result.obj
					} else {
						console.log("没有请求到商品分类");
					}
				})
			},
			async get_obj_by_id(){
				var res = await this.$get("~/api/product_information/get_obj", {
					product_information_id:this.query.product_information_id
				})

				if (res.result && res.result.obj) {
					this.obj = res.result.obj
				} else {
					console.log("没有请求到商品分类");
				}
			},
									},
		created() {
									},
		async onLoad(){
			if (Object.keys(this.obj_goods).length !== 0) {
				await this.get_obj_goods_type();
				await this.get_obj_by_goods();
			} else if (this.query["product_information_id"] !==0) {
				await this.get_obj_by_id();
			}
		}
	}
</script>

<style scoped>
	.div_product_information_details {}

	.details {
		background-color: #fff;
		margin-bottom: 0.5rem;
		padding: 1rem;
		font-size: 10px;
	}

	.item {
		display: flex;
		padding: 0.2rem 0;
		border-bottom: 1px solid #eee;
	}

	.left_text {
		flex: 0 0 25%;
	}

	.right_text {
		flex: 0 0 75%;
	}
	.edit_nav{
		text-align: center;
		background-color: #fff;
		padding: 0.3rem;
		margin: 0.1rem 1rem;
		border: 1px solid #eee;
		border-radius: 0.5rem;
	}
</style>
