// main.tsx
import ReactDOM from 'react-dom';
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

// Usuwamy konfigurację store - teraz jest w innym pliku

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
