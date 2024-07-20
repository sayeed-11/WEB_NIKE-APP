import React from 'react'
import MenContent from '../NavLinkInfo/MenContent'
import FeatureContent from '../NavLinkInfo/FeatureContent'
import WomenContent from '../NavLinkInfo/WomenContent'
import KidsContent from '../NavLinkInfo/KidsContent'
import { jordanShoes } from '../../data/WomenShoes/Jordan'
import { JaordanShoes } from '../../data/MenShoes/Jordan'
import { useNavigate } from 'react-router-dom'

const NavLinks = ({
    setFeatureMenHeight,
    setMenHeight,
    setWomenHeight,
    setKidsHeight,
    isBar,
    menHeight,
    womenHeight,
    kidsHeight,
    featureHeight
}) => {
    return (
        <div className={`pages text-white lg:text-black absolute md:static uppercase md:capitalize bg-black/[0.7] md:bg-black lg:bg-transparent w-full md:w-auto h-screen md:h-auto ${isBar ? "right-[-100%]" : "right-[0%]"} md:right-0 transition-all`}>
            <ul className='flex flex-col md:flex-row  md:justify-around gap-y-5 h-full font-nike w-[70%] md:w-auto ml-auto md:ml-0 bg-black md:bg-transparent pt-20 md:pt-0 pl-10 md:pl-0'>
                <Featured setHeight={setFeatureMenHeight} featureHeight={featureHeight} />
                <Men setHeight={setMenHeight} menHeight={menHeight} />
                <Women setHeight={setWomenHeight} womenHeight={womenHeight} />
                <Kids setHeight={setKidsHeight} kidsHeight={kidsHeight} />
            </ul>
        </div>
    )
}

export default NavLinks


const Kids = ({ setHeight, kidsHeight }) => {
    return (
        <li
            onMouseEnter={() => {
                setHeight(true);
            }}
            onMouseLeave={() => {
                setHeight(false)
            }}
            className='flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm '>
            <KidsContent height={kidsHeight} />
            <i className="fa-solid fa-file md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
            <a href="/#">Kids</a>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}

const Women = ({ setHeight, womenHeight }) => {
    const navigate = useNavigate();
    return (
        <li
            onClick={() => {
                navigate("/ShoesMainPage", { state: { JaordanShoes: jordanShoes } })
                setHeight(false)
            }}
            onMouseEnter={() => {
                setHeight(true);
            }}
            onMouseLeave={() => {
                setHeight(false)
            }}
            className='flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm '>
            <WomenContent height={womenHeight} />
            <i className="fa-solid fa-blog md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
            <button href="">Women</button>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}

const Men = ({ setHeight, menHeight }) => {
    const navigate = useNavigate();
    return (
        <li
            onClick={() => {
                navigate("/ShoesMainPage", { state: { JaordanShoes: JaordanShoes } })
                setHeight(false)
            }}
            onMouseEnter={() => {
                setHeight(true);
            }}
            onMouseLeave={() => {
                setHeight(false)
            }}
            className={`flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm `}>
            <MenContent height={menHeight} />
            <i className="fa-brands fa-shopify md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
            <button>Men</button>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}

const Featured = ({ setHeight, featureHeight }) => {
    return (
        <li
            onMouseEnter={() => {
                setHeight(true);
            }}
            onMouseLeave={() => {
                setHeight(false)
            }}
            className='flex items-baseline md:items-center gap-x-1 text-xl md:text-sm'>
            <FeatureContent height={featureHeight} />
            <i className="fa-solid fa-house md:hidden text-[2rem] w-[50px] border-r-2 border-white mr-2" />
            <a href="/#">Featured</a>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}
