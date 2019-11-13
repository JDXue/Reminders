import React from 'react'

import './Reminders.css'
import '../../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders, removeFromReminders } from '../../redux'
import './Reminders.css'

import RemindersToday from './RemindersToday'
import AllReminders from './AllReminders'
import ToggleReminders from './ToggleReminders'


function CurrentReminders(){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    const justRemindersToday = useSelector(storeState => storeState.users[`${currentUserState}`].settings.onlyShowRemindersToday)

    return(
        <div>
            <div className='reminders-container'>
                {
                    (justRemindersToday == true)
                    ?
                        <RemindersToday/>
                    :
                        <AllReminders/>
                }
            </div>

            <ToggleReminders/>

        </div>
    )

}

export default CurrentReminders