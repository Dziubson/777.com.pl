import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../frontend/src/scss/style.scss';
import DefaultLayout from '../src/layout/DefaultLayout';
import routes from './routes';

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const App = () => {
    return (
        <Router>
            <Suspense fallback={loading}>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={<DefaultLayout>{route.element}</DefaultLayout>} />
                    ))}
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
