import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import Home from './views/Home.vue';
import FAQ from './views/FAQ.vue';
import Imprint from './views/Imprint.vue';
import Privacy from './views/Privacy.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/faq', name: 'faq', component: FAQ },
  { path: '/imprint', name: 'imprint', component: Imprint },
  { path: '/privacy', name: 'privacy', component: Privacy },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
