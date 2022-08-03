import { AuthContext } from './AuthContext';
import { AuthState, User } from '../interfaces';
import { useReducer } from 'react';
import { authReducer } from './authReducer';
import { doLogin, doLogout } from './actions';


interface Props {
    children: React.ReactNode;
}

const initialState: AuthState = {
    logged: false
};
const init = (): AuthState => {
    const userRaw = localStorage.getItem('user');

    return {
        logged: !!userRaw,
        ...(userRaw ? { user: JSON.parse(userRaw) } : {})
    };
};

export const AuthProvider = ({ children }: Props) => {
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(doLogin(user));
    };

    const logout = () => {
        localStorage.removeItem('user');
        dispatch(doLogout());
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                authState
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;