import Vue from 'vue'
import Router from 'vue-router'
import Footer from './components/Footer'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/Home.vue'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/User.vue'),
        footer: Footer
      }
    }
  ]
})
