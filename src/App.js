import React from 'react';
import './App.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './Dashboard'
import Main from './Main'

import AddReminderInput from './components/reminders/AddReminderInput'
import Settings from './Settings'

import { useSelector, useDispatch } from 'react-redux'
import { setSettings } from './redux'




function App() {
  const currentUserState = useSelector(storeState => storeState.currentUser)
  const settingsState  = useSelector(storeState => storeState.users[`${currentUserState}`].settings)

  let appTheme = ''

  if(settingsState.isDark){
    appTheme = 'App dark'
  }else{
    appTheme = 'App light'
  }

  return (
    <div className={appTheme}>
      <BrowserRouter>
        <Nav/>
        <div className='main-app'>
          <Switch>
            <Route exact path='/'>
              <Main/>
            </Route>

            <Route path='/dashboard'>
              <Dashboard/>
            </Route>

            <Route path='/signin'>
              <SignIn/>
            </Route>

            <Route path='/signup'>
              <SignUp/>
            </Route>

            <Route path='/addreminder'>
              <AddReminderInput/>
            </Route>

            <Route path='/settings'>
              <Settings/>
            </Route>
          </Switch>
        </div>


      </BrowserRouter>
    </div>
  );
}

export default App;



