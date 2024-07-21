import React, { useState } from 'react'
import AllShoes from './AllShoes'
import FilterBar from './filterBar/FilterBar'
import NavigationBar from '../NavigationBar'
import Footer from '../Footer'
import FilterIcon from '../../icons/FilterIcon'
import ShortDown from '../../icons/ShortDown'

// import { JaordanShoes } from '../../data/MenShoes/Jordan'

import { useLocation } from 'react-router-dom'
// import { shoes } from '../../data/MenShoes/Shoes'

const ShoesMainPage = () => {
    const innerWidth = window.innerWidth;
    const [hasFilter, setFilterValue] = useState(innerWidth < 1024 ? true : false);
    const [isShorted, setShortedvalue] = useState(false);
    const [headerType, setHeader] = useState("All Shoes")

    const location = useLocation();
    const Shoes = location.state?.JaordanShoes;

    console.log(Shoes);

    const [shadowColor, setShadowColor] = useState("slate-100");
    const [textSize, setTextSize] = useState("text-xl sm:text-3xl")
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 10) {
            setShadowColor("shadow-md");
            setTextSize("text-[0.95rem] sm:text-xl")
        }
        else{
            setShadowColor("shadow-none")
            setTextSize("text-xl sm:text-3xl")
        }
    })


    return (
        <div className='min-h-screen w-full bg-slate-100 box-border flex flex-col pt-[70px] space-y-5'>
            <NavigationBar />
            <div className={`sticky top-[56px] ${shadowColor} z-40 bg-slate-100 flex justify-between transition-all duration-[0.3s] ${hasFilter ? "pl-5 sm:pl-10" : "pl-5"} pr-5 lg:pr-10 py-3 font-nike`}>
                <h1 className={`${textSize} transition-all text-lime-600`}>{headerType}</h1>
                <div className='space-x-3 sm:space-x-10'>
                    <button onClick={() => {
                        setFilterValue(!hasFilter)
                    }}>
                        <div className='flex gap-x-2'>
                            <span>{hasFilter ? "Show" : "Hide"} Filter</span>
                            <FilterIcon />
                        </div>
                    </button>
                    <button className='relative space-y-3'>
                        <div className='flex gap-x-3'>
                        <span onClick={() => { setShortedvalue(!isShorted) }}>Short By</span>
                        <ShortDown/>
                        </div>
                        {isShorted &&
                            <div className='absolute bg-white w-[300%] right-0 flex flex-col justify-start items-start px-5 py-5 gap-y-2'>
                                <button>Featured</button>
                                <button>Newest</button>
                                <button>Price : Low-Hogh</button>
                                <button>Price : Hogh-Low</button>
                                {<div className='w-4 aspect-square bg-white absolute right-5 -top-[5%] rotate-45' />}
                            </div>}
                    </button>
                </div>
            </div>
            <div className='relative lg:flex pb-[50px] sm:pb-[450px] justify-between'>
                <FilterBar hasFilter={hasFilter} setHeader={setHeader} headerType={headerType} />
                <AllShoes hasFilter={hasFilter} JaordanShoes={Shoes} />
            </div>
            <Footer />
        </div>
    )
}

export default ShoesMainPage