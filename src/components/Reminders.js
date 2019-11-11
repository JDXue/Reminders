import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders } from '../redux'
import ShowAReminder from './ShowAReminder'
import './Reminders.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


function Reminders(){
    const remindersState  = useSelector(store => store.myReminders)
    const [newReminder, setNewReminder] = React.useState('')
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <h1 className='title'>Reminders</h1>
            <br></br>

            <div className='reminders-container'>
                {
                    remindersState.map((reminder, index) =>
                        <div
                            key={index + reminder}
                        >
                            <p className='reminder'>{reminder}</p>
                        </div>
                    )
                }
            </div>

            <div className='reminder-input-container'>
                <input
                    className='reminder-input'
                    id='reminderInput'
                    type='text'
                    placeholder='add a reminder here'
                    onChange={(e) => {
                        setNewReminder(e.target.value)
                    }}
                />
                <Button
                    variant='dark'
                    onClick={() => {
                        console.log(newReminder)
                        dispatch(addToReminders(newReminder))
                        document.getElementById('reminderInput').value = ''
                    }}
                >
                +
                </Button>
            </div>



        </div>
    )
}

export default Reminders