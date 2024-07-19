import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reduxStore/store';
import CartList from './Components/Cart/CartList';
import WishList from './Components/Wishlist/WishList';
import MyAccount from './Components/MyAccount/MyAccount';
// import NavigationBar from './Components/NavigationBar';
import Favourites from './Components/MyAccount/Favourites';
import ShoesMainPage from './Components/AllShoes/ShoesMainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/CartList" element={<CartList />} />
        <Route path="MyAccount/CartList" element={<CartList />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/ShoesMainPage" element={<ShoesMainPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
