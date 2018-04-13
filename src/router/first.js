export const first = [
	{
		name: 'login',
		path: '/login',
		meta: {
			requiresAuth: false,
			title: '登陆',
			headerVisible: false,
			tabbarVisible: false
		},
		component: (resolve) => {
			require(['../view/login/index'], resolve)
		}
	},
	{
		name: 'search',
		path: '/search',
		meta: {
			requiresAuth: false,
			title: '搜索',
			headerVisible: false,
			tabbarVisible: false
		},
		component: (resolve) => {
			require(['../view/search/index'], resolve)
		}
	},
	{
		name: 'scan',
		path: '/scan',
		meta: {
			requiresAuth: false,
			title: '扫一扫',
			headerVisible: true,
			tabbarVisible: false
		},
		component: (resolve) => {
			require(['../view/scan/index'], resolve)
		}
	}
]