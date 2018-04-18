export const first = [
    {
        path: '/',
        redirect: '/login'
    },
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
    },
    {
        name: 'account',
        path: '/account',
        meta: {
            requiresAuth: true,
            title: '账户设置',
            headerVisible: true,
            tabbarVisible: false
        },
        component: (resolve) => {
            require(['../view/center/account/index'], resolve)
        }
    },
    {
        name: 'profile',
        path: '/account/profile',
        meta: {
            requiresAuth: true,
            title: '个人信息',
            headerVisible: true,
            tabbarVisible: false
        },
        component: (resolve) => {
            require(['../view/center/account/profile/index'], resolve)
        }
    }
]