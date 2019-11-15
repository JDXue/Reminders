import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'


function Nav(){
    return(
        <div className='nav container'>
            <Link className='nav-link' to='/'>Dashboard</Link>
            <Link className='nav-link' to='/signin'>Sign In</Link>
            <Link className='nav-link' to='/signup'>Sign Up</Link>
        </div>
    )

}

export default Nav