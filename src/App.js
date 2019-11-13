import React from 'react';
import './App.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Reminders from './components/reminders/Reminders'
import Main from './Main'

import AddReminderInput from './components/reminders/AddReminderInput'
import Settings from './Settings'




function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <div>
          <Switch>
            <Route exact path='/'>
              <Main/>
            </Route>

            <Route path='/dashboard'>
              <Reminders/>
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
    </>
  );
}

export default App;



