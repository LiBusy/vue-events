import Vue from 'vue'

import VeeValidate from 'vee-validate';


Vue.component('child', require('./Child.vue'));
Vue.component('parent', require('./Parent.vue'));
Vue.use(VeeValidate);
var app = new Vue({
  el: '#app',
})
