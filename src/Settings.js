import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import ToggleReminders from './components/reminders/ToggleReminders'



function Settings(){
    const history = useHistory()

    return (
        <div className="container">
            <h2>Settings</h2>
            <br></br>
            <Form>
                <h5>Reminders</h5>
                <ToggleReminders/>

                <br></br>


            </Form>

            {/* <SearchBarLocation/> */}
            <Button
                variant='light'
                onClick={() => {
                    history.push('/dashboard')
                }}
            >Back</Button>

        </div>
    )

}

export default Settings

