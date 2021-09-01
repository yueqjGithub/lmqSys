import React from 'react'
import IndexPage from '../pages/index'
import Login from '../pages/Login/Login'

export const rouetConfig:RouteSingle[] = [
  {
    path: '/',
    component: IndexPage,
    auth: true
  },
  {
    path: '/login',
    component: Login,
    auth: false
  },
  {
    path: '/index',
    component: IndexPage,
    auth: true,
    isMenu: true,
    menuName: '首页'
  },
  {
    path: '/404',
    component: () => <div>404</div>
  }
]