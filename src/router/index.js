import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Page1 from '@/views/Page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {auth: true}
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1,
      meta: {auth: true}
    }
  ]
})
