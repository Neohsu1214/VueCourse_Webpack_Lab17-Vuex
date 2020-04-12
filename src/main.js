import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

new Vue({
  el: '#app',
  store, // 其實是 store: store 但 ES6 支援同名簡寫
  render: h => h(App)
})
