import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders } from './redux'

function Reminders(){
    const remindersState  = useSelector(store => store.myReminders)
    return (
        <div>
            <h1 className='container'>Reminders</h1>
            <br></br>
            <input
                placeholder='add a reminder here'
            />
            <p>{remindersState}</p>
        </div>
    )
}

export default Reminders