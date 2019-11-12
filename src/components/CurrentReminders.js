import React from 'react'

import './Reminders.css'
import '../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders, removeFromReminders } from '../redux'
import './Reminders.css'


function CurrentReminders(){
    const remindersState  = useSelector(store => store.myReminders)
    const dispatch = useDispatch()
    console.log(remindersState)
    return(
        <div className='reminders-container'>
            {
                remindersState.map((reminder, index) =>
                    <div className="reminder-box" key={index + reminder}>
                        <p className='reminder'>{reminder[1].toLocaleDateString()} {reminder[0]} </p>
                        <Button
                            id={index}
                            className='delete-button'
                            variant='light'
                            onClick= {()=>{
                                console.log(index)
                                console.log('removed a reminder')
                                dispatch(removeFromReminders(index))
                            }}
                        >X</Button>
                    </div>
                )
            }
        </div>
    )

}

export default CurrentReminders