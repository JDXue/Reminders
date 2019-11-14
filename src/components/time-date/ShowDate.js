import React from 'react'

function ShowDate(){

    const [date, setDate] = React.useState('1 January 1999')
    const today = new Date()

    React.useEffect(
            () =>{
                    let newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
                    let newStrDate = newDate.toLocaleDateString('en-GB',{timeZone: 'GMT', dateStyle: 'full'})
                    console.log(newStrDate)
                    if(newStrDate!= date){
                        setDate(newStrDate)
                        //console.log('Changed the date')
                    }
                }

    )

    return(
        <h3 className="time-date">{date}</h3>
    )

}

export default ShowDate