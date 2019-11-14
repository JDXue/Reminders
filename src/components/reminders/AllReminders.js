import React from 'react'
import './Reminders.css'
import '../../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders, removeFromReminders } from '../../redux'


function AllReminders(){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    // console.log(currentUserState)
    const remindersState  = useSelector(storeState => storeState.users[`${currentUserState}`]['myReminders'])
    const dispatch = useDispatch()

    return(
        <>
            {
                (remindersState.length < 1)&&
                <div>No reminders so far</div>

            }


            {
                <>
                    {
                    remindersState
                        .filter(reminder => reminder[1])
                        .map((reminder, index) =>
                            <div className="reminder-box" key={index + reminder}>
                                <p className='reminder'>
                                    <b>{reminder[1].toLocaleDateString('en-GB',{timeZone: 'GMT', dateStyle: 'medium'})}</b>   {reminder[0]}
                                </p>
                                <Button
                                    id={index}
                                    className='delete-button'
                                    variant='light'
                                    onClick= {()=>{
                                        console.log(index)
                                        console.log('removed a reminder')
                                        dispatch(removeFromReminders(index, currentUserState))
                                    }}
                                >X</Button>
                            </div>
                        )
                    }
                </>

            }
            <br></br>

            {
                (remindersState.filter(reminder => !reminder[1]).length > 0)
                ?
                <>
                    <h2>Other Reminders</h2>

                    {
                        remindersState
                        .filter(reminder => !reminder[1])
                        .map((reminder, index) =>
                            <div className="reminder-box" key={index + reminder}>
                                <p className='reminder'>{reminder[0]} </p>
                                <Button
                                    id={index}
                                    className='delete-button'
                                    variant='light'
                                    onClick= {()=>{
                                        console.log(index)
                                        console.log('removed a reminder')
                                        dispatch(removeFromReminders(index, currentUserState))
                                    }}
                                >X</Button>
                            </div>
                        )
                    }
                </>
                : <></>
            }

        </>
    )
}

export default AllReminders