import React from 'react'
import '../../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import './Auth.css'

function SignIn(){
    return(
        <>
            <form className='container sign-in-box' onSubmit={handleSubmit}>
                <h3>Sign In</h3>
                <div className="input-field">
                    <label htmlFor='email' className='container'>Email</label>
                    <input id='email' type='email' placeholder='example@exampledomain.co.uk' className='input-box'
                    onChange={handleInputChange}></input>
                </div>

                <div className="input-field">
                    <label htmlFor='password' className='container'>Password</label>
                    <input id='password' type='password' placeholder='ASecurePassword' className='input-box'
                    onChange={handleInputChange}></input>
                </div>

                <div className='input-field'>
                    <Button className='sign-in-button'>Sign In</Button>
                </div>

            </form>
        </>
    )
}

export default SignIn


const handleInputChange = (e) => {
    console.log(e.target.value)
}

const handleSubmit = (e) => {
    console.log(e.target.value)
}

