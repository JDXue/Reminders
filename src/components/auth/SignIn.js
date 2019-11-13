import React from 'react'
import '../../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import './Auth.css'



function SignIn(){
    const [userLogin, setUserLogin] = React.useState({email:'', password: ''})
    return(
        <>
            <form className='container sign-in-box' onSubmit={(e) => {
                e.preventDefault()
                console.log(userLogin)
            }}>
                <h3>Sign In</h3>
                <div className="input-field">
                    <label htmlFor='email' className='container'>Email</label>
                    <input id='email' type='email' value={userLogin.email} placeholder='example@exampledomain.co.uk' className='input-box'
                        onChange={(e) => {
                            setUserLogin({...userLogin,
                                        email: e.target.value}
                                )
                        }}
                    ></input>
                </div>

                <div className="input-field">
                    <label htmlFor='password' className='container'>Password</label>
                    <input id='password' type='password' value={userLogin.password} placeholder='ASecurePassword' className='input-box'
                        onChange={(e) => {
                            setUserLogin({...userLogin,
                                        password: e.target.value}
                                )
                        }}
                    ></input>
                </div>

                <div className='input-field'>
                    <Button className='sign-in-button' type='submit'>Sign In</Button>
                </div>

            </form>
        </>
    )
}

export default SignIn





