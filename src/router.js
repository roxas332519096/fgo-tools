import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Servents from './views/Servents.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/servents',
      name:'servents',
      component:Servents,
    }
  ]
})
