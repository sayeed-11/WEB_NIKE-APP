import React, { useState } from 'react'
// import { popular } from '../data/popular';
import nike_main_logo from '../asset/nike_main_logo.png'
import { JaordanShoes } from '../data/MenShoes/Jordan';


const productType = ["All Shoes", "Athletic", "Authentic", "Lather", "Canvas"];


const Products = (props) => {
    const { isView, setView, setData } = props;
    const [selected, selection] = useState("All Shoes");
    const [favArray, setFavDatainArray] = useState([]);
    const [cartArray, setFavDataincartArray] = useState([]);


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


    const setProductData = (updatedData) => {
        setData({
            id: updatedData.id,
            name: updatedData.colorsAvailable[0].name,
            type: updatedData.type,
            main_img: updatedData.img,
            images: updatedData.colorsAvailable[0].images,
            price: updatedData.colorsAvailable[0].price,
            description: updatedData.colorsAvailable[0].description,
            specification: "",
            delivery_details: "",
            Reviews: "",
            color: updatedData.colorsAvailable.colorShown,
            style: updatedData.colorsAvailable.style
        })
    }

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
                        JaordanShoes.slice(0, 9).map((data, index) => {
                            return (
                                <div className='bg-gray-100 rounded-md shadow-md overflow-hidden relative grid grid-cols-2 h-auto sm:flex  sm:flex-col items-center max-w-[90%] sm:max-w-[300px] hover:bg-white hover:scale-[1.02] transition-all sm:py-5'>
                                    <div className='w-full grid p-5 relative'>
                                        <img className='-rotate-[30deg] sm:-translate-x-16 -translate-x-4 -translate-y-8 sm:-translate-y-14 scale-[1.55] sm:scale-[1.1] w-[100%] rounded-full aspect-square object-cover pointer-events-none' src={data.img} alt="" />
                                        <div className=' flex items-start z-30 flex-col gap-y-1 absolute sm:right-0 sm:top-0 gap-x-2 px-2 py-1 rounded-ee-lg'>
                                            <i onClick={() => { addFavData(index) }} className={`fa-regular fa-heart  w-10 sm:w-12 aspect-square grid place-items-center rounded-full  text-sm scale-[1] ${inArray(index, favArray) ? " bg-lime-500 text-white" : "text-lime-500 bg-white"} shadow-md active:scale-[0.9]`} />
                                            <i onClick={() => { addCartData(index) }} className={`fa-solid fa-cart-shopping w-10 sm:w-12 aspect-square grid place-items-center rounded-full text-sm scale-[1] ${inArray(index, cartArray) ? "bg-lime-500 text-white" : "text-lime-500 bg-white"} shadow-md active:scale-[0.9]`} />
                                            <i onClick={() => {
                                                setView(!isView);
                                                setProductData(data);
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
                <button className='mt-5'>
                    <span className=' bg-lime-500 text-white px-10 py-4 text-xs rounded-full'>View All Products</span>
                </button>
            </div>

        </div>
    )
}

export default Products




export const ProductDetails = (prop) => {
    const { isView, setView, data } = prop;

    const [imgIndex, setIndex] = useState(0)

    const [isMore, setMore] = useState(false);

    return (
        <div className='top-0 fixed w-full h-screen bg-black/[0.7] z-50 flex justify-center items-center pt-0 overflow-auto'>
            <div className='box w-[90%] md:w-[90%] max-h-[90%] sm:max-h-[85%] lg:w-[80%] bg-white flex flex-col p-3 gap-y-3 lg:gap-y-5 overflow-auto'>
                <div className='nav w-full h-12 md:h-14 border-b-[2px] border-lime-500 flex justify-between items-start'>
                    <img className='w-16 h-[12]' src={nike_main_logo} alt="" />
                    <button onClick={() => { setView(!isView) }} className='active:scale-[0.97]'>
                        <i className="fa-solid fa-xmark bg-lime-500 px-3 md:py-2 py-1 text-white rounded-sm text-xl" />
                    </button>
                </div>
                <div className='details p-1 grid grid-cols-1 md:grid-cols-2 gap-y-5 '>
                    <div className='images flex gap-x-2 '>
                        <div className="aside flex flex-col gap-y-1 lg:gap-y-3 w-[16%] md:w-[15%]">
                            {
                                data.images.slice(0, 5).map((pic, idx) => {
                                    return (
                                        <button className={`${imgIndex === idx ? "border-[1.5px] border-lime-500 rounded-md" : ""}`} key={idx} onClick={() => { setIndex(data.images.indexOf(pic)) }}>
                                            <img className='w-[full] object-cover aspect-square rounded-md ' src={pic} alt="" />
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className="main_img w-[84%] md:[85%] relative flex justify-center items-center">
                            <img className='w-[100%] rounded-md aspect-square object-cover' src={data.images[imgIndex]} alt="" />
                            <div className=' absolute w-full flex justify-between items-center px-3'>
                                <button onClick={() => { setIndex(imgIndex === 0 ? (data.images.slice(0, 5).length - 1) : (imgIndex - 1)); }}>
                                    <i className='fa-solid fa-angle-left px-3 py-3 rounded-sm bg-black/[0.1] text-white' />
                                </button>
                                <button onClick={() => { setIndex(imgIndex === data.images.slice(0, 5).length - 1 ? 0 : (imgIndex + 1)); }}>
                                    <i className='fa-solid fa-angle-right px-3 py-3 rounded-sm bg-black/[0.1] text-white' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='informations md:px-5 lg:px-10 flex flex-col justify-between'>
                        <div className='flex flex-wrap justify-between md:block items-center'>
                            <h1 className='font-nike font-semibold text-xl md:text-3xl'>{data.name}</h1>
                            <p className='font-text text-xs md:text-[1rem]'>{data.type}</p>
                        </div>
                        <div className='flex gap-x-3 items-baseline  font-bold mb-2 md:mb-0'>
                            <p className='font-nike text-xs md:text-[1rem]'>MRP : ₹ {data.price}</p>
                            <p className='font-text text-xs font-bold line-through text-slate-400'>₹ 3299</p>
                        </div>
                        <div>
                            <p className={`font-text text-[0.8rem] md:text-xs xl:text-sm ${!isMore ? "flex" : "block"} items-end sm:block`}><span className={`${isMore ? "line-clamp-none" : "line-clamp-2"} sm:line-clamp-none`}>{data.description}</span><button onClick={() => { setMore(!isMore) }}> <span className='sm:hidden text-xs text-lime-500 font-nike font-semibold'>{isMore ? "Less" : "More"}</span></button></p>
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