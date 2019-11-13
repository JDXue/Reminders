import React from 'react'

import './Reminders.css'
import '../../App.css'

import CurrentReminders from './CurrentReminders'
import AddReminderInput from './AddReminderInput'

import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'


function Reminders(){
    const history = useHistory()

    return (
        <div className='container'>
            <h1 className='title'>Reminders</h1>
            <br></br>

            <CurrentReminders/>
            <Button
                onClick={() => {
                    history.push('/addreminder')
                }}
            >Add Reminders</Button>


        </div>
    )
}

export default Reminders