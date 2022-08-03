export interface User {
    id: string;
    name: string;
};

export interface AuthState {
    logged: boolean;
    user?: User;
}

export interface AuthContextExpose {
    authState: AuthState;
    logout: () => void;
    login: (user: User) => void;
}