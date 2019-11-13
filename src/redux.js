//everything is exported into the main app from this file

export const newUserTemplate = {
    id:0,
    email:'',
    password: '',
    myReminders:[],
    settings: {onlyShowRemindersToday: false}
}

export const initialState = {
    currentUser: 0,

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
        // case 'ADD_TO_REMINDERS':
        //     return{
        //         ...state,
        //         myReminders: [...state.myReminders, action.payload || [''] ]
        //     }

        // case 'REMOVE_FROM_REMINDERS':
        //     return{
        //         ...state,
        //         myReminders: ([...state.myReminders.slice(0, action.payload), ...state.myReminders.slice(action.payload+1)])
        //     }

        // case 'ONLY_SHOW_REMINDERS_TODAY':
        //     // console.log({action})
        //     return{
        //         ...state,
        //         onlyShowRemindersToday: action.payload
        //     }

        // case 'VALIDATE_LOGIN':
        //     console.log(action)
        //     if()

        case 'CREATE_NEW_USER':
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

export const addToReminders = (reminder, reminderDate) => {
    return {
        type: 'ADD_TO_REMINDERS',
        payload: [reminder, reminderDate]
    }
}

export const removeFromReminders = (reminderIndex) => {
    return {
        type: 'REMOVE_FROM_REMINDERS',
        payload: reminderIndex
    }
}

export const showingRemindersToday = (option) => {
    // console.log(option)
    return {
        type: 'ONLY_SHOW_REMINDERS_TODAY',
        payload: option
    }
}

export const validateLogin = (userLogin) => {
    console.log(userLogin)
    return {
        type: 'VALIDATE_LOGIN',
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
