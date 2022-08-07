import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from "./components/Counter";
import {Provider} from "react-redux";
import counterStore from "./services/store"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={counterStore}><Counter /></Provider>);
