import Vue from 'vue/dist/vue.esm';
import VueI18n from 'vue-i18n';
import store from '../src/vuex';
import router from '../src/routes.js';
import '../src/filters/strings.js';
import helpers from '../src/helpers';

import NavTop from '../src/components/shared/_nav_top';
Vue.component('nav-top', NavTop);

import SubmitTag from '../src/components/shared/_submit_tag';
Vue.component('submit-tag', SubmitTag);

$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.setRequestHeader(
      'X-CSRF-Token',
      $('meta[name="csrf-token"]').attr('content'),
    );
  },
  complete: function(xhr, status) {
    if (xhr.status === 500) {
      return (window.location.href = '/500');
    }
    if (xhr.status === 401) {
      return (window.location.href = '/users/sign_in');
    }
    if (xhr.status === 404) {
      return (window.location.href = '/404');
    }

    return true;
  },
});
$.ajaxPrefilter(function(options) {
  options.url = `/${I18n.prefix}api/admin/${options.url}`;
});

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'current',
  messages: translations,
});

const app = new Vue({
  i18n,
  router,
  store,
}).$mount('#app');
