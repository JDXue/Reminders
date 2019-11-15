import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux'
import { showingRemindersToday } from '../redux'


function ToggleReminders(){
    const showState = useSelector(storeState => storeState.onlyShowRemindersToday)
    const dispatch = useDispatch()
    console.log({showState})


    const toggleProps = {
        type:"switch",
        label: 'Only show reminders for today',
        onClick: () => {
            console.log(showState)
            if(showState == true){
                dispatch(showingRemindersToday(false))
            }
            else dispatch(showingRemindersToday(true))
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

