const routes = [
    {
        path: '/login',
        name: 'index',
        title: '登录',
        component: () => import('../views/Login/login.vue') //.vue不能省略
    },{
        path: '/',
        name: 'home',
        title: '首页',
        component: () => import('../views/Home/index.vue')
    }
]
export  default routes