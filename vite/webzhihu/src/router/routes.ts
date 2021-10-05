const routes = [
    {
        path: '/',
        name: 'index',
        title: '登录',
        component: () => import('../views/Login/login.vue'), //.vue不能省略
    },{
        path: '/home',
        name: 'home',
        title: '首页',
        component: () => import('../views/Home/index.vue')
    }
]
export  default routes