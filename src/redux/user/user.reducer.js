import UserActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

// if currentState is undefined, we set it to the default of INITIAL_STATE
const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...currentState,
                currentUser: action.payload,
                error: null
            };

        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...currentState,
                error: action.payload
            }
    
        default:
            return currentState;
    }
};

export default userReducer;