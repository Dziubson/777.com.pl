import { lazy } from 'react';

const DashboardPage = lazy(() => import('./pages/HomePage'));
const UsersPage = lazy(() => import('./pages/UserProfilePage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const MatchDetailsPage = lazy(() => import('./pages/MatchDetailsPage'));
const PredictionsPage = lazy(() => import('./pages/PredictionsPage'));
const UserProfilePage = lazy(() => import('./pages/UserProfilePage'));
const StatisticsPage = lazy(() => import('./pages/StatisticsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

const routes = [
    { path: '/', element: <DashboardPage />, name: 'Dashboard' },
    { path: '/users', element: <UsersPage />, name: 'Users' },
    { path: '/settings', element: <SettingsPage />, name: 'Settings' },
    { path: '/match-details', element: <MatchDetailsPage />, name: 'Match Details' },
    { path: '/predictions', element: <PredictionsPage />, name: 'Predictions' },
    { path: '/user-profile', element: <UserProfilePage />, name: 'User Profile' },
    { path: '/statistics', element: <StatisticsPage />, name: 'Statistics' },
    { path: '/login', element: <LoginPage />, name: 'Login' },
    { path: '/register', element: <RegisterPage />, name: 'Register' },
];


export default routes;
