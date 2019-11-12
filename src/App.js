import React from 'react';
import './App.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Reminders from './components/reminders/Reminders'






function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <div>
          <Switch>
            <Route exact path='/'>
              <Reminders/>
            </Route>

            <Route path='/signin'>
              <SignIn/>
            </Route>

            <Route path='/signup'>
              <SignUp/>
            </Route>
          </Switch>


        </div>


      </BrowserRouter>
    </>
  );
}

export default App;



