<template>
	<view class="diy_details diy_div_order_transportation">
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
					<view v-if="$check_field('get','salesman')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>销售人员:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["salesman"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','customer_name')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>客户姓名:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["customer_name"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','contact_number')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>联系电话:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["contact_number"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','delivery_tools')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>配送工具:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["delivery_tools"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','drivers_name')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>司机姓名:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["drivers_name"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','contact_information')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>联系方式:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["contact_information"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','route_delivery')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>路线配送:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["route_delivery"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','transportation_remarks')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>运输备注:</span>
						</view>
							<view class="diy_field diy_desc">
							<text>
								{{ obj["transportation_remarks"] }}
							</text>
						</view>
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
						order_transportation_id: 0
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
				var res = await this.$get("~/api/order_transportation/get_obj", {
					order_transportation_id:this.query.order_transportation_id
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
			} else if (this.query["order_transportation_id"] !==0) {
				await this.get_obj_by_id();
			}
		}
	}
</script>

<style scoped>
	.div_order_transportation_details {}

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
