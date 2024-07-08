import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reduxStore/store';
import CartList from './Components/Cart/CartList';
import WishList from './Components/Wishlist/WishList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/CartList" element={<CartList />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
