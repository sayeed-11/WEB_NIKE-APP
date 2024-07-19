import React, { useState } from 'react'
import { JaordanShoes } from '../../data/MenShoes/Jordan'

const AllShoes = ({hasFilter}) => {
    const [isHover, setHover] = useState(false);
    const [selected, setSelection] = useState("");
    return (
        <div className={` ${hasFilter ? "w-[100%]" : "w-[100%] lg:w-[80%]"} overflow-auto  gap-x-5 gap-y-10 flex flex-wrap  sm:grid grid-cols-2 md:grid-cols-3 px-5 lg:px-10 transition-all`}>
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
                                <img className='-translate-y-20' src={item.colorsAvailable[0].images[0]} alt="" />
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
            <div className='flex justify-between mt-5'>
                <p>{item.colorsAvailable.length} {item.colorsAvailable.length > 1 ? "colors" : "color"} </p>
                <p>MRP : ₹ {item.colorsAvailable[0].price}</p>
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
                                <img className='w-12 aspect-square' src={color.images[0]} alt="" />
                            </button>
                        )
                    })
                }
                {item.colorsAvailable.length > 4 && <IndicateMoreItem item={item} />}
            </div>
            <div className='flex justify-between'>
                <p className='text-left'>MRP : ₹ {item.colorsAvailable[0].price}</p>
                <i className='fa-regular fa-heart scale-[1.5] mr-5'/>
            </div>
        </div>
    )
}

const IndicateMoreItem = ({ item }) => {
    return (
        <div className='w-12 aspect-square bg-white flex justify-center items-center border-2 border-black'>
            <span>+</span>
            <span>{item.colorsAvailable.length - 4}</span>
        </div>
    )
}