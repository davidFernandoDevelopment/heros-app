import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';

interface Props {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
    const { pathname, search } = useLocation();
    const { authState: { logged } } = useContext(AuthContext);

    useEffect(() => {
        const lastPath = `${pathname}${search}`;
        localStorage.setItem('lastPath', lastPath);
    }, [pathname, search]);


    return (logged)
        ? children
        : <Navigate to="/login" />;
};

export default PrivateRoute;