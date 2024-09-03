import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store';
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
// 使用 Pinia
app.use(pinia);
// 路由
app.use(router);
app.use(ElementPlus)
app.mount('#app');
