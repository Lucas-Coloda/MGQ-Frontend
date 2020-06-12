import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import RouteNames from './RouteNames';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: Home,
  },
];

const router = new VueRouter({
  routes: routes,
});

export default router;
