import React, { useContext } from 'react'
import { Context } from './store/context'
import { HashRouter as Router, Switch } from 'react-router-dom'
import AuthRoute from './components/authRoute'
import { rouetConfig } from './routes/routes'

function App (props:any) {
  const { Store, dispatch } = useContext(Context)
  return (
    <div className='page'>
      <Router>
        <Switch>
          <AuthRoute config={rouetConfig} Store={Store} dispatch={dispatch} {...props}></AuthRoute>
        </Switch>
      </Router>
    </div>
  )
}

export default App
