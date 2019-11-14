import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Weather.css'

import WeatherIcon from './WeatherIcon'

import { useDispatch, useSelector } from 'react-redux'


function CurrentWeather(){
    const [weatherJson,setWeatherJson] = React.useState()
    const [timesApiCalled, setTimesApiCalled] = React.useState(0)
    const [errors,setErrors] = React.useState('')
    let tempUnits
    let tempSymbol

    const currentUserState = useSelector(storeState => storeState.currentUser)
    console.log(currentUserState)
    const settingsState  = useSelector(storeState => storeState.users[`${currentUserState}`].settings)
    const dispatch = useDispatch()

    // console.log('is in Imperial? '+settingsState)

    if (settingsState.isInImperial==true){
        tempUnits = 'imperial'
        tempSymbol = '°F'
    } else{
        tempUnits = 'metric'
        tempSymbol = '°C'
    }



    React.useEffect(() =>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${settingsState.coords.lat}&lon=${settingsState.coords.lon}&APPID=26dccf722b3cd1f35b43a7d60c30f9e6&units=${tempUnits}`)
        .then(response => response.json())
        .then(response => {
            setWeatherJson(response)

            // console.log(weatherJson)
            // console.log('Response was: ' + JSON.stringify(weatherJson))
            // console.log('Errors so far: ' + errors)
        })
        .catch(errors => setErrors(errors))

    }, [timesApiCalled])


    return(
        <>

            {
                (weatherJson)
                ?
                    <div>
                        <div className="weather-details">
                            <div>
                                <WeatherIcon
                                    weather={weatherJson["weather"][0]["icon"]}
                                />
                            </div>

                            <div>
                                <h4>{Math.round((weatherJson["main"]["temp"]))}{tempSymbol}</h4>
                                <p> {weatherJson["weather"][0]["main"]}
                                    <br></br>
                                    {weatherJson["name"]}
                                </p>
                            </div>
                        </div>

                        <Button
                            variant = "outline-primary"
                            onClick = {() =>
                                {
                                    if(timesApiCalled < 5){
                                        setTimesApiCalled(prev => prev + 1)
                                        console.log('weather refreshed')
                                    }
                                    else{
                                        console.log("You have tried to refresh the weather too many times, please wait a minute and try again")
                                    }
                                }
                            }
                        >Click to refresh weather</Button>

                    </div>
                :

                <p>Loading Weather</p>

            }








        </>
    )
}

export default CurrentWeather


