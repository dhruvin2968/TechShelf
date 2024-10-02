import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from './components';
import { FilterProvider } from './context';
import { CartProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ToastContainer closeButton={false} autoClose={2000} position={"top-right"} closeOnClick={true} />
        <ScrollToTop />
        <CartProvider>
        <App />
        </CartProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>
);

