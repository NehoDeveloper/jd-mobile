export const second = [
    {
        name: 'app-page',
        path: '/page',
        meta: {
            requiresAuth: false,
            title: '布局页',
            headerVisible: false,
            tabbarVisible: false
        },
        component: (resolve) => {
            require(['../view/common/app-page'], resolve)
        },
        children: [
            {
                name: 'index',
                path: '/index',
                meta: {
                    requiresAuth: false,
                    title: '首页',
                    headerVisible: false,
                    tabbarVisible: true
                },
                component: (resolve) => {
                    require(['../view/index/index'], resolve)
                }
            },
            {
                name: 'category',
                path: '/category',
                meta: {
                    requiresAuth: false,
                    title: '分类',
                    headerVisible: true,
                    tabbarVisible: true
                },
                component: (resolve) => {
                    require(['../view/category/index'], resolve)
                }
            },
            {
                name: 'discover',
                path: '/discover',
                meta: {
                    requiresAuth: false,
                    title: '发现',
                    headerVisible: true,
                    tabbarVisible: true
                },
                component: (resolve) => {
                    require(['../view/discover/index'], resolve)
                }
            },
            {
                name: 'cart',
                path: '/cart',
                meta: {
                    requiresAuth: false,
                    title: '购物车',
                    headerVisible: true,
                    tabbarVisible: true
                },
                component: (resolve) => {
                    require(['../view/cart/index'], resolve)
                }
            },
            {
                name: 'center',
                path: '/center',
                meta: {
                    requiresAuth: false,
                    title: '我的',
                    headerVisible: false,
                    tabbarVisible: true
                },
                component: (resolve) => {
                    require(['../view/center/index'], resolve)
                }
            }
        ]
    }
]