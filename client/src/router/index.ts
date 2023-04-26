import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'MessageList',
    component: () => import('@/views/Message.vue'),
  },
  {
    path: '/default',
    name: 'Chat',
    component: () => import('@/views/Chat.vue'),
  },
  {
    path: '/chat',
    name: 'ChatDetail',
    component: () => import('@/views/ChatDetail.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
