import Vue from 'vue'
import Router from 'vue-router'
import listView from '@/components/listView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '厨师',
      component: listView
    }
  ]
})
