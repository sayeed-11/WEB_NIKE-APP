import React from 'react'

const NavLinks = ({
    setHeight,
    isBar
}) => {
    return (
        <div className={`pages text-white lg:text-black absolute md:relative uppercase md:capitalize bg-black/[0.7] md:bg-black lg:bg-transparent w-full md:w-auto h-screen md:h-auto ${isBar ? "right-[-100%]" : "right-[0%]"} md:right-0 transition-all`}>
            <ul className='flex flex-col md:flex-row  md:justify-around gap-y-5 h-full font-nike md:font-text md:font-bold w-[70%] md:w-auto ml-auto md:ml-0 bg-black md:bg-transparent pt-20 md:pt-0 pl-10 md:pl-0'>
                <Home/>
                <Shop setHeight={setHeight} />
                <Blogs />
                <Pages />
            </ul>
        </div>
    )
}

export default NavLinks


const Pages = () => {
    return (
        <li className='flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm'>
            <i className="fa-solid fa-file md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
            <a href="/#">Pages</a>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}

const Blogs = () => {
    return (
        <li className='flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm'>
            <i className="fa-solid fa-blog md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
            <a href="/#">Blogs</a>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}

const Shop = ({ setHeight }) => {
    return (
        <li
            onMouseEnter={() => {
                console.log("Mouse enter");
                setHeight(true);
            }}
            onMouseLeave={() => {
                console.log("Mouse Leave");
                setHeight(false)
            }}
            className={`flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm relative`}>
            <i className="fa-brands fa-shopify md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
            <a href="/#">Shop</a>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}

const Home = () => {
    return (
        <li className='flex items-baseline md:items-center gap-x-1 text-xl md:text-sm'>
            <i className="fa-solid fa-house md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
            <a href="/#">Home</a>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}