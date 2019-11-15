import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import ToggleReminders from './components/reminders/ToggleReminders'
import ToggleOption from './ToggleOption'

import GeoLocate from './components/weather/GeoLocate'

import './App.css'

function Settings(){
    const history = useHistory()

    return (
        <div className="animate-hop box">
            <h2>Settings</h2>
            <br></br>
            <Form>
                <h5>Reminders</h5>
                <ToggleReminders/>
                <br></br>
                <h5>Weather</h5>

                <Form.Group controlId="temperature-unit">
                        <ToggleOption
                        id={'temp-unit'}
                        label={"Change to Imperial units (°F)"}
                        booleanSetting={'isInImperial'}
                        />

                        <br></br>
                        <h4>Change Location</h4>


                        <GeoLocate/>
                        <br></br>
                        <br></br>

                </Form.Group>

                <h5>Theme</h5>

                <Form.Group controlId='theme'>
                    <ToggleOption
                        id={'theme-change'}
                        label={"Change to dark theme"}
                        booleanSetting={'isDark'}
                    />
                </Form.Group>


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

