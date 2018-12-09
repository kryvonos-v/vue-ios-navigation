import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import MessagesView from './views/MessagesView.vue'
import UserView from './views/UserView.vue'
import AppLayout from './AppLayout.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app-layout',
      component: AppLayout,
      children: [
        {
          path: 'feed',
          alias: '',
          component: Home
        },
        {
          path: 'about',
          component: About
        },
        {
          path: 'user/:id',
          component: UserView,
          meta: {
            transition: true
          },
          props: true
        }
      ]
    },
    {
      path: '/messages',
      component: MessagesView
    }
  ]
})

export default router
