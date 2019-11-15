import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux'
import { showingRemindersToday } from '../../redux'


function ToggleReminders(){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    const showState = useSelector(storeState => storeState.users[`${currentUserState}`].settings.onlyShowRemindersToday)
    const dispatch = useDispatch()
    console.log({showState})


    const toggleProps = {
        type:"switch",
        label: 'Only show reminders for today',
        onClick: () => {
            console.log(showState)
            if(showState == true){
                dispatch(showingRemindersToday(false, currentUserState))
            }
            else dispatch(showingRemindersToday(true, currentUserState))
            console.log(showState)
        }
    }

    return(
        <>
            <Form>
                <Form.Group controlId='showreminders' >
                    {
                        (showState == true)
                        ?
                        <Form.Check checked {...toggleProps}/>
                        :
                        <Form.Check {...toggleProps} />
                    }
                </Form.Group>
            </Form>
        </>
    )
}

export default ToggleReminders

