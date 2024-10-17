import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import {
    set_data,
} from '../../reduxStore/Actions';
import { useNavigate } from 'react-router-dom';

const AllShoes = ({hasFilter, JaordanShoes}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    const [isHover, setHover] = useState(false);
    const [selected, setSelection] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className={` ${hasFilter ? "w-[100%]" : "w-[100%] lg:w-[80%]"} overflow-auto gap-x-3 sm:gap-x-5 gap-y-10   grid grid-cols-2 md:grid-cols-3 px-3 sm:px-5 lg:px-10 transition-all duration-[0.3s]`}>
            {
                JaordanShoes.map((item, index) => {
                    return (
                        <button key={index}
                        onMouseEnter={() => {
                            setHover(true)
                            setSelection(item.colorsAvailable[0].style);
                        }}
                        onMouseLeave={() => {
                            setHover(false)
                            setSelection("");
                        }}
                        >
                            <div className='overflow-hidden  rounded-sm'>
                                <button onClick={() => {
                                    navigate('/ViewDetails', { state: { myData: 'some value', data : item } })
                                    dispatch(set_data(item));
                                }}><img className='-translate-y-16' src={item.colorsAvailable[0].images[0]} alt={'nike'} /></button>
                                {isHover && selected === item.colorsAvailable[0].style ?  <AvailableColor item={item} />  : <PriceDetails item={item}/>}
                            </div>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default AllShoes

const PriceDetails = ({ item }) => {
    return (
        <div className='-translate-y-20 -mb-20 p-2 font-nike bg-white'>
            <h1 className='text-left line-clamp-1'>{item.colorsAvailable[0].name}</h1>
            <p className='text-xs text-left'>{item.type}</p>
            <div className='flex flex-wrap justify-between gap-x-2 mt-1 sm:mt-5'>
                <p className='text-left text-[0.9rem] sm:text-[1rem]'>{item.colorsAvailable.length} {item.colorsAvailable.length > 1 ? "colors" : "color"} </p>
                <p className='text-left text-[0.9rem] sm:text-[1rem]'>MRP : ₹ {item.colorsAvailable[0].price}</p>
            </div>
        </div>
    )
}

const AvailableColor = ({ item }) => {
    return (
        <div className='bg-white -translate-y-20 -mb-20 p-2 font-nike space-y-3'>
            <div className='flex gap-x-1 overflow-auto'>
                {
                    item.colorsAvailable.slice(0, 4).map((color, index) => {
                        return (
                            <button>
                                <img className='w-12 max-w-[30px] sm:max-w-none aspect-square' src={color.images[0]} alt="" />
                            </button>
                        )
                    })
                }
                {item.colorsAvailable.length > 4 && <IndicateMoreItem item={item} />}
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-left'>MRP : ₹ {item.colorsAvailable[0].price}</p>
                <i className='fa-regular fa-heart scale-[1.5] mr-2 sm:mr-5'/>
            </div>
        </div>
    )
}

const IndicateMoreItem = ({ item }) => {
    return (
        <div className='w-12 min-w-7 aspect-square bg-white flex justify-center items-center border-2 border-black'>
            <span>+</span>
            <span>{item.colorsAvailable.length - 4}</span>
        </div>
    )
}