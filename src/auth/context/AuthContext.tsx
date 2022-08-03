import { createContext } from 'react';
import { AuthContextExpose } from '../interfaces';

export const AuthContext = createContext<AuthContextExpose>({} as AuthContextExpose);
