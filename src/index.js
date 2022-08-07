import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from "./components/Counter";
import CounterStoreProvider from "./services/store"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CounterStoreProvider><Counter /></CounterStoreProvider>);
