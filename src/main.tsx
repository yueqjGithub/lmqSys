import React from 'react'
import ReactDOM from 'react-dom'
import './styles/global.scss'
import App from './App'
import {ContextProvider} from './store/context'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
