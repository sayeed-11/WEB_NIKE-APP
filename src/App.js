import React, { useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import HomePage from './Components/HomePage';
import PopularProducts from "./Components/PopularProducts";
import AboutPage from "./Components/AboutPage";
import Products from "./Components/Products";
import Description from "./Components/Description";
import Feedback from "./Components/Feedback";
import Discount from "./Components/Discount";
import Footer from "./Components/Footer";
import { ProductDetails } from "./Components/Products";
import { useSelector } from "react-redux";

function App() {
  // const [isView, setView] = useState(false);

  const [data, setData] = useState({

  });


  const {
    detailsReducer,
    productDetailsReducer,
    productInCart,
    productInWishlist
  } = useSelector(state => state)

  console.log('app page', detailsReducer.isView);


  return (
    <div className={`App  w-full min-h-screen bg-slate-100 relative flex flex-col justify-center`}>
      <NavigationBar />
      <HomePage />
      <PopularProducts
        // isView={isView}
        // setView={setView}
        setData={setData}
      />
      <AboutPage />
      <Products
        // isView={isView}
        // setView={setView}
        setData={setData}
      />
      <Description />
      <Feedback />
      <Discount />
      <Footer />
      {detailsReducer.isView && <ProductDetails
        // isView={isView}
        // setView={setView}
        data={data}
      />}
    </div>
  );
}

export default App;

