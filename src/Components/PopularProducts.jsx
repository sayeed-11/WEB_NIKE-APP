import React, { useState } from 'react'
import { popular } from '../data/popular'

const PopularProducts = (props) => {
    const [favArray, setFavDatainArray] = useState([]);
    const [cartArray, setFavDataincartArray] = useState([]);
    const {isView, setView} = props;

    function inArray(needle, haystack) {
        var count = haystack.length;
        for (var i = 0; i < count; i++) {
            if (haystack[i] === needle) { return true; }
        }
        return false;
    }

    const addFavData = (index) => {
        if (!favArray.includes(index)) {
            setFavDatainArray([...favArray, index])
        } else {
            removeItemOnce(favArray, index);
            setFavDatainArray([...favArray]);
        }
    }
    const addCartData = (index) => {
        if (!cartArray.includes(index)) {
            setFavDataincartArray([...cartArray, index]);
        } else {
            removeItemOnce(cartArray, index);
            setFavDataincartArray([...cartArray]);
        }
    }

    function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
    return (
        <div className='py-5 sm:py-20 flex flex-col sm:flex-row gap-x-1 pl-5 pr-5 sm:pr-0 sm:pl-10'>


            <div className='min-w-[250px] sm:border-r-2 sm:border-lime-500'>
                <div className='flex items-baseline gap-x-1'>
                    <div className='w-8 h-[2px] bg-lime-500 rounded-3xl' />
                    <h1 className='font-nike text-sm text-lime-500'>Trending Products</h1>
                </div>
                <div className='flex flex-row  sm:flex-col font-nike text-[1.7rem] italic font-semibold'>
                    <h1 className='-mt-2'>Most Popular</h1>
                    <h1 className='-mt-2 sm:-mt-3'>Products</h1>
                </div>
                <div className='flex flex-row sm:flex-col items-center sm:items-start pb-5 sm:pb-0 gap-x-10'>
                    <p className='text-slate-500 font-text text-xs'>Distinctively integrate interoperable total linkage and covalent processes.</p>
                    <button className='bg-lime-500 px-4 py-3 rounded-3xl text-white mt-5 flex md:block'>
                        <p className='w-20 sm:hidden text-xs'>See All</p>
                        <i className="fa-solid fa-arrow-right -rotate-45 hidden sm:block" />
                    </button>
                </div>
            </div>


            <div className='flex overflow-x-auto gap-x-4 pl-2 py-2'>
                {
                    popular.map((item, index) => {
                        return (
                            <div key={item.id} className='min-w-[230px] bg-white  shadow-md rounded-md h-[100%]   transition-all flex flex-col gap-y-2 items-start px-2 py-2 relative hover:scale-[1.03]'>
                                <div className=' flex items-start z-30 flex-col gap-y-2 absolute right-0 px-2 rounded-ee-lg'>
                                    <i onClick={() => { addFavData(index) }} className={`fa-regular fa-heart  w-9 aspect-square grid place-items-center rounded-md  text-sm scale-[1] ${inArray(index, favArray) ? " bg-lime-500 text-white" : "text-lime-500 bg-white"} shadow-md active:scale-[0.9]`} />
                                    <i onClick={() => { addCartData(index) }} className={`fa-solid fa-cart-shopping w-9 aspect-square grid place-items-center rounded-md text-sm scale-[1] ${inArray(index, cartArray) ? "bg-lime-500 text-white" : "text-lime-500 bg-white"} shadow-md active:scale-[0.9]`} />
                                    <i onClick={() => { setView(!isView) }} className="fa-regular fa-eye w-9 aspect-square grid place-items-center rounded-md text-lime-500 text-sm scale-[1] bg-white shadow-md active:scale-[0.9]" />
                                </div>
                                <img className='w-[75%] aspect-[1/1] object-cover rounded-md shadow-md border-b-2 border-lime-500' src={item.img} alt="" />
                                <div className=' flex flex-col gap-y-1 w-[100%]'>
                                    <div className='w-full'>
                                        <h1 className='font-nike font text-sm'>{item.name}</h1>
                                    </div>
                                    <div className='flex justify-start gap-x-3 items-center '>
                                        <p className='font-text text-[0.5rem] font-extrabold text-lime-500 pt-1'><span className='text-sm'>$ {item.price}</span> <span className='ml-1 line-through text-slate-700'>$ 25.99</span></p>
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
                                    </div>
                                    <button className=' bg-lime-500 w-[100%]  py-3 text-xs text-white rounded-md shadow-md text-slate-bg-slate-100 mt-1 flex justify-center items-center gap-x-3'>
                                        <span>Buy Now</span>
                                        <i className="fa-solid fa-arrow-right -rotate-45 text-xs text-white" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularProducts