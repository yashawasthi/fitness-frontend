import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { ApiProvider } from './MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApiProvider>
        <App />
    </ApiProvider>
);
