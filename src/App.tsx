import React, { useContext } from 'react'
import { Context } from './store/context'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './pages/Login/Login'
import MainLayout from './layout/MainLayout'
import IndexPage from './pages/index'

function App () {
  const { Store, dispatch } = useContext(Context)
  return (
    <div className='page'>
      <Router>
        <Switch>
          <Route path='/login' key='Login' render={() => <Login Store={Store} dispatch={dispatch} />}></Route>
          <Route path='/layout' key='layout'>
            <MainLayout Store={Store} dispatch={dispatch}>
              <Route path='/index' key='index' render={() => <IndexPage Store={Store} dispatch={dispatch} />}></Route>
            </MainLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
