import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import List from '@/pages/List/List'
import Favorites from '@/pages/Favorites/Favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list/:type/:search',
      name: 'list',
      component: List
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }

  ]
})
