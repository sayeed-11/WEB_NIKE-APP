import React, { useEffect, useState } from 'react'
import { popular } from '../data/popular';
import nike_main_logo from '../asset/nike_main_logo.png'


const productType = ["All Shoes", "Athletic", "Authentic", "Lather", "Canvas"];


const Products = (props) => {
    const { isView, setView } = props;
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
        if(!favArray.includes(index)){
            setFavDatainArray([...favArray, index])
        } else{
            removeItemOnce(favArray, index);
            setFavDatainArray([...favArray]);
        }
    }
    const addCartData = (index) => {
        if(!cartArray.includes(index)){
        setFavDataincartArray([...cartArray, index]);
        }else{
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

    useEffect(() => {
        console.log(favArray);
    })

    return (
        <div className='relative bg-slate-100 py-10 sm:py-20 px-2 sm:px-10'>
            <h1 className='absolute font-nike italic text-[4rem] sm:text-[7rem] top-0 right-0 sm:right-10 font-bold text-black/[0.03]'>PRODUCTS</h1>
            <div className='flex flex-col items-center gap-y-5 sm:gap-y-10'>
                <h1 className='text-[3rem] font-nike font-semibold'>Best Selling</h1>
                <div className='overflow-x-auto w-full  flex sm:justify-center h-auto py-5'>
                    {
                        productType.map((value, index) => {
                            return (
                                <button className='min-w-[150px]' onClick={() => { selection(value) }} key={index}>
                                    <span className={`w-full h-[20px] px-10 py-3 rounded-full text-xs font-text font-bold  ${selected === value ? "bg-yellow-500 text-white" : "text-yellow-500 border-2 border-yellow-500"}`}>{value}</span>
                                </button>
                            )
                        })
                    }
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-x-3 sm:gap-x-5 gap-y-3 sm:gap-y-5'>
                    {
                        popular.slice(0, 15).map((data, index) => {
                            return (
                                <div className='bg-gray-100 rounded-md shadow-md overflow-hidden relative flex flex-col items-center max-w-[200px] hover:bg-white hover:scale-[1.02] transition-all'>
                                    <div className='w-full grid p-5 relative'>
                                        <img className='-rotate-[30deg] -translate-x-5 -translate-y-5 scale-[1.5] w-[100%] rounded-full aspect-square object-cover pointer-events-none' src={data.img} alt="" />
                                        <div className=' flex items-start z-30 flex-col gap-y-1 absolute px-2 py-1 rounded-ee-lg'>
                                            <i onClick={() => { addFavData(index)}} className={`fa-regular fa-heart  w-8 aspect-square grid place-items-center rounded-full  text-sm scale-[1] ${inArray(index, favArray) ? " bg-yellow-500 text-white" : "text-yellow-500 bg-white"} shadow-md active:scale-[0.9]`} />
                                            <i onClick={() => { addCartData(index) }} className={`fa-solid fa-cart-shopping w-8 aspect-square grid place-items-center rounded-full text-sm scale-[1] ${inArray(index, cartArray) ? "bg-yellow-500 text-white" : "text-yellow-500 bg-white"} shadow-md active:scale-[0.9]`} />
                                            <i onClick={() => { setView(!isView) }} className="fa-regular fa-eye w-8 aspect-square grid place-items-center rounded-full text-yellow-500 text-sm scale-[1] bg-white shadow-md active:scale-[0.9]" />
                                        </div>
                                    </div>
                                    <div className=' w-full flex justify-between p-2'>
                                        <div>
                                            <h1 className='font-nike text-sm text-nowrap text-ellipsis overflow-hidden w-[90%] lg:w-auto'>{data.name}</h1>
                                            <div>
                                                {
                                                    [1, 2, 3, 4, 5].map((star) => {
                                                        return (
                                                            <span>
                                                                <i className={`fa-solid ${star !== 5 ? "fa-star" : "fa-star-half-stroke"} text-xs text-yellow-500`} />
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='flex gap-x-3 font-text font-bold text-[0.6rem]'>
                                                <span className='font-extrabold'>{data.price}</span>
                                                <span className='text-slate-400 line-through'>$ 25.99</span>
                                            </div>
                                        </div>
                                        <i className="fa-solid fa-arrow-right -rotate-45 bg-yellow-500 max-w-10 max-h-10 flex justify-center items-center text-xs text-white shadow-md py-5 aspect-square rounded-full" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className='mt-5'>
                    <span className=' bg-yellow-500 text-white px-10 py-4 text-xs rounded-full'>View All Products</span>
                </button>
            </div>

        </div>
    )
}

export default Products

export const ProductDetails = (prop) => {
    const { isView, setView } = prop;
    const [viewImage, setImage] = useState("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e03a744-1e16-49d7-96dc-946cf0adb129/air-max-sc-shoes-2fm8C6.png");
    const [data, setData] = useState({
        id: 1,
        name: "Nike Air Max SC",
        type: "Men's Shoes",
        main_img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e03a744-1e16-49d7-96dc-946cf0adb129/air-max-sc-shoes-2fm8C6.png",
        images: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e03a744-1e16-49d7-96dc-946cf0adb129/air-max-sc-shoes-2fm8C6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5443a03-5a85-4367-956b-dd596720076e/air-max-sc-shoes-2fm8C6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa1f7903-6189-4aad-8771-6d3b723f787f/air-max-sc-shoes-2fm8C6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f30bbd58-f17e-4fe4-bad5-bdd5b32a0d8d/air-max-sc-shoes-2fm8C6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f90571c-7319-40c4-8e21-9378c5e60981/air-max-sc-shoes-2fm8C6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3c829e4c-678b-476a-93d1-3ab2a75d0e3e/air-max-sc-shoes-2fm8C6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6706d71-f28b-49d0-8d6e-b2a34eb5e77a/air-max-sc-shoes-2fm8C6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e48a5154-9e5c-4655-bb1b-e68625290776/air-max-sc-shoes-2fm8C6.png",
        ],
        price: 5995.00,
        description: "With its easy-going lines, heritage athletics look and, of course, visible Air cushioning, the Nike Air Max SC is the perfect finish to any outfit.",
        specification: "",
        delivery_details: "",
        Reviews: "",
        color: "Wolf Grey/Burgundy Crush/White/Dark Team Red",
        style: "CW4555-016"

    });

    const [imgIndex, setIndex] = useState(data.images.indexOf("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e03a744-1e16-49d7-96dc-946cf0adb129/air-max-sc-shoes-2fm8C6.png"))

    return (
        <div className='top-0 fixed w-full h-screen bg-black/[0.7] z-50 flex justify-center items-center pt-0 overflow-auto'>
            <div className='box w-[90%] md:w-[90%] max-h-[85%] lg:w-[80%] bg-white flex flex-col p-3 gap-y-3 lg:gap-y-5 overflow-auto'>
                <div className='nav w-full h-12 md:h-14 border-b-[2px] border-yellow-500 flex justify-between items-start'>
                    <img className='w-16 h-[12]' src={nike_main_logo} alt="" />
                    <button onClick={() => { setView(!isView) }} className='active:scale-[0.97]'>
                        <i className="fa-solid fa-xmark bg-yellow-500 px-3 md:py-2 py-1 text-white rounded-sm text-xl" />
                    </button>
                </div>
                <div className='details p-1 grid grid-cols-1 md:grid-cols-2 gap-y-5 '>
                    <div className='images flex gap-x-2 '>
                        <div className="aside flex flex-col gap-y-1 lg:gap-y-3 w-[16%] md:w-[15%]">
                            {
                                data.images.slice(0, 5).map((pic, idx) => {
                                    return (
                                        <button className={`${imgIndex === idx ? "border-[1.5px] border-yellow-500 rounded-md" : ""}`} key={idx} onClick={() => { setImage(pic); setIndex(data.images.indexOf(pic)) }}>
                                            <img className='w-[full] object-cover aspect-square rounded-md ' src={pic} alt="" />
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className="main_img w-[84%] md:[85%] relative flex justify-center items-center">
                            <img className='w-[100%] rounded-md aspect-square object-cover' src={data.images[imgIndex]} alt="" />
                            <div className=' absolute w-full flex justify-between items-center px-3'>
                                <button onClick={() => { setIndex(imgIndex === 0 ? (data.images.slice(0, 5).length - 1) : (imgIndex - 1)); setImage(data.images[imgIndex]) }}>
                                    <i className='fa-solid fa-angle-left px-3 py-3 rounded-sm bg-black/[0.1] text-white' />
                                </button>
                                <button onClick={() => { setIndex(imgIndex === data.images.slice(0, 5).length - 1 ? 0 : (imgIndex + 1)); setImage(data.images[imgIndex]) }}>
                                    <i className='fa-solid fa-angle-right px-3 py-3 rounded-sm bg-black/[0.1] text-white' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='informations md:px-5 lg:px-10 flex flex-col justify-between'>
                        <div className='flex justify-between md:block items-center'>
                            <h1 className='font-nike font-semibold text-xl md:text-3xl'>{data.name}</h1>
                            <p className='font-text text-xs md:text-[1rem]'>{data.type}</p>
                        </div>
                        <div className='flex gap-x-3 items-baseline  font-bold mb-2 md:mb-0'>
                            <p className='font-nike text-xs md:text-[1rem]'>MRP : {data.price}</p>
                            <p className='font-text text-xs font-bold line-through text-slate-400'>3299</p>
                        </div>
                        <div>
                            <p className='font-text text-[0.8rem] md:text-xs xl:text-sm'>{data.description}</p>
                        </div>
                        <div className='size&Color flex flex-row justify-between mt-2 md:mt-0'>
                            <div className='size flex flex-col'>
                                <h1 className='font-nike uppercase font-semibold'>size</h1>
                                <div className='flex gap-x-2  h-full items-center'>
                                    <button className='w-8 md:w-10 py-2 border-[1.5px] border-yellow-500 rounded-sm text-xs font-bold font-text text-yellow-500 hover:bg-yellow-500 hover:text-white'>6</button>
                                    <button className='w-8 md:w-10 py-2 border-[1.5px] border-yellow-500 rounded-sm text-xs font-bold font-text text-yellow-500 hover:bg-yellow-500 hover:text-white'>6.5</button>
                                    <button className='w-8 md:w-10 py-2 border-[1.5px] border-yellow-500 rounded-sm text-xs font-bold font-text text-yellow-500 hover:bg-yellow-500 hover:text-white'>7</button>
                                    <button className='w-8 md:w-10 py-2 border-[1.5px] border-yellow-500 rounded-sm text-xs font-bold font-text text-yellow-500 hover:bg-yellow-500 hover:text-white'>7.5</button>
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
                            <button className='px-4 xl:px-8 text-xs border-[1.5px] border-yellow-500 text-yellow-500 py-3 rounded-sm uppercase font-nike flex items-center justify-center gap-x-2'>
                                <span>add to wishlist</span>
                                <i className="fa-solid fa-heart " />
                            </button>
                            <button className='px-4 xl:px-10 text-xs bg-yellow-500 text-white py-3 rounded-sm uppercase font-nike flex items-center justify-center gap-x-2'>
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