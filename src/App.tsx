import React, { useContext } from 'react'
import { Context } from './store/context'
import { Router, Switch } from 'react-router-dom'
import AuthRoute from './routes/authRoute'
import { rouetConfig } from './routes/routes'
import { history } from './service/axios'

function App (props:any) {
  const { Store, dispatch } = useContext(Context)
  return (
    <div className='page'>
      <Router history={history}>
        <Switch>
          <AuthRoute config={rouetConfig} Store={Store} dispatch={dispatch} {...props}></AuthRoute>
        </Switch>
      </Router>
    </div>
  )
}

export default App
