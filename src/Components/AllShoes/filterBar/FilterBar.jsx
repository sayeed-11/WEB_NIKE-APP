import React, { useState } from 'react'

const productType = ["All Shoes", "Athletic", "Authentic", "Lather", "Canvas"];

const FilterBar = ({ hasFilter, setHeader, headerType }) => {
    const innerHeight = window.innerHeight
    return (
        <div style={{ height: (innerHeight - 110) }} className={`lg:block hidden  ${hasFilter ? "w-[0%] overflow-hidden px-0" : "overflow-y-auto w-[20%] px-5"} sticky top-[115px] space-y-5 font-nike transition-all`}>
            <Types setHeader={setHeader} headerType={headerType} />
            <div className='flex flex-col'>
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
        <div className='flex flex-col justify-start items-start'>
            {
                productType.map((type, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => { setHeader(type) }}
                            className={`${type === headerType ? "text-black" : "text-black/[0.5]"}`}
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
        <div className='border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view}/>
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1>Gender</h1></button>
            <ul className={`${view ? "h-[90px]" : "h-0"} text-sm overflow-hidden transition-all`}>
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
        <div className='border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view}/>
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1>Shop By Price</h1></button>
            <ul className={`${view ? "h-[110px]" : "h-0"} text-sm overflow-hidden transition-all `}>
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
        <div className='border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view}/>
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1>Sale & Offer</h1></button>
            <ul className={`${view ? "h-[30px]" : "h-0"} text-sm overflow-hidden transition-all`}>
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
        <div className='border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view}/>
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1>Size</h1></button>
            <div className={`${view ? "h-[500px] py-3" : "h-0"} text-sm overflow-hidden transition-all grid grid-cols-3 gap-2`}>
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
        <div className='border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view}/>
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1>Colors</h1></button>
            <div className={`${view ? "h-[95px] py-3 px-2" : "h-0"} text-sm overflow-hidden transition-all grid grid-cols-5 gap-2`}>
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
        <div className='border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view}/>
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1>Shoes Height</h1></button>
            <ul className={`${view ? "h-[90px]" : "h-0"} text-sm overflow-hidden transition-all`}>
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
        <div className='border-t-[1.5px] border-slate-400 relative'>
            <Arrow view={view}/>
            <button className='w-full text-left py-3' onClick={() => { setView(!view) }}><h1>Brand</h1></button>
            <ul className={`${view ? "h-[110px]" : "h-0"} text-sm overflow-hidden transition-all`}>
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


const Arrow = ({view}) => {
    return (
        <div className={`absolute ${view ? "top-5" : "top-[50%] -translate-y-[50%]"} right-0  flex scale-[0.70]`}>
            <div className={`w-3 h-[1.5px] bg-black ${view ? "-rotate-45" : "rotate-45"} translate-x-[2px] transition-all`} />
            <div className={`w-3 h-[1.5px] bg-black ${view ? "rotate-45" : "-rotate-45"} -translate-x-[2px] transition-all`} />
        </div>
    )
}