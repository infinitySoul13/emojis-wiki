import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import '@/assets/tailwind1.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

import Fuse from 'fuse.js';
Vue.prototype.$search = function (term, list, options) {
  return new Promise(function (resolve, reject) {
    var run = new Fuse(list, options);
    var results = run.search(term);
    resolve(results)
  })
};

new Vue({
  render: h => h(App),
}).$mount('#app');
