import React from 'react'

import './Reminders.css'
import '../../App.css'

import CurrentReminders from './CurrentReminders'
import AddReminderInput from './AddReminderInput'


function Reminders(){


    return (
        <div className='container'>
            <h1 className='title'>Reminders</h1>
            <br></br>

            <CurrentReminders/>
            <AddReminderInput/>

        </div>
    )
}

export default Reminders