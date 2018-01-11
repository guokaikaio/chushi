import Vue from 'vue'
import Router from 'vue-router'
import listView from '@/components/listView'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/list',
      meta: {
        requireAuth: true
      },
      component: listView
    },
    {
      path: '/login',
      component: login
    }
  ]
})
