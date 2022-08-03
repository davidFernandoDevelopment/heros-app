import { AuthState } from '../interfaces';
import { Action } from './actions';


const initialState: AuthState = {
    logged: false
};

export const authReducer = (state = initialState, action: Action): AuthState => {
    switch (action.type) {
        case '[Auth] Login':
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case '[Auth] Logout':
            return {
                logged: false
            };

        default:
            return state;
    }
};