import React, { useState } from 'react'
import nike_logo from '../asset/nike-logo.png'

const NavigationBar = () => {
    const [isBar, setBar] = useState(true);
    const [hasSearch, setSearchDecision] = useState(false);
    const [value, setValue] = useState("");
    return (
        <nav className=' grid grid-cols-2 md:grid-cols-3 fixed top-0 max-w-[1350px] w-full backdrop-blur-lg z-50'>
            <div className="logo  flex items-center justify-start md:justify-center z-50 bg-transparent md:bg-black lg:bg-transparent">
                <img className='w-[90px] h-[55px] object-cover' src={nike_logo} alt="" />
            </div>
            <div className={`pages text-white lg:text-black absolute md:relative uppercase md:capitalize bg-black/[0.7] md:bg-black lg:bg-transparent w-full md:w-auto h-screen md:h-auto ${isBar ? "right-[-100%]" : "right-[0%]"} md:right-0 transition-all`}>
                <ul className='flex flex-col md:flex-row  md:justify-around gap-y-5 h-full font-nike md:font-text md:font-bold w-[70%] md:w-auto ml-auto md:ml-0 bg-black md:bg-transparent pt-20 md:pt-0 pl-10 md:pl-0'>
                    <li className='flex items-baseline md:items-center gap-x-1 text-xl md:text-sm'>
                        <i className="fa-solid fa-house md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
                        <a href="#">Home</a>
                        <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
                    </li>
                    <li className='flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm'>
                        <i className="fa-brands fa-shopify md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
                        <a href="#">Shop</a>
                        <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
                    </li>
                    <li className='flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm'>
                        <i className="fa-solid fa-blog md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
                        <a href="#">Blogs</a>
                        <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
                    </li>
                    <li className='flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm'>
                        <i className="fa-solid fa-file md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
                        <a href="#">Pages</a>
                        <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
                    </li>
                </ul>
            </div>
            <div className={`buttons flex justify-center gap-x-2 text-white z-50 bg-black ${hasSearch ? "translate-x-36" : "translate-x-0"}  transition-all`}>
                <button className='relative'>
                    <div  className={`absolute ${hasSearch ? "w-[800%] md:w-[1350%]" : "w-[0%]"} flex bg-slate-100 ${hasSearch ? "h-[75%]" : "h-[0%]"} ${hasSearch ? "right-[105%] top-[15%]" : "right-[50%] top-[50%]"} ${hasSearch ? "opacity-1" : "opacity-0"} rounded-full px-[1.5px] py-[1.5px] border-[1.5px] border-slate-500 overflow-hidden transition-all shadow-md`}>
                        <input value={value} onChange={(e) => {setValue(e.value); console.log(e.target.value);} } className='w-full text-black/[0.7] px-2 text-sm font-text font-semibold outline-none rounded-full mr-2 bg-transparent' type="text" />
                        <button onClick={() =>{setValue("")}} className='bg-black/[0.7] text-white px-4 rounded-full text-xs font-nike'>Search</button>
                    </div>
                    { !hasSearch ? 
                    <i  onClick={() => {setSearchDecision(!hasSearch)}} className="fa-solid fa-magnifying-glass bg-white/[0.2] p-3 rounded-full" /> :
                    <i  onClick={() => {setSearchDecision(!hasSearch)}} className="fa-solid fa-xmark bg-white/[0.2] px-3.5 py-3 rounded-full" />
                    }
                </button>
                <button><i className="fa-solid fa-bag-shopping bg-white/[0.2] p-3 rounded-full" /></button>
                <button><i className="fa-solid fa-user bg-white/[0.2] p-3 rounded-full" /></button>
                <button onClick={() => { setBar(!isBar) }}><i className="fa-solid fa-bars bg-yellow-500 p-3 rounded-md md:hidden" /></button>
                {/* <button className='flex flex-col justify-center items-center gap-y-1 bg-red-500 px-5'>
                    <div className='w-5 h-[1.6px] bg-white' />
                    <div className='w-3 h-[1.6px] bg-white' />
                    <div className='w-1 h-[1.6px] bg-white' />

                </button> */}
            </div>
        </nav>
    )
}

export default NavigationBar
