import React, { useState } from 'react'
import styles from './login.module.scss'
import { Button, Form, Input, Modal, Spin, message } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, KeyOutlined, UserOutlined } from '@ant-design/icons'
import { httpPost } from '../../service/axios';
import urls from '../../service/urls';
import { useHistory } from 'react-router-dom'

const layout = {
  wrapperCol: { span: 24 },
};

type Props = {
  location: any
}

export default (props:Props) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const onFinish = async (values: any) => {
    const obj = {...values}
    setLoading(true)
    try {
      const { data } = await httpPost(urls.whiteList.login, obj)
      setLoading(false)
      if (data.code !== 200) {
        message.warning(data.message)
      } else {
        window.localStorage.setItem('token', data.token)
        window.localStorage.setItem('nickname', data.nickname)
        history.push('/index')
      }
    } catch (err) {
      setLoading(false)
      message.error(err.message)
    }
  }

  return (
    <div className={`${styles.loginPage} page flex-row flex-jst-center flex-ali-center`}>
      <div className={`${styles.loginContainer} flex-col flex-jst-start flex-ali-start`}>
        <h2 className={`font-bold`}>阿孟的小系统</h2>
        <div className={`full-width`}>
          <Spin spinning={loading}>
            <Form
              name='login-form'
              {...layout}
              form={form}
              onFinish={onFinish}
            >
              <Form.Item name="username" rules={[{ required: true, message: '麻烦写下用户名老sei' }]}>
                <Input prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item name="pwd" rules={[{ required: true, message: '密码还是整起噻' }]}>
                <Input.Password prefix={<KeyOutlined />}
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>
              <Form.Item wrapperCol={{span: 8}}>
                <Button htmlType='submit' type='primary'>登录</Button>
              </Form.Item>
            </Form>
          </Spin>
        </div>
      </div>
    </div>
  )
}