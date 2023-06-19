import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../frontend/src/scss/style.scss';

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

// Pages
//const HomePage = React.lazy(() => import('./pages/HomePage'));
const DefaultLayout = React.lazy(() => import('../src/layout/DefaultLayout'));
const PredictionsPage = React.lazy(() => import('./pages/PredictionsPage'));
const UserProfilePage = React.lazy(() => import('./pages/UserProfilePage'));
const MatchDetailsPage = React.lazy(() => import('./pages/MatchDetailsPage'));
const StatisticsPage = React.lazy(() => import('./pages/StatisticsPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={loading}>
                <Routes>
                    <Route path="/*" element={<DefaultLayout />} />
                    <Route path="/predictions" element={<PredictionsPage />} />
                    <Route path="/profile" element={<UserProfilePage />} />
                    <Route path="/matchdetails" element={<MatchDetailsPage />} />
                    <Route path="/statistics" element={<StatisticsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
