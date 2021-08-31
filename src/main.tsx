import React from 'react'
import ReactDOM from 'react-dom'
import './styles/global.scss'
import './styles/app.scss'
import App from './App'
import { ContextProvider } from './store/context'
import { ConfigProvider } from 'antd'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
