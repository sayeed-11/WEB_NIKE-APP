import React, { useState } from 'react';
import { JaordanShoes } from '../data/MenShoes/Jordan';
import { useDispatch, useSelector } from 'react-redux';
import {
    view_details,
    set_data,
    add_product_in_cart,
    add_product_in_wishlist,
    remove_product_from_cart,
    remove_product_from_wishlist,
    add_data_in_cart_array,
    remove_data_from_cart_array,
    add_data_in_wishlist_array,
    remove_data_from_wishlist_array
} from '../reduxStore/Actions';



const productType = ["All Shoes", "Athletic", "Authentic", "Lather", "Canvas"];


const Products = () => {
    const [selected, selection] = useState("All Shoes");

    const dispatch = useDispatch();

    const { cartArray } = useSelector(state => state.cartDataReducer)
    const { wishlistArray } = useSelector(state => state.wishlistDataReducer)

    function inArray(needle, haystack) {
        var count = haystack.length;
        for (var i = 0; i < count; i++) {
            if (haystack[i] === needle) { return true; }
        }
        return false;
    }

    const [len, setLen] = useState(6)

    // const addFavData = (index) => {
    //     if (!favArray.includes(index)) {
    //         setFavDatainArray([...favArray, index])
    //     } else {
    //         removeItemOnce(favArray, index);
    //         setFavDatainArray([...favArray]);
    //     }
    // }
    // const addCartData = (index) => {
    //     if (!cartArray.includes(index)) {
    //         setFavDataincartArray([...cartArray, index]);
    //     } else {
    //         removeItemOnce(cartArray, index);
    //         setFavDataincartArray([...cartArray]);
    //     }
    // }

    // function removeItemOnce(arr, value) {
    //     var index = arr.indexOf(value);
    //     if (index > -1) {
    //         arr.splice(index, 1);
    //     }
    //     return arr;
    // }

    return (
        <div className='relative bg-slate-100 py-10 sm:py-20 px-0 '>
            <h1 className='absolute font-nike italic text-[4rem] sm:text-[7rem] top-0 right-0 sm:right-10 font-bold text-black/[0.03]'>PRODUCTS</h1>
            <div className='flex flex-col items-center gap-y-5 sm:gap-y-10'>
                <h1 className='text-[3rem] font-nike font-semibold'>Best Selling</h1>
                <div className='overflow-x-auto w-full  flex sm:justify-center h-auto py-5'>
                    {
                        productType.map((value, index) => {
                            return (
                                <button className='min-w-[150px]' onClick={() => { selection(value) }} key={index}>
                                    <span className={`w-full h-[20px] px-10 py-3 rounded-full text-xs font-text font-bold  ${selected === value ? "bg-lime-500 text-white" : "text-lime-500 border-2 border-lime-500"}`}>{value}</span>
                                </button>
                            )
                        })
                    }
                </div>

                <div className='flex flex-wrap justify-center sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-3 sm:gap-x-5 gap-y-3 sm:gap-y-5'>
                    {
                        JaordanShoes.slice(0, len).map((item, index) => {
                                const data = {
                                    ...item,
                                    id : item.colorsAvailable[0].style
                                }
                            return (
                                <div className='bg-gray-100 rounded-md shadow-md overflow-hidden relative grid grid-cols-2 h-auto sm:flex  sm:flex-col items-center max-w-[90%] sm:max-w-[300px] hover:bg-white hover:scale-[1.02] transition-all sm:py-5'>
                                    <div className='w-full grid p-5 relative'>
                                        <img className='-rotate-[30deg] sm:-translate-x-16 -translate-x-4 -translate-y-8 sm:-translate-y-14 scale-[1.55] sm:scale-[1.1] w-[100%] rounded-full aspect-square object-cover pointer-events-none' src={data.colorsAvailable[0].images[0]} alt="" />
                                        <div className=' flex items-start z-30 flex-col gap-y-1 absolute sm:right-0 sm:top-0 gap-x-2 px-2 py-1 rounded-ee-lg'>
                                            <i onClick={() => {
                                                inArray(data.id, wishlistArray) ? dispatch(remove_product_from_wishlist(data.id)) : dispatch(add_product_in_wishlist(data))
                                                inArray(data.id, wishlistArray) ? dispatch(remove_data_from_wishlist_array(data.id)) : dispatch(add_data_in_wishlist_array(data.id))
                                            }} className={`fa-${inArray(data.id, wishlistArray) ? "solid" : "regular"} fa-heart  w-10 sm:w-12 aspect-square grid place-items-center rounded-full  text-sm scale-[1] ${inArray(data.id, wishlistArray) ? " bg-lime-500 text-white" : "text-lime-500 bg-white"} shadow-md active:scale-[0.9]`} />
                                            <i onClick={() => {
                                                inArray(data.id, cartArray) ? dispatch(remove_product_from_cart(data.id)) : dispatch(add_product_in_cart(data))
                                                inArray(data.id, cartArray) ? dispatch(remove_data_from_cart_array(data.id)) : dispatch(add_data_in_cart_array(data.id))
                                            }} className={`fa-solid fa-cart-shopping w-10 sm:w-12 aspect-square grid place-items-center rounded-full text-sm scale-[1] ${inArray(data.id, cartArray) ? "bg-lime-500 text-white" : "text-lime-500 bg-white"} shadow-md active:scale-[0.9]`} />
                                            <i onClick={() => {
                                                dispatch(view_details());
                                                dispatch(set_data(data));
                                            }} className="fa-regular fa-eye w-10 sm:w-12 aspect-square grid place-items-center rounded-full text-lime-500 text-sm scale-[1] bg-white shadow-md active:scale-[0.9]" />
                                        </div>
                                    </div>
                                    <div className=' w-full flex flex-col sm:grid grid-cols-2 gap-y-10 px-3 sm:flex-row h-full sm:h-auto py-5 sm:py-0 justify-center sm:justify-between items-end sm:items-center p-2 sm:-translate-y-8 sm:-mb-8'>
                                        <div className='flex sm:block flex-col items-end w-[110%] sm:w-auto'>
                                            <h1 className='font-nike text-sm text-nowrap text-ellipsis overflow-hidden sm:w-auto text-right sm:text-left w-[90%] '>{data.colorsAvailable[0].name}</h1>
                                            <div>
                                                {
                                                    [1, 2, 3, 4, 5].map((star) => {
                                                        return (
                                                            <span>
                                                                <i className={`fa-solid ${star !== 5 ? "fa-star" : "fa-star-half-stroke"} text-xs text-lime-500`} />
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='flex gap-x-3 font-text font-bold text-[0.6rem]'>
                                                <span className='font-extrabold'>₹ {data.colorsAvailable[0].price}</span>
                                                <span className='text-slate-400 line-through'>₹ {data.colorsAvailable[0].price - 5000}</span>
                                            </div>
                                        </div>
                                        <button className='bg-lime-500 flex justify-center items-center px-5 py-3 gap-x-3 sm:ga-x-1 text-xs rounded-full '>
                                            <span className='text-white'>Buy Now</span>
                                            <i className="fa-solid fa-arrow-right -rotate-45 text-xs text-white rounded-full" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={() => setLen(JaordanShoes.length)} className='mt-5'>
                    <span className=' bg-lime-500 text-white px-10 py-4 text-xs rounded-full'>View All Products</span>
                </button>
            </div>

        </div>
    )
}

export default Products




