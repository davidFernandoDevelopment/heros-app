import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../ui';
import { DCPage, MarvelPage, SearchPage, HeroPage } from '../pages';

export const HerosRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="dc" element={<DCPage />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    );
};

export default HerosRoutes;