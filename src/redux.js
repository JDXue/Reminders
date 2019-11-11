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

        case 'REMOVE_FROM_REMINDERS':
            return{
                ...state,
                myReminders: ([...state.myReminders.slice(0, action.payload), ...state.myReminders.slice(action.payload+1)])
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

export const removeFromReminders = (reminderIndex) => {
    return {
        type: 'REMOVE_FROM_REMINDERS',
        payload: reminderIndex
    }
}

