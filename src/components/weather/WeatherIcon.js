import React from 'react'

function WeatherIcon({ weather }){
    // console.log(weather)
    return(
        <img src={`http://openweathermap.org/img/wn/${weather}@2x.png`} alt={weather} width="100px" height="100px"/>
    )
}

export default WeatherIcon