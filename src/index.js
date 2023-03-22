import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext';
import PostProvider from './context/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserContext>
            <PostProvider>
                <App />
            </PostProvider>
        </UserContext>
    </BrowserRouter>
);

