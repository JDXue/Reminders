import React from 'react'
import '../../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import './Auth.css'

import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux'


function SignIn(){
    const currentUserState = useSelector(storeState => storeState.currentUser)
    const userState  = useSelector(storeState => storeState)
    const dispatch = useDispatch()
    const [userLogin, setUserLogin] = React.useState({email:'', password: ''})
    const [isValidLogin, setIsValidLogin] = React.useState(true)
    const [loginAttemptMessage, setLoginAttemptMessage] = React.useState('')

    const history = useHistory()

    // React.useEffect(() => {
    //     loginAttemptMessage =''
    // },[userLogin])

    return(
        <>
            <form className='container sign-in-box' onSubmit={(e) => {
                e.preventDefault()
                console.log(userLogin)

                if((!userLogin.email) || (!userLogin.password)){ //checks whether either field has been left empty
                    console.log('not valid sign up')
                    setIsValidLogin(false)
                    setLoginAttemptMessage('Make sure that both email and password have been filled out')

                }else if(!userState.users[`${userLogin.email}`]){ //checks whether user already exists
                    console.log('this user does not exist, please sign up instead')
                    setLoginAttemptMessage('this user does not exist, please sign up instead')
                    setIsValidLogin(false)

                    } else if(userState.users[`${userLogin.email}`].password != userLogin.password){

                        console.log('incorrect password')
                        setLoginAttemptMessage('Password is not correct')
                        setIsValidLogin(false)
                    }

                        else {
                            console.log('valid sign up')
                            setIsValidLogin(true)
                            setLoginAttemptMessage('')
                            dispatch(loginUser(userLogin)) //check this part in reducer
                            console.log(userState)
                            history.push('/') //direct to main dash
                        }
                }
            }
            >

                <h3>Sign In</h3>
                <div className="input-field">
                    <label htmlFor='email' className='container'>Enter Your Email Here</label>
                    <input id='email' type='email' value={userLogin.email} placeholder='example@exampledomain.co.uk' className='input-box'
                        onChange={(e) => {
                            setUserLogin({...userLogin,
                                        email: e.target.value}
                                )
                        }}
                    ></input>
                </div>

                <div className="input-field">
                    <label htmlFor='password' className='container'>Create A Password</label>
                    <input id='password' type='password' value={userLogin.password} placeholder='ASecurePassword' className='input-box'
                        onChange={(e) => {
                            setUserLogin({...userLogin,
                                password: e.target.value}
                                )
                            }}
                    ></input>
                </div>

                <div className='input-field'>
                    <Button className='sign-in-button' type='submit'>Create A New Account</Button>
                </div>

            </form>

            <p className="login-attempt-message">{loginAttemptMessage}</p>
        </>
    )
}

export default SignIn





