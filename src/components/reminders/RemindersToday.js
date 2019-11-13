import React from 'react'
import './Reminders.css'
import '../../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromReminders } from '../../redux'

function RemindersToday(){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    const remindersState  = useSelector(storeState => storeState.users[`${currentUserState}`]['myReminders'])
    const dispatch = useDispatch()
    console.log({remindersState})


    const today = new Date()
    let newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let todayStr = newDate.toLocaleDateString('en-GB') // get string for comparison
    let titleStr = newDate.toLocaleDateString('en-GB',{dateStyle: 'medium'}) // get string for comparison

    console.log(todayStr)
        return(
            <>
            <h5>{titleStr}</h5>
                {
                    (remindersState.length < 1)&&
                    <div>No reminders so far</div>

                }
                {
                    remindersState
                        .filter(reminder => reminder[1])
                        .filter(reminder => reminder[1].toLocaleDateString('en-GB') == todayStr) //check if reminders are for today
                        .map((reminder, index) =>
                            <div className="reminder-box" key={index + reminder}>
                                <p className='reminder'> {reminder[0]} </p>
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
        )



}

export default RemindersToday