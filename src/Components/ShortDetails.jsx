import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import nike_main_logo from '../asset/nike_main_logo.png'
import {
    close_details,
} from '../reduxStore/Actions';

const ProductDetails = () => {
    const dispatch = useDispatch();

    const [imgIndex, setIndex] = useState(0)
    const [isMore, setMore] = useState(false);

    const {
        setData,
        productInCart,
        productInWishlist,
    } = useSelector(state => state)
    const details = setData.productDetails;

    console.log('productInCart', productInCart);
    console.log('productInCart', productInWishlist);

    return (
        <div className='top-0 fixed w-full h-screen bg-black/[0.7] z-50 flex justify-center items-center pt-0 overflow-auto'>
            <div className='box w-[90%] md:w-[90%] max-h-[90%] sm:max-h-[85%] lg:w-[80%] bg-white flex flex-col p-3 gap-y-3 lg:gap-y-5 overflow-auto'>
                <div className='nav w-full h-12 md:h-14 border-b-[2px] border-lime-500 flex justify-between items-start'>
                    <img className='w-16 h-[12]' src={nike_main_logo} alt="" />
                    <button onClick={() => {
                        dispatch(close_details())
                    }} className='active:scale-[0.97]'>
                        <i className="fa-solid fa-xmark bg-lime-500 px-3 md:py-2 py-1 text-white rounded-sm text-xl" />
                    </button>
                </div>
                <div className='details p-1 grid grid-cols-1 md:grid-cols-2 gap-y-5 '>
                    <div className='images flex gap-x-2 '>
                        <div className="aside flex flex-col gap-y-1 lg:gap-y-3 w-[16%] md:w-[15%]">
                            {
                                details.colorsAvailable[0].images.slice(0, 5).map((pic, idx) => {
                                    return (
                                        <button className={`${imgIndex === idx ? "border-[1.5px] border-lime-500 rounded-md" : ""}`} key={idx} onClick={() => { setIndex(details.colorsAvailable[0].images.indexOf(pic)) }}>
                                            <img className='w-[full] object-cover aspect-square rounded-md ' src={pic} alt="" />
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className="main_img w-[84%] md:[85%] relative flex justify-center items-center">
                            <img className='w-[100%] rounded-md aspect-square object-cover' src={details.colorsAvailable[0].images[imgIndex]} alt="" />
                            <div className=' absolute w-full flex justify-between items-center px-3'>
                                <button onClick={() => { setIndex(imgIndex === 0 ? (details.colorsAvailable[0].images.slice(0, 5).length - 1) : (imgIndex - 1)); }}>
                                    <i className='fa-solid fa-angle-left px-3 py-3 rounded-sm bg-black/[0.1] text-white' />
                                </button>
                                <button onClick={() => { setIndex(imgIndex === details.colorsAvailable[0].images.slice(0, 5).length - 1 ? 0 : (imgIndex + 1)); }}>
                                    <i className='fa-solid fa-angle-right px-3 py-3 rounded-sm bg-black/[0.1] text-white' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='informations md:px-5 lg:px-10 flex flex-col justify-between'>
                        <div className='flex flex-wrap justify-between md:block items-center'>
                            <h1 className='font-nike font-semibold text-xl md:text-3xl'>{details.colorsAvailable[0].name}</h1>
                            <p className='font-text text-xs md:text-[1rem]'>{details.type}</p>
                        </div>
                        <div className='flex gap-x-3 items-baseline  font-bold mb-2 md:mb-0'>
                            <p className='font-nike text-xs md:text-[1rem]'>MRP : ₹ {details.colorsAvailable[0].price}</p>
                            <p className='font-text text-xs font-bold line-through text-slate-400'>₹ 3299</p>
                        </div>
                        <div>
                            <p className={`font-text text-[0.8rem] md:text-xs xl:text-sm ${!isMore ? "flex" : "block"} items-end sm:block`}>
                                <span className={`${isMore ? "line-clamp-none" : "line-clamp-2"} sm:line-clamp-none`}>{details.colorsAvailable[0].description}</span>
                                <button onClick={() => { setMore(!isMore) }}>
                                    <span className='sm:hidden text-xs text-lime-500 font-nike font-semibold'>{isMore ? "Less" : "More"}</span>
                                </button>
                            </p>
                        </div>
                        <div className='size&Color flex flex-row justify-between mt-2 md:mt-0'>
                            <div className='size flex flex-col'>
                                <h1 className='font-nike uppercase font-semibold'>size</h1>
                                <div className='flex gap-x-2  h-full items-center'>
                                    <button className='w-8 md:w-10 py-2 border-[1.5px] border-lime-500 rounded-sm text-xs font-bold font-text text-lime-500 hover:bg-lime-500 hover:text-white'>6</button>
                                    <button className='w-8 md:w-10 py-2 border-[1.5px] border-lime-500 rounded-sm text-xs font-bold font-text text-lime-500 hover:bg-lime-500 hover:text-white'>6.5</button>
                                    <button className='w-8 md:w-10 py-2 border-[1.5px] border-lime-500 rounded-sm text-xs font-bold font-text text-lime-500 hover:bg-lime-500 hover:text-white'>7</button>
                                    <button className='w-8 md:w-10 py-2 border-[1.5px] border-lime-500 rounded-sm text-xs font-bold font-text text-lime-500 hover:bg-lime-500 hover:text-white'>7.5</button>
                                </div>
                            </div>
                            <div className="color flex flex-col">
                                <h1 className='font-nike uppercase font-semibold'>colors</h1>
                                <div className='flex gap-x-2 items-center h-full'>
                                    <button className='w-4 lg:w-6 aspect-square bg-red-800 rounded-full outline outline-offset-2'></button>
                                    <button className='w-4 lg:w-6 aspect-square bg-violet-500 rounded-full'></button>
                                    <button className='w-4 lg:w-6 aspect-square bg-green-500 rounded-full'></button>
                                    <button className='w-4 lg:w-6 aspect-square bg-yellow-500 rounded-full'></button>
                                </div>
                            </div>
                        </div>

                        <div className="buttons flex flex-col gap-y-2 md:flex-row justify-between mt-5 lg:mt-10">
                            <button className='px-4 xl:px-8 text-xs border-[1.5px] border-lime-500 text-lime-500 py-3 rounded-sm uppercase font-nike flex items-center justify-center gap-x-2'>
                                <span>add to wishlist</span>
                                <i className="fa-solid fa-heart " />
                            </button>
                            <button className='px-4 xl:px-10 text-xs bg-lime-500 text-white py-3 rounded-sm uppercase font-nike flex items-center justify-center gap-x-2'>
                                <span>add to cart</span>
                                <i className="fa-solid fa-cart-shopping " />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductDetails;