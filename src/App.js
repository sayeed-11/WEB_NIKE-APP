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

function App() {
  const [isView, setView] = useState(false);
  return (
    <div className={`App  w-full min-h-screen bg-slate-100 relative flex flex-col justify-center`}>
     <NavigationBar/>
     <HomePage isView={isView} setView={setView}/>
     <PopularProducts isView={isView} setView={setView}/>
     <AboutPage/>
     <Products isView={isView} setView={setView}/>
     <Description/>
     <Feedback/>
     <Discount/>
     <Footer/>
      {isView && <ProductDetails isView={isView} setView={setView}/>}
    </div>
  );
}

export default App;

