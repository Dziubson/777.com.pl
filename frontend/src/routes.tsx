import { lazy, ReactElement } from 'react';

//const HomePage = lazy(() => import('./pages/HomePage'));
const MatchDetailsPage = lazy(() => import('./pages/MatchDetailsPage'));
const PredictionsPage = lazy(() => import('./pages/PredictionsPage'));
const UserProfilePage = lazy(() => import('./pages/UserProfilePage'));
const StatisticsPage = lazy(() => import('./pages/StatisticsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

// Nowe strony
const DashboardPage = lazy(() => import('./pages/HomePage'));
const UsersPage = lazy(() => import('./pages/UserProfilePage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

interface RouteItem {
    path: string;
    exact?: boolean;
    name: string;
    element: ReactElement;
}

const routes: RouteItem[] = [
    { path: '/', exact: true, name: 'Dashboard', element: <DashboardPage /> }, // Główna strona to teraz Dashboard
    { path: '/users', name: 'Users', element: <UsersPage /> }, // Nowa strona Users
    { path: '/settings', name: 'Settings', element: <SettingsPage /> }, // Nowa strona Settings
    { path: '/match-details', name: 'Match Details', element: <MatchDetailsPage /> },
    { path: '/predictions', name: 'Predictions', element: <PredictionsPage /> },
    { path: '/user-profile', name: 'User Profile', element: <UserProfilePage /> },
    { path: '/statistics', name: 'Statistics', element: <StatisticsPage /> },
    { path: '/login', name: 'Login', element: <LoginPage /> },
    { path: '/register', name: 'Register', element: <RegisterPage /> },
];

export default routes;
