import { Route, Routes } from 'react-router-dom';
import LoginPage from '../auth/LoginPage';
import DCPages from '../heros/pages/DCPages';
import MarvelPage from '../heros/pages/MarvelPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MarvelPage />} />
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DCPages />} />
            <Route path="login" element={<LoginPage />} />
        </Routes>
    );
};

export default AppRouter;