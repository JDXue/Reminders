import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reminders from './components/Reminders'
import { initialState, reducer, addToReminders} from './redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

console.log(reducer)
const store = createStore(reducer)
const storeContent = store.getState()
console.log(storeContent)
console.log(store.getState().myReminders)

function App() {
  return (
    <>
      <Provider store={store}>
        <Reminders/>
      </Provider>
    </>
  );
}

export default App;
