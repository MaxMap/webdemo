// 引入 router
import { createRouter, createWebHistory } from 'vue-router'
// 引入路由各页面配置
import routes from './routes'
// 配置router对象
const router = createRouter({
    history: createWebHistory(),
    routes
})
//免登录页面
let whiteList = ['/login'];
router.beforeEach((to, from,next) => {
    const name = sessionStorage.getItem("info");
    if(name){
        next()
    }else{
        if(whiteList.indexOf(to.path) !== -1){
            next()
        }else{
            next({ path: "/login" });
        }
    }

})
export default router
