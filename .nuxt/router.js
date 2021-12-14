import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e8dfa9b4 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _31490090 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _0f24de24 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _4f592d71 = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _ac7d7db8 = () => interopDefault(import('..\\pages\\teacher\\player\\_vid.vue' /* webpackChunkName: "pages/teacher/player/_vid" */))
const _714a81e4 = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _0d9a1031 = () => interopDefault(import('..\\pages\\orders\\_oid.vue' /* webpackChunkName: "pages/orders/_oid" */))
const _4bc69e43 = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages/pay/_pid" */))
const _6985d819 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _1db3dca1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e8dfa9b4,
    name: "course"
  }, {
    path: "/login",
    component: _31490090,
    name: "login"
  }, {
    path: "/register",
    component: _0f24de24,
    name: "register"
  }, {
    path: "/teacher",
    component: _4f592d71,
    name: "teacher"
  }, {
    path: "/teacher/player/:vid?",
    component: _ac7d7db8,
    name: "teacher-player-vid"
  }, {
    path: "/course/:id",
    component: _714a81e4,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _0d9a1031,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _4bc69e43,
    name: "pay-pid"
  }, {
    path: "/teacher/:id",
    component: _6985d819,
    name: "teacher-id"
  }, {
    path: "/",
    component: _1db3dca1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
