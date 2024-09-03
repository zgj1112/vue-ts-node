import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from 'src/components/store.vue';  // 根据你的实际项目路径修改
import First from './components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'First',
    component: First
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
