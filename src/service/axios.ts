import axios from 'axios'
import urls from './urls'
import { Modal } from 'antd'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const http = axios.create({
  baseURL: urls.baseUrl,
  timeout: 300000
})

const authList = Object.values(urls.authList)

http.interceptors.request.use(config => {
  if (config.url && authList.includes(config.url)) {
    if (!window.localStorage.getItem('token')) {
      Modal.error({
        title: '未登录',
        content: '请先登个录',
        maskClosable: false,
        mask: true,
        afterClose: () => {
          history.replace('/login')
        }
      })
    }
    return Promise.reject('登录过期')
  } else {
    return config
  }
})

http.interceptors.response.use(response => {
  if (response.data.code === 307) {
    Modal.error({
      title: '登录过期',
      content: '你的登录过期了，重新登一下',
      maskClosable: false,
      mask: true,
      afterClose: () => {
        history.replace('/login')
      }
    })
    throw new Error('登录过期')
  } else {
    return response.data
  }
}, err => {
  return Promise.reject(err.message)
})

export { http, history }