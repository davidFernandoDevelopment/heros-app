import { Route, Routes } from 'react-router-dom';

import LoginPage from '../auth/pages/LoginPage';
import { HerosRoutes } from '../heros';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />

            <Route path="/*" element={<HerosRoutes />} />
        </Routes>
    );
};

export default AppRouter;