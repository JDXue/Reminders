import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'
import { useSelector } from 'react-redux'


function Nav(){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    React.useEffect(() =>{
        console.log('user changed')
    },[currentUserState])
    return(
        <div className='nav container'>
            <Link className='nav-link' to='/'>Dashboard</Link>
            <Link className='nav-link' to='/signin'>Sign In</Link>
            <Link className='nav-link' to='/signup'>Sign Up</Link>
            {
                (currentUserState != 'noUser') &&
                    <p className='account'>{currentUserState}</p>
            }

        </div>
    )

}

export default Nav