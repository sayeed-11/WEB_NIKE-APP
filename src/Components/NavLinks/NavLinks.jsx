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
    featureHeight,
    setBar
}) => {
    return (
        <div className={`pages text-white lg:text-black absolute md:static uppercase md:capitalize bg-black/[0.7] md:bg-black lg:bg-transparent w-full md:w-auto h-screen md:h-auto ${isBar ? "right-[-100%]" : "right-[0%]"} md:right-0 transition-all`}>
            <ul className='flex flex-col md:flex-row  md:justify-around gap-y-5 h-full font-nike w-[100%] md:w-auto ml-auto md:ml-0 bg-black md:bg-transparent pt-20 md:pt-0 pl-10 md:pl-0 capitalize'>
                <Featured setHeight={setFeatureMenHeight} featureHeight={featureHeight} setBar={setBar} />
                <Men setHeight={setMenHeight} menHeight={menHeight} setBar={setBar}/>
                <Women setHeight={setWomenHeight} womenHeight={womenHeight} setBar={setBar}/>
                <Kids setHeight={setKidsHeight} kidsHeight={kidsHeight} setBar={setBar}/>
            </ul>
        </div>
    )
}

export default NavLinks


const Kids = ({ setHeight, kidsHeight, setBar }) => {
    return (
        <li
        onClick={() => {
            setBar(true)
        }}
            onMouseEnter={() => {
                setHeight(true);
            }}
            onMouseLeave={() => {
                setHeight(false)
            }}
            className='flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm '>
            <KidsContent height={kidsHeight} />
            {/* <i className="fa-solid fa-file md:hidden  mr-2" /> */}
            <i className="fa-solid fa-baby md:hidden  mr-2" />
            <button>Kids</button>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}

const Women = ({ setHeight, womenHeight, setBar }) => {
    const navigate = useNavigate();
    return (
        <li
            onClick={() => {
                navigate("/ShoesMainPage", { state: { JaordanShoes: jordanShoes } })
                setHeight(false)
                setBar(true)
            }}
            onMouseEnter={() => {
                setHeight(true);
            }}
            onMouseLeave={() => {
                setHeight(false)
            }}
            className='flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm '>
            <WomenContent height={womenHeight} />
            {/* <i className="fa-solid fa-blog md:hidden  mr-2" /> */}
            <i className="fa-solid fa-venus md:hidden  mr-2" />
            <button>Women</button>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}

const Men = ({ setHeight, menHeight, setBar }) => {
    const navigate = useNavigate();
    return (
        <li
            onClick={() => {
                navigate("/ShoesMainPage", { state: { JaordanShoes: JaordanShoes } })
                setHeight(false)
                setBar(true)
            }}
            onMouseEnter={() => {
                setHeight(true);
            }}
            onMouseLeave={() => {
                setHeight(false)
            }}
            className={`flex  items-baseline md:items-center gap-x-1 text-xl md:text-sm `}>
            <MenContent height={menHeight} />
            {/* <i className="fa-brands fa-shopify md:hidden  mr-2" /> */}
            <i className="fa-solid fa-mars md:hidden  mr-2" />
            <button>Men</button>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}

const Featured = ({ setHeight, featureHeight, setBar }) => {
    return (
        <li
            onMouseEnter={() => {
                setHeight(true);
                setBar(true)
            }}
            onMouseLeave={() => {
                setHeight(false)
            }}
            className='flex items-baseline md:items-center gap-x-1 text-xl md:text-sm'>
            <FeatureContent height={featureHeight} />
            <i className="fa-solid fa-house md:hidden  mr-2" />
            <button>Featured</button>
            <i className="fa-solid fa-angle-right md:rotate-90 text-xs" />
        </li>
    )
}
