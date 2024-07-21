import React, { useEffect, useState } from 'react'

const productType = ["All Shoes", "Athletic", "Authentic", "Lather", "Canvas"];

const FilterBar = ({ hasFilter, setHeader, headerType }) => {
    const innerHeight = window.innerHeight
    const innerWidth = window.innerWidth;
    return (
        <div style={{ height: innerWidth >= 1024 ? (innerHeight - 110) : (hasFilter ? 0 : (innerHeight - 210)) }} className={`lg:block fixed  ${hasFilter ? "w-[100%] lg:w-[0%] overflow-hidden px-0" : "overflow-y-auto w-full lg:w-[20%] lg:px-5"} lg:sticky lg:top-[115px] bg-white lg:bg-transparent bottom-0 lg:bottom-auto lg:h-auto space-y-5 font-nike transition-all duration-[0.3s] z-50 pb-5 lg:pb-0`}>
            <Types setHeader={setHeader} headerType={headerType} />
            <div className='flex flex-col gap-y-5 lg:gap-y-5 px-5 lg:px-0'>
                <Gender />
                <ShopByPrice />
                <SaleAndOffer />
                <Size />
                <Colors />
                <ShoesHeight />
                <Brand />
            </div>
        </div>

    )
}

export default FilterBar

const Types = ({ setHeader, headerType }) => {
    return (
        <div className={`flex lg:flex-col justify-start items-start overflow-x-auto w-[100%]  sticky top-0 lg:static z-50 py-3 shadow-md lg:shadow-none bg-white lg:bg-transparent lg:py-0`}>
            {
                productType.map((type, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => { setHeader(type) }}
                            className={`${type === headerType ? "text-black" : "text-black/[0.5]"} min-w-[100px] lg:min-w-0`}
                        >{type}</button>
                    )
                })
            }
        </div>
    )
}

const Gender = () => {
    const [view, setView] = useState(false);
    return (
        <div className='lg:border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view} />
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1 className='text-xl lg:text-base'>Gender</h1></button>
            <ul className={`${view ? "lg:h-[90px]" : "lg:h-0"} h-auto lg:text-sm overflow-hidden transition-all`}>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Male</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Female</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Unisex</span>
                </li>
            </ul>
        </div>
    )
}


const ShopByPrice = () => {
    const [view, setView] = useState(false);
    return (
        <div className='lg:border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view} />
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1 className='text-xl lg:text-base'>Shop By Price</h1></button>
            <ul className={`${view ? "lg:h-[110px]" : "lg:h-0"} h-auto lg:text-sm overflow-hidden transition-all `}>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Under ₹ 2,500.00</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>₹ 2,501.00 - ₹ 7,500.00</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>₹ 7,501.00 - ₹ 12,999.00</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Over ₹ 12,999.00</span>
                </li>
            </ul>
        </div>
    )
}



const SaleAndOffer = () => {
    const [view, setView] = useState(false);
    return (
        <div className='lg:border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view} />
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1 className='text-xl lg:text-base'>Sale & Offer</h1></button>
            <ul className={`${view ? "lg:h-[30px]" : "lg:h-0"} h-auto text-sm overflow-hidden transition-all`}>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>sale</span>
                </li>
            </ul>
        </div>
    )
}


const Size = () => {
    const [view, setView] = useState(false);
    return (
        <div className='lg:border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view} />
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1 className='text-xl lg:text-base'>Size</h1></button>
            <div className={`${view ? "lg:h-[500px] py-3" : "lg:h-0"} h-auto lg:text-sm overflow-hidden transition-all grid lg:grid-cols-3 md:grid-cols-7 grid-cols-5 md:w-[50%] gap-2`}>
                <button className='py-1 border-2 border-black rounded-md'>2.5</button>
                <button className='py-1 border-2 border-black rounded-md'>3</button>
                <button className='py-1 border-2 border-black rounded-md'>3.5</button>
                <button className='py-1 border-2 border-black rounded-md'>4</button>
                <button className='py-1 border-2 border-black rounded-md'>4.5</button>
                <button className='py-1 border-2 border-black rounded-md'>5</button>
                <button className='py-1 border-2 border-black rounded-md'>5.5</button>
                <button className='py-1 border-2 border-black rounded-md'>6</button>
                <button className='py-1 border-2 border-black rounded-md'>6.5</button>
                <button className='py-1 border-2 border-black rounded-md'>7</button>
                <button className='py-1 border-2 border-black rounded-md'>7.5</button>
                <button className='py-1 border-2 border-black rounded-md'>8</button>
                <button className='py-1 border-2 border-black rounded-md'>8.5</button>
                <button className='py-1 border-2 border-black rounded-md'>9</button>
                <button className='py-1 border-2 border-black rounded-md'>9.5</button>
                <button className='py-1 border-2 border-black rounded-md'>10</button>
                <button className='py-1 border-2 border-black rounded-md'>10.5</button>
                <button className='py-1 border-2 border-black rounded-md'>11</button>
                <button className='py-1 border-2 border-black rounded-md'>11.5</button>
                <button className='py-1 border-2 border-black rounded-md'>12</button>
                <button className='py-1 border-2 border-black rounded-md'>13</button>
                <button className='py-1 border-2 border-black rounded-md'>13.5</button>
                <button className='py-1 border-2 border-black rounded-md'>14</button>
                <button className='py-1 border-2 border-black rounded-md'>14.5</button>
                <button className='py-1 border-2 border-black rounded-md'>15</button>
                <button className='py-1 border-2 border-black rounded-md'>15.5</button>
                <button className='py-1 border-2 border-black rounded-md'>16</button>
                <button className='py-1 border-2 border-black rounded-md'>17</button>
            </div>
        </div>
    )
}


const Colors = () => {
    const [view, setView] = useState(false);
    const [selectedColor, setColor] = useState(-1);
    const colors = ["black", "blue-500", "rose-900", "green-500", "amber-500", "pink-500", "violet-500", "red-500", "white", "yellow-500"]
    return (
        <div className='lg:border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view} />
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1 className='text-xl lg:text-base'>Colors</h1></button>
            <div className={`${view ? "lg:h-[95px] py-3 px-2" : "lg:h-0"} h-auto lg:text-sm overflow-hidden transition-all grid grid-cols-5 gap-2`}>
                {
                    colors.map((color, index) => {
                        return (
                            <button onClick={() => { setColor(index) }} className={`bg-${color} w-7 aspect-square rounded-md ${index === selectedColor ? "outline outline-offset-2" : "outline-none"}`} />
                        )
                    })
                }
            </div>
        </div>
    )
}



const ShoesHeight = () => {
    const [view, setView] = useState(false);
    return (
        <div className='lg:border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view} />
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1 className='text-xl lg:text-base'>Shoes Height</h1></button>
            <ul className={`${view ? "lg:h-[90px]" : "lg:h-0"} h-auto lg:text-sm overflow-hidden transition-all`}>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Low Top</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Mid Top</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>High Top</span>
                </li>
            </ul>
        </div>
    )
}



const Brand = () => {
    const [view, setView] = useState(false);
    return (
        <div className='lg:border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view} />
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1 className='text-xl lg:text-base'>Brand</h1></button>
            <ul className={`${view ? "lg:h-[110px]" : "lg:h-0"} h-auto lg:text-sm overflow-hidden transition-all`}>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Nike Sportswear</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Jordan</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>Nike By You</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>NikeLab</span>
                </li>
                <li className='space-x-3 flex items-center'>
                    <input className='w-4 aspect-square' type="checkbox" />
                    <span>ACG</span>
                </li>
            </ul>
        </div>
    )
}


const Arrow = ({ view }) => {
    return (
        <div className={`absolute ${view ? "top-5" : "top-[50%] -translate-y-[50%]"} right-0  lg:flex scale-[0.70] hidden`}>
            <div className={`w-3 h-[1.5px] bg-black ${view ? "-rotate-45" : "rotate-45"} translate-x-[2px] transition-all`} />
            <div className={`w-3 h-[1.5px] bg-black ${view ? "rotate-45" : "-rotate-45"} -translate-x-[2px] transition-all`} />
        </div>
    )
}