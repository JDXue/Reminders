import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'
import { useSelector } from 'react-redux'
import Logout from './Logout'


function Nav(){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    React.useEffect(() =>{
        console.log('user changed')
    },[currentUserState])
    return(
        <div className='nav container'>
            <Link className='nav-link' to='/'>Remind Me</Link>
            <Link className='nav-link' to='/dashboard'>Dashboard</Link>
            <Link className='nav-link' to='/signin'>Sign In</Link>
            <Link className='nav-link' to='/signup'>Sign Up</Link>
            {
                (currentUserState != 'noUser') &&
                <div className='account'>
                    <p>{currentUserState}</p>
                    <Logout/>
                </div>

            }

        </div>
    )

}

export default Nav