// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// require("@rails/ujs").start()
// require("@rails/activestorage").start()
// require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import Vue from 'vue/dist/vue.esm';
import store from '../src/vuex';
import router from '../src/routes';

// you can directly import filters
// import '../src/filters/date.js';

$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader(
            'X-CSRF-Token',
            $('meta[name="csrf-token"]').attr('content'),
        )
    },
    complete: function(xhr, status) {
        if (xhr.status === 200 || xhr.status === 422) {
            return true;
        }
        if (xhr.status === 404) return (window.location.href = '/404')
        return window.location.href = '/500'
    }
});
$.ajaxPrefilter(function(options) {
    options.url = `/${I18n.prefix}api/${options.url}`;
});

const app = new Vue({
    i18n,
    router,
    store,
}).$mount('#app')
