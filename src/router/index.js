import Vue from 'vue'
import Router from 'vue-router'
import gerrit from '../components/gerrit'
import home from '../components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/gerrit',
      name: 'gerrit',
      component: gerrit
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
