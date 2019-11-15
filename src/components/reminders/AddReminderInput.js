import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders, removeFromReminders } from '../../redux'
import './Reminders.css'
import AllReminders from './AllReminders'

import { useHistory } from 'react-router-dom'



function AddReminderInput(){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    // console.log(currentUserState)
    const remindersState  = useSelector(storeState => storeState.users[`${currentUserState}`].myReminders)
    // console.log(remindersState)
    const [newReminder, setNewReminder] = React.useState('')
    const [reminderDate, setReminderDate]= React.useState('')
    const dispatch = useDispatch()

    const history = useHistory()

    return(
        <>
            <h2 className='container'>Add Reminders</h2>
            <br></br>
            <div className='container'>
                <AllReminders/>
            </div>
            <br></br>
            <div className='reminder-input-container'>
                    <input
                        className='reminder-input'
                        id='reminderInput'
                        type='text'
                        placeholder='add a reminder here...'
                        onChange={(e) => {
                            setNewReminder(e.target.value)
                        }}
                        value={newReminder}
                    />

                    <h4 className='date-picker'>Pick a Date</h4>
                    <div className='date-picker-calendar'>
                        <DayPickerInput
                            placeholder="DD/MM/YYYY"
                            format="DD/MM/YYYY"
                            selectedDays = {reminderDate}
                            onDayChange={(day) => {
                                setReminderDate(day)
                                console.log(reminderDate)
                            }}

                        />
                    </div>

                    <Button
                        variant='dark'
                        onClick={() => {
                            console.log(newReminder,reminderDate)
                            dispatch(addToReminders(newReminder, reminderDate, currentUserState))
                            setNewReminder('')
                        }}
                    >
                    +
                    </Button>

            </div>
            <div className='back-button-box'>
                <Button
                    onClick={() => {
                        history.push('/dashboard')
                    }}
                >Back to Dashboard</Button>
            </div>
        </>
    )

}

export default AddReminderInput