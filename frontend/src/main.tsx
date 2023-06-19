import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

// Mock the Node.js 'process' variable in the browser
if (typeof window.process === 'undefined') {
    const windowAny: any = window;
    windowAny.process = {
        env: { NODE_ENV: process.env.NODE_ENV }
    };
}

const rootElement = document.getElementById('root');

// Check if rootElement exists
if (rootElement) {

    const root = createRoot(rootElement);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
} else {
    console.error("Root element not found");
}
