import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './style/index.scss'//导入全局样式

// import config from  './rules/http/config'
const app = createApp(App);
// app.config.globalProperties.$http = config
app.use(router);
app.mount('#app')
