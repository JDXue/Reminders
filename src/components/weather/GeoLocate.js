import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useGeolocation } from 'react-use'

import { useDispatch, useSelector } from 'react-redux'
import { setGeoLocation } from '../../redux'


function GeoLocate(){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    const settingsState  = useSelector(storeState => storeState.users[`${currentUserState}`].settings)

    const dispatch = useDispatch()

    const position = useGeolocation()

    // console.log(position)


    return(
        <>
            <p>Current location set: {settingsState.city}</p>
            <Button
                onClick={() => {
                        console.log('Getting geolocation...')
                        console.log(position)
                        if(position.error){
                            alert(position.error.message)
                        }else{
                            dispatch(setGeoLocation({lat: position.latitiude, lon: position.lon},currentUserState))
                            // settingsState.city = ''
                            // settingsState.coord.lat = position.latitude
                            // settingsState.coord.lon = position.longitude
                            // console.log(settingsState)
                            alert('Geolocation has been set, go to your browser to deny this permission')

                        }



                    }
                }
            >
                Click to update your location
            </Button>
        </>
    )
}

export default GeoLocate



// const updateLocation = (settingsState) => {
//     settingsState = {...settingsState}
//     settingsState.city=''
//     settingsState.coord.lat=
// }



