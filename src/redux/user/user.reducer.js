import {UserActionTypes} from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

// if currentState is undefined, we set it to the default of INITIAL_STATE
const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser: action.payload
            }
    
        default:
            return currentState;
    }
}

export default userReducer;