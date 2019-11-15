import './TimeDate.css'
import React from 'react'

function ShowTime(){
    const today = new Date()
    const[hours, setHours] = React.useState('00')
    const[mins, setMins] = React.useState('00')
    const[secs, setSecs] = React.useState('00')

    React.useEffect(
       () => {
           setTimeout(() => {
            let newTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds())
            let newTimeArr = newTime.toLocaleDateString('en-GB',{timeStyle:'medium', hour:'numeric', minute:'numeric',second:'numeric'}).split(':')
            // console.log(newStrTime)
            //console.log(newTimeArr)
            setHours(newTimeArr[0])
            setMins(newTimeArr[1])
            setSecs(newTimeArr[2])
        }, 1000)
    }, [secs])

    return(
        <div className="time time-date">
            <p className="time-digits">{hours}</p>
            <p className="time-digits">{mins}</p>
        </div>
    )
}

export default ShowTime