import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Dashboard from './components/dashboard/index.vue';
import Error500 from './components/errors/500.vue';
import Error404 from './components/errors/404.vue';

const router = new VueRouter({
  mode: 'history',
  base: `${I18n.prefix}admin`,
  routes: [
    { path: '/', component: Dashboard, name: 'root_path' },
    // { path: '/customers', component: UserIndex, name: 'users_path' },
    // { path: '/users/new', component: UserNew, name: 'new_user_path' },
    // { path: '/users/:id/edit', component: UserEdit, name: 'edit_user_path' },
    // { path: '/musicians', component: MusicianIndex, name: 'musicians_path' },
    // {
    //   path: '/musicians/new',
    //   component: MusicianNew,
    //   name: 'new_musician_path',
    // },
    // {
    //   path: '/musicians/:id/edit',
    //   component: MusicianEdit,
    //   name: 'edit_musician_path',
    // },
    { path: '/500', component: Error500 },
    { path: '/404', component: Error404 },
    { path: '*', redirect: '/404' },
  ],
});

export default router;
