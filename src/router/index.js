import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/seckill',
    name: 'seckill',
    component: () => import(/* webpackChunkName: "seckill" */ '../views/SecondaryOne/seckill.vue')
  },
  {
    path: '/Boutique_classification',
    name: 'Boutique_classification',
    component: () => import(/* webpackChunkName: "Boutique_classification" */ '../views/SecondLevel/Boutique_classification.vue')
  },
  {
    path: '/HelpCenter',
    name: 'HelpCenter',
    component: () => import(/* webpackChunkName: "HelpCenter" */ '../views/NavTab/HelpCenter.vue')
  },

  {
    path: '/MerchantCheck',
    name: 'MerchantCheck',
    component: () => import(/* webpackChunkName: "MerchantCheck" */ '../views/NavTab/MerchantCheck.vue')
  },
  {
    path: '/TrainTickets',
    name: 'TrainTickets',
    component: () => import(/* webpackChunkName: "TrainTickets" */ '../views/NavTab/TrainTickets.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
 return originalPush.call(this, location).catch(err => err)
 }
export default router
