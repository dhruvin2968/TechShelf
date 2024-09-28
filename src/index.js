import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter as Router} from "react-router-dom";
import { ScrollToTop } from './components';
import { FilterProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
    <ScrollToTop/>
    <App />
    </FilterProvider>
    </Router>
  </React.StrictMode>
);

