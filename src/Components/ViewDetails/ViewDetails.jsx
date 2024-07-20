import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavigationBar from '../NavigationBar';
import { ExtraData } from '../Cart/CartList';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

const ViewDetails = (props) => {
  const location = useLocation();
  const myData = location.state;
  console.log('value --- ', myData);
  useEffect(() => {
    window.scrollTo(0, 0)
},[])
  const [colorIndex, setColorIndex] = useState(0);
  const productDetails = useSelector(state => state.setData.productDetails);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full min-h-screen bg-slate-100 pt-5 sm:pt-20 relative space-y-10 max-w-[1350px] mx-auto overflow-x-hidden sm:overflow-clip'>
      <NavigationBar />
      <div className='grid grid-cols-1 lg:grid-cols-2 sm:gap-x-10 gap-y-10 px-2 sm:px-5'>
        <ImageSection productDetails={productDetails}  colorIndex={colorIndex}/>
        <ContentSection productDetails={productDetails} setColorIndex={setColorIndex} colorIndex={colorIndex}/>
      </div>
      <div className='font-nike px-4 sm:px-10 '>
        <h1 className='text-2xl'>How Others Are Wearing It</h1>
        <p>Upload your photo or mention @Nike on Instagram for a chance to be featured.</p>
        <button className='mt-5'>
          <input className='' type="file" name="" id="" />
        </button>
      </div>
      <div className='pl-3 sm:pl-5 '><ExtraData /></div>
      <div className=''><Footer /></div>
    </div>
  );
};

export default ViewDetails;

const ImageSection = ({ productDetails, colorIndex }) => {
  const [imageIndex, setIndex] = useState(0);
  return (
    <div className='flex flex-col-reverse  gap-y-3 sm:flex-row gap-x-3 px-1 sm:px-5 py-1 sm:overflow-hidden sm:aspect-square w-[100%] lg:sticky lg:top-[56px]'>
      <div className='aside w-[100%] sm:w-[10%] overflow-auto flex flex-row sm:flex-col gap-2'>
        {
          productDetails.colorsAvailable[colorIndex].images.map((thumb, index) => (
            <button onMouseEnter={() => {setIndex(index)}} className='w-full' key={index}>
              <img className={`min-w-[70px] sm:min-w-0 sm:w-full ${imageIndex === index ? "border-2 border-black" : "border-none"} aspect-square object-cover rounded-md`} src={thumb} alt="" />
            </button>
          ))
        }
      </div>
      <div className=' w-[100%] sm:w-[90%] relative'>
        <img className='w-full h-full object-cover rounded-md' src={productDetails.colorsAvailable[colorIndex].images[imageIndex]} alt="" />
        <div className='absolute w-full flex justify-end gap-x-3 bottom-5 right-5'>
          <button onClick={() => {
            setIndex(imageIndex === 0 ? productDetails.colorsAvailable[colorIndex].images.length -1 : imageIndex - 1)
          }} className='bg-white/[0.5] rounded-full'>
            <i className='fa-solid fa-chevron-left py-3 px-4'/>
          </button>
          <button onClick={() => {
            setIndex(imageIndex === productDetails.colorsAvailable[colorIndex].images.length -1 ? 0 : imageIndex + 1)
          }} className='bg-white/[0.5] rounded-full'>
          <i className='fa-solid fa-chevron-right py-3 px-4'/>
          </button>
        </div>
      </div>
    </div>
  );
};

const ContentSection = ({ productDetails, setColorIndex, colorIndex }) => {
  const { colorsAvailable, delivery_returns, manufactureDetails, priceDetails, type, product_informations } = productDetails;
  return (
    <div className='font-nike space-y-8 px-2 sm:px-5 lg:px-20'>
      <div>
        <h1 className='text-3xl'>{colorsAvailable[colorIndex].name}</h1>
        <p className='text-sm'>{type}</p>
      </div>
      <div>
        <h1 className='text-xl'>MRP : ₹ {colorsAvailable[colorIndex].price}</h1>
        {
          priceDetails.map((val, i) => (
            <p className='text-gray-400' key={i}>{val}</p>
          ))
        }
      </div>
      <AllColors colorsAvailable={colorsAvailable} setColorIndex={setColorIndex} colorIndex={colorIndex}/>
      <Size />
      <Buttons />
      <Description colorsAvailable={colorsAvailable} colorIndex={colorIndex} />
      <ColorShowAndStyle colorsAvailable={colorsAvailable} colorIndex ={colorIndex} />
      <div>
        <DeliverAndReturns delivery_returns={delivery_returns} />
        <ProductInformations product_informations={product_informations} />
        <ManufactureDetails manufactureDetails={manufactureDetails} />
      </div>
    </div>
  );
};

const Size = () => {
  const sizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];
  return (
    <div className='space-y-5 pt-10'>
      <div className='flex justify-between'>
        <h1 className='text-xl'>Select Size</h1>
        <h1 className='text-slate-400'>Size Guide</h1>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-5 gap-3'>
        {
          sizes.map((s, i) => (
            <button className='border-[1.5px] border-black flex items-center justify-center py-3 rounded-md hover:bg-black hover:text-white' key={i}>UK {s}</button>
          ))
        }
      </div>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <button className='bg-black text-white py-5 rounded-full flex items-center justify-center gap-x-3 hover:tracking-wide'>
        <span>Add To Bag</span>
        <i className='fa-solid fa-bag-shopping'/>
      </button>
      <button className='border-2 border-black py-5 rounded-full flex items-center justify-center gap-x-3 hover:tracking-wide'>
        <span>Favourite</span>
        <i className='fa-regular fa-heart'/>
      </button>
      <p className='text-gray-400'>This product is excluded from site promotions and discounts.</p>
    </div>
  );
};

const Description = ({ colorsAvailable, colorIndex }) => {
  return (
    <div className='pt-10'>
      <p>{colorsAvailable[colorIndex].description}</p>
    </div>
  );
};

const ColorShowAndStyle = ({ colorsAvailable,colorIndex }) => {
  return (
    <div>
      <ul className='space-y-3'>
        <li className='space-x-1'>
          <span className='text-xl'>•Color Shown :</span>
          <span>{colorsAvailable[colorIndex].colorShown}</span>
        </li>
        <li className='space-x-1'>
          <span className='text-xl'>•Style :</span>
          <span>{colorsAvailable[colorIndex].style}</span>
        </li>
      </ul>
    </div>
  );
};

const DeliverAndReturns = ({ delivery_returns }) => {
  const [view, setView] = useState(false);
  return (
    <div className='border-t-[1.5px] border-gray-400 relative'>
      <Arrow view={view} />
      <button onClick={() => { setView(!view) }} className='py-5 w-full text-left'>
        <h1 className='text-xl'>Delivery & Returns</h1>
      </button>
      <div className={`space-y-3 py-3 ${view ? "block" : "hidden"} text-gray-700`}>
        {
          delivery_returns.map((d, i) => (
            <p key={i}>{d}</p>
          ))
        }
      </div>
    </div>
  );
};

const ProductInformations = ({ product_informations }) => {
  const [view, setView] = useState(false);
  return (
    <div className='border-t-[1.5px] border-gray-400 relative'>
      <Arrow view={view} />
      <button onClick={() => { setView(!view) }} className='py-5 w-full text-left'>
        <h1 className='text-xl'>Product Informations</h1>
      </button>
      <div className={`space-y-3 py-3 ${view ? "block" : "hidden"} text-gray-700 `}>
        {
          product_informations.map((d, i) => (
            <p key={i}>{d}</p>
          ))
        }
      </div>
    </div>
  );
};

const ManufactureDetails = ({ manufactureDetails }) => {
  const [view, setView] = useState(false);
  return (
    <div className='border-t-[1.5px] border-b-[1.5px] border-gray-400 relative'>
      <Arrow view={view} />
      <button onClick={() => { setView(!view) }} className='py-5 w-full text-left'>
        <h1 className='text-xl'>Manufacture Details</h1>
      </button>
      <div className={`space-y-3 py-3 ${view ? "block" : "hidden"} text-gray-700`}>
        {
          manufactureDetails.map((d, i) => (
            <p key={i}>{d}</p>
          ))
        }
      </div>
    </div>
  );
};

const Arrow = ({ view }) => {
  return (
    <div className={`absolute ${view ? "top-5" : "top-[50%] -translate-y-[50%]"} right-0 flex scale-[0.70]`}>
      <div className={`w-3 h-[1.5px] bg-black ${view ? "-rotate-45" : "rotate-45"} translate-x-[2px] transition-all`} />
      <div className={`w-3 h-[1.5px] bg-black ${view ? "rotate-45" : "-rotate-45"} -translate-x-[2px] transition-all`} />
    </div>
  );
};


const AllColors = ({colorsAvailable, setColorIndex, colorIndex}) => {
  return(
    <div className='flex gap-3 flex-wrap'>
      {
        colorsAvailable.map((color, index) => {
          return(
            <button onClick={() => {setColorIndex(index)}} className={`overflow-hidden rounded-md ${colorIndex === index ? "border-2 border-black" : "border-none"}`}>
              <img className={`w-[70px]  aspect-square object-cover`} src={color.images[0]} alt="" />
            </button>
          )
        })
      }
    </div>
  )
}