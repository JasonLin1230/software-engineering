import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search'
import Borrow from '@/components/Borrow'
import Subscribe from '@/components/Subscribe'
import Recommend from '@/components/Recommend'
import Alter from '@/components/Alter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/borrow',
      name: 'Borrow',
      component: Borrow
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/alter',
      name: 'Alter',
      component: Alter
    },
  ]
})
