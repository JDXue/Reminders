//everything is exported into the main app from this file

// export const newUserTemplate = {
//     id:0,
//     email:'',
//     password: '',
//     myReminders:[],
//     settings: {onlyShowRemindersToday: false,}
// }

export const initialState = {
    currentUser: 'noUser',

    users: {
        //this is the default if there is not a signed in user
        noUser:{
                id: 0,
                email:'',
                password: '',
                myReminders:[],
                settings: {onlyShowRemindersToday: false,
                        isDark:false,
                        coords: {lat:51.50853 ,lon:-0.12574},
                        city:'London',
                        inInImperial:false
                    }

            }
    }

}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_REMINDERS':
            return{
                ...state,
                users: {...state.users,
                    [action.payload[2]]: {
                        ...state.users[action.payload[2]],
                        myReminders: [...state.users[action.payload[2]].myReminders, action.payload || [''] ]
                    }
                }
            }

        case 'REMOVE_FROM_REMINDERS':
            return{
                ...state,
                users: {...state.users,
                    [action.payload[1]]: {
                        ...state.users[action.payload[1]],
                        myReminders: [
                            ...state.users[action.payload[1]].myReminders.slice(0,action.payload[0]),
                            ...state.users[action.payload[1]].myReminders.slice(action.payload[0]+1)
                        ]
                    }
                }
                // ...state,
                // users: {...state.users,
                //     myReminders: ([...state.myReminders.slice(0, action.payload), ...state.myReminders.slice(action.payload+1)])
                // }
            }

        case 'ONLY_SHOW_REMINDERS_TODAY':
            // console.log({action})
            return{
                ...state,
                users: {...state.users,
                    [action.payload[1]]: {
                        ...state.users[action.payload[1]],
                        settings: {...initialState.users[action.payload[1]].settings,
                            onlyShowRemindersToday: action.payload[0]
                        }
                    }
                }
            }

        case 'CHANGE_USER':
            console.log(state)
            return{
                ...state,
                currentUser: action.payload.email
            }

        case 'CREATE_NEW_USER':
            console.log(state)
            let newUserState = {
                ...state,
                users: {...state.users} //creates new  object for a new template user
            }

            console.log(newUserState)
            newUserState.currentUser = action.payload.email
            newUserState.users[`${action.payload.email}`] = {
                id: action.payload.email,
                email: action.payload.email,
                password: action.payload.password,
                myReminders:[],
                settings: {onlyShowRemindersToday: false}
            }
            console.log(newUserState)

            return newUserState

        case 'CHANGE_USER':
            console.log(state)
            return{
                ...state,
                currentUser: 'noUser'
            }

        case 'SET_SETTINGS':
            // console.log({action})
            return{
                ...state,
                users: {...state.users,
                    [action.payload[1]]: {
                        ...state.users[action.payload[1]],
                        settings: {...initialState.users[action.payload[1]].settings,
                            [action.payload[2]]: action.payload[0]
                        }
                    }
                }
            }

            // return{
            //     ...state,
            //     users: {...state.users,
            //         [action.payload[1]]: {
            //             ...state.users[action.payload[1]],
            //             settings: {...initialState.users[action.payload[1]].settings,
            //                 onlyShowRemindersToday: action.payload[0]
            //             }
            //         }
            //     }
            // }


        case 'SET_GEOLOCATION':
                // console.log({action})
                return{
                    ...state,
                    users: {...state.users,
                        [action.payload[1]]: {
                            ...state.users[action.payload[1]],
                            settings: {...initialState.users[action.payload[1]].settings,
                                city: '',
                                coords: {lat: action.payload[0].lat, lon: action.payload[0].lon}
                                }
                            }
                        }
                    }


        default: return state
    }
}


//action creators
export const addToReminders = (reminder, reminderDate, userId) => {
    return {
        type: 'ADD_TO_REMINDERS',
        payload: [reminder, reminderDate, userId]
    }
}

export const removeFromReminders = (reminderIndex, userId) => {
    console.log([reminderIndex, userId])
    return {
        type: 'REMOVE_FROM_REMINDERS',
        payload: [reminderIndex, userId]
    }
}

export const showingRemindersToday = (option, userId) => {
    // console.log(option)
    return {
        type: 'ONLY_SHOW_REMINDERS_TODAY',
        payload: [option, userId]
    }
}

export const loginUser = (userLogin) => {
    console.log(userLogin)
    return {
        type: 'LOGIN_USER',
        payload: userLogin
    }
}


export const createNewUser = (userSignUp) => {
    console.log(userSignUp)
    return {
        type: 'CREATE_NEW_USER',
        payload: userSignUp
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    }
}

export const setSettings = (option, userId, settingType) => {
    // console.log(option)
    return {
        type: 'SET_SETTINGS',
        payload: [option, userId, settingType]
    }
}

export const setGeoLocation = (option, userId) => {
    // console.log(option)
    return {
        type: 'SET_WEATHER_SETTINGS',
        payload: [option, userId]
    }
}
