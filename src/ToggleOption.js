import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch, useSelector } from 'react-redux'
import { setSettings } from './redux'



function ToggleOption({ id , label, booleanSetting}){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    const settingsState  = useSelector(storeState => storeState.users[`${currentUserState}`].settings)

    const dispatch = useDispatch()

    const toggleProps = {
        type:"switch",
        id,
        label,
        value: booleanSetting,
        onChange: ()=>{
            // console.log('isInImperial shows: ' + settingsState.isInImperial)
            //if statement for toggling switch
            console.log(currentUserState)
            if(settingsState[`${booleanSetting}`]){
                console.log('set to false')
                dispatch(setSettings(false,currentUserState,booleanSetting))
            } else if (!settingsState[booleanSetting])
                {
                    dispatch(setSettings(true,currentUserState,booleanSetting))
                }
            // console.log(settingsState)
        }

    }

    return(
        <>
            {
                (settingsState[booleanSetting]==true)
                ?
                <Form.Check checked {...toggleProps}/>
                :
                <Form.Check {...toggleProps}/>
            }

        </>
    )
}

export default ToggleOption

