import Vue from 'vue';
import Router from 'vue-router';

import Home from '~/pages/Home';
import Server from '~/pages/Server';
import Hosting from '~/pages/Hosting';
import Domain from '~/pages/Domain';
import Reseller from '~/pages/Reseller';
import Company from '~/pages/Company';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/server',
        name: 'server',
        component: Server
      },
      {
        path: '/hosting',
        name: 'hosting',
        component: Hosting
      },
      {
        path: '/domain',
        name: 'domain',
        component: Domain
      },
      {
        path: '/reseller',
        name: 'reseller',
        component: Reseller
      },
      {
        path: '/company',
        name: 'company',
        component: Company
      }
    ]
  });
}
