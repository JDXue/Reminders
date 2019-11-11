import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders, removeFromReminders } from '../redux'
import './Reminders.css'


function AddReminderInput(){
    const remindersState  = useSelector(store => store.myReminders)
    const [newReminder, setNewReminder] = React.useState('')
    const dispatch = useDispatch()

    return(
       <div className='reminder-input-container'>
                <input
                    className='reminder-input'
                    id='reminderInput'
                    type='text'
                    placeholder='add a reminder here'
                    onChange={(e) => {
                        setNewReminder(e.target.value)
                    }}
                    value={newReminder}
                />

                <h2>Pick a Date</h2>
                <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />

                <Button
                    variant='dark'
                    onClick={() => {
                        console.log(newReminder)
                        dispatch(addToReminders(newReminder))
                        setNewReminder('')
                    }}
                >
                +
                </Button>

        </div>
    )

}

export default AddReminderInput