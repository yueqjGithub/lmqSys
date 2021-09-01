import React from "react";
import { Route, Redirect, withRouter } from 'react-router'
import MainLayout from '../layout/MainLayout'

type Props = {
  location: any,
  config: RouteSingle[]
}

const AuthRoute = (props: Props) => {
  const isLogin = window.localStorage.getItem('token')
  const { location, config } = props
  const pathname = location.pathname

  const targetRouterConfig = config.find((item: RouteSingle) => item.path === pathname)
  if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
    return <Route exact path={pathname} render={() => <targetRouterConfig.component {...props} />} />
  }
  if (isLogin) {
    // 如果是登陆状态，想要跳转到登陆，重定向到主页
    if (pathname === '/login') {
      return <Redirect to='/' />
    } else {
      // 如果路由合法，就跳转到相应的路由
      if (targetRouterConfig) {
        return <Route exact path={pathname} render={() => {
          return (
            <MainLayout>
              <targetRouterConfig.component  {...props} />
            </MainLayout>
          )
        }} />
      } else {
        // 如果路由不合法，重定向到 404 页面
        return <Redirect to='/404' />
      }
    }
  } else {
    // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
    if (targetRouterConfig && targetRouterConfig.auth) {
      return <Redirect to='/login' />
    } else {
      // 非登陆状态下，路由不合法时，重定向至 404
      return <Redirect to='/404' />
    }
  }
}

export default withRouter((AuthRoute as any))