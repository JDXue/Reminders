import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders } from '../redux'
import ShowAReminder from './ShowAReminder'

function Reminders(){
    const remindersState  = useSelector(store => store.myReminders)
    const [newReminder, setNewReminder] = React.useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <h1 className='container'>Reminders</h1>
            <br></br>
            <input
                placeholder='add a reminder here'
                onChange={(e) => {
                    setNewReminder(e.target.value)
                }}
            />
            <button
                onClick={() => {
                    console.log(newReminder)
                    dispatch(addToReminders(newReminder))
                }}
            >
            +
            </button>


            <ul>
                {
                    remindersState.map((reminder, index) =>
                        <li key={index + reminder}>
                            {reminder}
                        </li>
                    )
                }
            </ul>

        </div>
    )
}

export default Reminders