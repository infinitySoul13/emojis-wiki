import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.config.performance = false;

// import '@/assets/style.css'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/assets/tailwind1.css'

import VueLazyload from 'vue-lazyload'

// with options
Vue.use(VueLazyload, {
  preLoad: 5,
  error: '/icons/three-dots.svg',
  loading: '/icons/three-dots.svg',
  attempt: 1
})

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
