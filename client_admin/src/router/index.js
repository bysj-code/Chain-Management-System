import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			index: 0,
			title: '首页'
		}
	},

	// 登录
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			index: 0,
			title: '登录'
		}
	},


	// 忘记密码
	{
		path: '/forgot',
		name: "forgot",
		component: forgot,
		meta: {
			index: 0,
			title: '忘记密码'
		}
	},

	// 修改密码
	{
		path: '/user/password',
		name: "password",
		component: () => import("../views/user/password.vue"),
		meta: {
			index: 0,
			title: '修改密码'
		}
	},

	// 视频播放页
	{
		path: "/media/video",
		name: "video",
		component: () => import('../views/media/video.vue'),
		meta: {
			index: 0,
			title: "视频"
		}
	},

	// 音频播放页
	{
		path: "/media/audio",
		name: "audio",
		component: () => import('../views/media/audio.vue'),
		meta: {
			index: 0,
			title: "音频"
		}
	},



	// 友情链接路由
	// {
	// 	path: '/link/table',
	// 	name: 'link_table',
	// 	component: () => import('../views/link/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接列表'
	// 	}
	// },
	// {
	// 	path: '/link/view',
	// 	name: 'link_view',
	// 	component: () => import('../views/link/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接详情'
	// 	}
	// },

	// 轮播图路由
	{
		path: '/slides/table',
		name: 'slides_table',
		component: () => import('../views/slides/table.vue'),
		meta: {
			index: 0,
			title: '轮播图列表'
		}
	},
	{
		path: '/slides/view',
		name: 'slides_view',
		component: () => import('../views/slides/view.vue'),
		meta: {
			index: 0,
			title: '轮播图详情'
		}
	},
		// 文章路由
	{
		path: '/article/table',
		name: 'article_table',
		component: () => import('../views/article/table.vue'),
		meta: {
			index: 0,
			title: '文章列表'
		}
	},
	{
		path: '/article/view',
		name: 'article_view',
		component: () => import('../views/article/view.vue'),
		meta: {
			index: 0,
			title: '文章详情'
		}
	},

	// 文章分类路由
	{
		path: '/article_type/table',
		name: 'article_type_table',
		component: () => import('../views/article_type/table.vue'),
		meta: {
			index: 0,
			title: '文章分类列表'
		}
	},
	{
		path: '/article_type/view',
		name: 'article_type_view',
		component: () => import('../views/article_type/view.vue'),
		meta: {
			index: 0,
			title: '文章分类详情'
		}
	},
	
	// 广告路由
	// {
	// 	path: '/ad/table',
	// 	name: 'ad_table',
	// 	component: () => import('../views/ad/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告列表'
	// 	}
	// },
	// {
	// 	path: '/ad/view',
	// 	name: 'ad_view',
	// 	component: () => import('../views/ad/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告详情'
	// 	}
	// },



	// 公告路由
	{
		path: '/notice/table',
		name: 'notice_table',
		component: () => import('../views/notice/table.vue'),
		meta: {
			index: 0,
			title: '公告栏列表'
		}
	},
	{
		path: '/notice/view',
		name: 'notice_view',
		component: () => import('../views/notice/view.vue'),
		meta: {
			index: 0,
			title: '公告栏详情'
		}
	},


	// 评论路由
	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue'),
		meta: {
			index: 0,
			title: '评论列表'
		}
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue'),
		meta: {
			index: 0,
			title: '评论详情'
		}
	},

	// 人事部路由
	{
		path: '/ministry_of_personnel/table',
		name: 'ministry_of_personnel_table',
		component: () => import('../views/ministry_of_personnel/table.vue'),
		meta: {
			index: 0,
			title: '人事部列表'
		}
	},
	{
		path: '/ministry_of_personnel/view',
		name: 'ministry_of_personnel_view',
		component: () => import('../views/ministry_of_personnel/view.vue'),
		meta: {
			index: 0,
			title: '人事部详情'
		}
	},
	// 财务部路由
	{
		path: '/finance_department/table',
		name: 'finance_department_table',
		component: () => import('../views/finance_department/table.vue'),
		meta: {
			index: 0,
			title: '财务部列表'
		}
	},
	{
		path: '/finance_department/view',
		name: 'finance_department_view',
		component: () => import('../views/finance_department/view.vue'),
		meta: {
			index: 0,
			title: '财务部详情'
		}
	},
	// 销售部路由
	{
		path: '/sales_department/table',
		name: 'sales_department_table',
		component: () => import('../views/sales_department/table.vue'),
		meta: {
			index: 0,
			title: '销售部列表'
		}
	},
	{
		path: '/sales_department/view',
		name: 'sales_department_view',
		component: () => import('../views/sales_department/view.vue'),
		meta: {
			index: 0,
			title: '销售部详情'
		}
	},
	// 采购部路由
	{
		path: '/procurement_department/table',
		name: 'procurement_department_table',
		component: () => import('../views/procurement_department/table.vue'),
		meta: {
			index: 0,
			title: '采购部列表'
		}
	},
	{
		path: '/procurement_department/view',
		name: 'procurement_department_view',
		component: () => import('../views/procurement_department/view.vue'),
		meta: {
			index: 0,
			title: '采购部详情'
		}
	},
	// 服务部路由
	{
		path: '/service_department/table',
		name: 'service_department_table',
		component: () => import('../views/service_department/table.vue'),
		meta: {
			index: 0,
			title: '服务部列表'
		}
	},
	{
		path: '/service_department/view',
		name: 'service_department_view',
		component: () => import('../views/service_department/view.vue'),
		meta: {
			index: 0,
			title: '服务部详情'
		}
	},
	// 部门信息路由
	{
		path: '/department_information/table',
		name: 'department_information_table',
		component: () => import('../views/department_information/table.vue'),
		meta: {
			index: 0,
			title: '部门信息列表'
		}
	},
	{
		path: '/department_information/view',
		name: 'department_information_view',
		component: () => import('../views/department_information/view.vue'),
		meta: {
			index: 0,
			title: '部门信息详情'
		}
	},
	// 供应商管理路由
	{
		path: '/supplier_management/table',
		name: 'supplier_management_table',
		component: () => import('../views/supplier_management/table.vue'),
		meta: {
			index: 0,
			title: '供应商管理列表'
		}
	},
	{
		path: '/supplier_management/view',
		name: 'supplier_management_view',
		component: () => import('../views/supplier_management/view.vue'),
		meta: {
			index: 0,
			title: '供应商管理详情'
		}
	},
	// 商品信息路由
	{
		path: '/product_information/table',
		name: 'product_information_table',
		component: () => import('../views/product_information/table.vue'),
		meta: {
			index: 0,
			title: '商品信息列表'
		}
	},
	{
		path: '/product_information/view',
		name: 'product_information_view',
		component: () => import('../views/product_information/view.vue'),
		meta: {
			index: 0,
			title: '商品信息详情'
		}
	},
	// 采购信息路由
	{
		path: '/procurement_information/table',
		name: 'procurement_information_table',
		component: () => import('../views/procurement_information/table.vue'),
		meta: {
			index: 0,
			title: '采购信息列表'
		}
	},
	{
		path: '/procurement_information/view',
		name: 'procurement_information_view',
		component: () => import('../views/procurement_information/view.vue'),
		meta: {
			index: 0,
			title: '采购信息详情'
		}
	},
	// 入库信息路由
	{
		path: '/warehousing_information/table',
		name: 'warehousing_information_table',
		component: () => import('../views/warehousing_information/table.vue'),
		meta: {
			index: 0,
			title: '入库信息列表'
		}
	},
	{
		path: '/warehousing_information/view',
		name: 'warehousing_information_view',
		component: () => import('../views/warehousing_information/view.vue'),
		meta: {
			index: 0,
			title: '入库信息详情'
		}
	},
	// 出库信息路由
	{
		path: '/outbound_information/table',
		name: 'outbound_information_table',
		component: () => import('../views/outbound_information/table.vue'),
		meta: {
			index: 0,
			title: '出库信息列表'
		}
	},
	{
		path: '/outbound_information/view',
		name: 'outbound_information_view',
		component: () => import('../views/outbound_information/view.vue'),
		meta: {
			index: 0,
			title: '出库信息详情'
		}
	},
	// 销售信息路由
	{
		path: '/sales_information/table',
		name: 'sales_information_table',
		component: () => import('../views/sales_information/table.vue'),
		meta: {
			index: 0,
			title: '销售信息列表'
		}
	},
	{
		path: '/sales_information/view',
		name: 'sales_information_view',
		component: () => import('../views/sales_information/view.vue'),
		meta: {
			index: 0,
			title: '销售信息详情'
		}
	},
	// 订单运输路由
	{
		path: '/order_transportation/table',
		name: 'order_transportation_table',
		component: () => import('../views/order_transportation/table.vue'),
		meta: {
			index: 0,
			title: '订单运输列表'
		}
	},
	{
		path: '/order_transportation/view',
		name: 'order_transportation_view',
		component: () => import('../views/order_transportation/view.vue'),
		meta: {
			index: 0,
			title: '订单运输详情'
		}
	},

	// 用户路由
	{
		path: '/user/table',
		name: 'user_table',
		component: () => import('../views/user/table.vue'),
		meta: {
			index: 0,
			title: '用户列表'
		}
	},
	{
		path: '/user/view',
		name: 'user_view',
		component: () => import('../views/user/view.vue'),
		meta: {
			index: 0,
			title: '用户详情'
		}
	},
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue'),
		meta: {
			index: 0,
			title: '个人信息'
		}
	},
	// 用户组路由
	{
		path: '/user_group/table',
		name: 'user_group_table',
		component: () => import('../views/user_group/table.vue'),
		meta: {
			index: 0,
			title: '用户组列表'
		}
	},
	{
		path: '/user_group/view',
		name: 'user_group_view',
		component: () => import('../views/user_group/view.vue'),
		meta: {
			index: 0,
			title: '用户组详情'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	let token = to.query.token;
	if (token){
		$.db.set("token",token,120);
	}
	next();
})

router.afterEach((to, from, next) => {
	let title = "百货中心供应链管理系统小程序-admin";
	document.title = title;
})

export default router
