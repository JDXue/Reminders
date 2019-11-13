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
        <div className='nav'>
            <div className='main-nav container'>
                <Link className='nav-link' to='/dashboard'>Dashboard</Link>
                <Link className='nav-link' to='/signin'>Sign In</Link>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
                <Link className='nav-link' to='/'>REMIND ME</Link>
            </div>

            <div>
            </div>

            {
                (currentUserState != 'noUser') &&
                <div className='account'>
                    <p className='nav-link'>{currentUserState}</p>
                    <Logout className=''/>

                </div>

            }

        </div>
    )

}

export default Nav