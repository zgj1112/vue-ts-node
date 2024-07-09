import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store.ts';

const app = createApp(App);
// 使用 Pinia
app.use(pinia);
app.mount('#app');
