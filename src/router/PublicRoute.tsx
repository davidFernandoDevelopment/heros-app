import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth';

interface Props {
    children: JSX.Element;
}

const PublicRoute = ({ children }: Props) => {
    const { authState: { logged } } = useContext(AuthContext);

    return (!logged)
        ? children
        : <Navigate to="/" />;
};

export default PublicRoute;