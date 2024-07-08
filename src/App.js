import React from "react";
import NavigationBar from "./Components/NavigationBar";
import HomePage from './Components/HomePage';
import PopularProducts from "./Components/PopularProducts";
import AboutPage from "./Components/AboutPage";
import Products from "./Components/Products";
import Description from "./Components/Description";
import Feedback from "./Components/Feedback";
import Discount from "./Components/Discount";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";
import ProductDetails from "./Components/ShortDetails";

function App() {


  const {
    detailsReducer,
  } = useSelector(state => state)



  return (
    <div className={`App  w-full min-h-screen bg-slate-100 relative flex flex-col justify-center`}>
      <NavigationBar />
      <HomePage />
      <PopularProducts/>
      <AboutPage />
      <Products/>
      <Description />
      <Feedback />
      <Discount />
      <Footer />
      {detailsReducer.isView && <ProductDetails/>}
    </div>
  );
}

export default App;

