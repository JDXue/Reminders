import React from 'react'
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logoutUser } from './redux'

function Logout(){
    const dispatch = useDispatch()
    const history = useHistory()
    return(
        <>
            <a href='' onClick={() => {
                dispatch(logoutUser())
                history.push('/')
            }}
            >Logout</a>
        </>
    )
}

export default Logout