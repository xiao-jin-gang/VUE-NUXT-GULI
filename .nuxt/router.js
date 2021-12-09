import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63e723b6 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _4a239c92 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _29871076 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _5c654a52 = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _05061523 = () => interopDefault(import('..\\pages\\teacher\\player\\_vid.vue' /* webpackChunkName: "pages/teacher/player/_vid" */))
const _25b9b5cd = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _7b19f152 = () => interopDefault(import('..\\pages\\orders\\_oid.vue' /* webpackChunkName: "pages/orders/_oid" */))
const _1abb8e7c = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages/pay/_pid" */))
const _51f48d8c = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _11468ea0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _63e723b6,
    name: "course"
  }, {
    path: "/login",
    component: _4a239c92,
    name: "login"
  }, {
    path: "/register",
    component: _29871076,
    name: "register"
  }, {
    path: "/teacher",
    component: _5c654a52,
    name: "teacher"
  }, {
    path: "/teacher/player/:vid?",
    component: _05061523,
    name: "teacher-player-vid"
  }, {
    path: "/course/:id",
    component: _25b9b5cd,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _7b19f152,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _1abb8e7c,
    name: "pay-pid"
  }, {
    path: "/teacher/:id",
    component: _51f48d8c,
    name: "teacher-id"
  }, {
    path: "/",
    component: _11468ea0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
