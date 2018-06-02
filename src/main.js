import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import ServerDetail from './ServerDetail.vue'
import Servers from './Servers.vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-server-detail', ServerDetail);
Vue.component('app-servers', Servers);

new Vue({
  el: '#app',
  render: h => h(App)
})
