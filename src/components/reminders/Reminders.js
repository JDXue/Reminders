import React from 'react'

import './Reminders.css'
import '../../App.css'

import CurrentReminders from './CurrentReminders'

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
            <br></br>

            <div align='right'>
                <Button
                    variant='light'
                    onClick={() => {
                        history.push('/settings')
                    }}
                >Settings</Button>

            </div>


        </div>
    )
}

export default Reminders