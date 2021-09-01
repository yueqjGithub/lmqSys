import React from "react"
import { Layout } from 'antd'
import styles from './layout.module.scss'

type Props = {
  children: Element | JSX.Element,
  [key:string]: any
}

const MainLayout = (props:Props) => {
  const { children } = props
  return (
    <div className='page'>
      <Layout>
        <Layout.Header></Layout.Header>
        <Layout>
          <Layout.Sider></Layout.Sider>
          <Layout.Content style={{height: 'calc(100vh - 64px)', padding: '.2rem'}}>
            <div className={`${styles.contentOut} scroll-bar`}>
              {children}
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default MainLayout