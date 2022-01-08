import Vue from 'vue'
import VueRouter from 'vue-router'
import essay from '../views/essay/essay.vue'
import loading from '../components/loading/loading.vue'
import about from '../views/about/about.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/essay',
    name: 'essay',
    component: essay
  },
  {
    path:'/loading',
    name: 'loading',
    component: loading
  },
  {
    path:'/about',
    name: 'about',
    component: about
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
