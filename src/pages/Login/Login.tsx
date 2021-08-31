import React,{ useEffect } from 'react'
import { Button } from "antd"
import { http } from '../../service/axios'
import urls from '../../service/urls'

export default () => {
  const loginHandler = () => {
    const obj = {
      username: 123,
      pwd: 321
    }
    http.post(urls.whiteList.login, obj).then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }
  return (
    <div>
      <Button type="primary" style={{ marginLeft: 8 }} onClick={() => loginHandler()}>
        Primary Button
      </Button>
    </div>
  )
}