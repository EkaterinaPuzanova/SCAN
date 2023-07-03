import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './store/Store';
import { Context } from "./context";

const store = new Store();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{store}}>
    <App />
  </Context.Provider>

);

