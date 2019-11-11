//everything is exported into the main app from this file

export const initialState = {
    myReminders:[]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_REMINDERS':
            return{
                ...state,
                myReminders: [...state.myReminders, action.payload || '']
            }
        default: return state
    }
}

export const addToReminders = (reminder) => {
    return {
        type: 'ADD_TO_REMINDERS',
        payload: reminder
    }
}

export const removeFromReminders = (reminder) => {
    return {
        type: 'REMOVE_FROM_REMINDERS',
        payload: reminder
    }
}

