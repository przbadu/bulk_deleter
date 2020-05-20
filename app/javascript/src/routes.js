import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import entities from './constants/entities.data';
import Dashboard from './pages/dashboard/index.vue';
import Error500 from './components/errors/500.vue';
import Error404 from './components/errors/404.vue';

// prepare all routes
let routes = [];
entities.map((entity) => routes.push(entity));
routes.push({ path: '/500', component: Error500 });
routes.push({ path: '/404', component: Error404 });
routes.push({ path: '*', redirect: '/404' });

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
