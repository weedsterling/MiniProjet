import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Restodetail from './components/Restodetail.vue';
import Restolist from './components/Restolist.vue'

Vue.use(VueRouter)



const routes = [
  
  { path: '/', component: Home },
  { path: '/Restolist', component: Restolist },
  { path: '/Restaurants/:restaurantsId', component: Restodetail }

]
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
