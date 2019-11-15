import React from 'react'

import './components/reminders/Reminders.css'
import './App.css'

import CurrentReminders from './components/reminders/CurrentReminders'
import ShowTime from './components/time-date/ShowTime'


import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import ShowDate from './components/time-date/ShowDate'
import CurrentWeather from './components/weather/CurrentWeather'


function Dashboard(){
    const history = useHistory()

    return (
        <div className='dashboard'>
            <div className='date-weather-box'>
                <div className='timedate-box'>
                    <ShowTime className='time-digits'/>
                    <ShowDate/>
                </div>
                <div className='weather-box'>
                    <CurrentWeather/>
                </div>

            </div>

            <h3 className='title'>Reminders</h3>
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

export default Dashboard