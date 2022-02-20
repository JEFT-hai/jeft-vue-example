/*
 * @Author: your name
 * @Date: 2022-02-18 19:52:32
 * @LastEditTime: 2022-02-20 23:02:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LocationCity',
    name: 'LocationCity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "LocationCity" */ '../views/LocationCity.vue')
  },
  {
    path: '/LocationMap',
    name: 'LocationMap',
    component: () => import(/* webpackChunkName: "LocationMap" */ '../views/LocationMap.vue')
  },
  {
    path: '/Bar',
    name: 'Bar',
    component: () => import(/* webpackChunkName: "Bar" */ '../views/Bar.vue')
  },
  {
    path: '/Circle',
    name: 'Circle',
    component: () => import(/* webpackChunkName: "Circle" */ '../views/Circle.vue')
  },
  {
    path: '/NoticeToast',
    name: 'NoticeToast',
    component: () => import(/* webpackChunkName: "NoticeToast" */ '../views/NoticeToast.vue')
  },
  {
    path: '/WaterFall',
    name: 'WaterFall',
    component: () => import(/* webpackChunkName: "WaterFall" */ '../views/WaterFall.vue')
  },
  {
    path: '/Steps',
    name: 'Steps',
    component: () => import(/* webpackChunkName: "Steps" */ '../views/Steps.vue')
  },
  {
    path: '/Loading',
    name: 'Loading',
    component: () => import(/* webpackChunkName: "Loading" */ '../views/Loading.vue')
  },
  {
    path: '/RequestState',
    name: 'RequestState',
    component: () => import(/* webpackChunkName: "RequestState" */ '../views/RequestState.vue')
  },
  {
    path: '/Rule',
    name: 'Rule',
    component: () => import(/* webpackChunkName: "Rule" */ '../views/Rule.vue')
  },
  {
    path: '/UploadProgress',
    name: 'UploadProgress',
    component: () => import(/* webpackChunkName: "UploadProgress" */ '../views/UploadProgress.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
