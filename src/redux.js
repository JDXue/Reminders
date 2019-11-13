//everything is exported into the main app from this file

export const newUserTemplate = {
    id:0,
    email:'',
    password: '',
    myReminders:[],
    settings: {onlyShowRemindersToday: false}
}

export const initialState = {
    currentUser: 'noUser',

    users: {
        //this is the default if there is not a signed in user
        noUser:{
                id: 0,
                email:'',
                password: '',
                myReminders:[],
                settings: {onlyShowRemindersToday: false}

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

        case 'LOGIN_USER':
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

        default: return state
    }
}

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
