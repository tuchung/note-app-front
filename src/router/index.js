import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/DashBoard',
      name: 'DashBoard',
      component: DashBoard
    }
    
  ]
})
