import VueRouter from 'vue-router'

import Login from './Login.vue'
import Map from './Map.vue'
import People from './People.vue'
import Edit from './Edit.vue'
import Detail from './Detail.vue'

export const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'maps',
    path: '/map',
    component: Map
  },
  {
    name: 'map',
    path: '/map/:id',
    component: Map
  },
  {
    name: 'people',
    path: '/people',
    component: People
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/',
    redirect: '/login'
  }
]

export default new VueRouter({
  routes
})
