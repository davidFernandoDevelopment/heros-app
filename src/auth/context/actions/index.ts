import { User } from '../../interfaces';

export type Action =
    | { type: '[Auth] Login', payload: User; }
    | { type: '[Auth] Logout'; };
    

export const doLogin = (user: User): Action => ({
    type: '[Auth] Login',
    payload: user
});

export const doLogout = (): Action => ({
    type: '[Auth] Logout'
});