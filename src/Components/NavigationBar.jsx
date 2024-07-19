import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import NavLinks from './NavLinks/NavLinks';
import Account from './NavLinks/Account';


const NavigationBar = () => {
    const [isBar, setBar] = useState(true);
    const [hasSearch, setSearchDecision] = useState(false);
    const [value, setValue] = useState("");
    const navigate = useNavigate()
    const { pathname } = useLocation();
    
    const [menHeight, setMenHeight] = useState(false)
    const [featureHeight, setFeatureMenHeight] = useState(false)
    const [womenHeight, setWomenHeight] = useState(false)
    const [kidsHeight, setKidsHeight] = useState(false)

    const [acHeight, setAcHeignt] = useState(false);

    const {
        cartData,

    } = useSelector(state => state.productInCart)

    return (
        <nav className=' flex justify-between sm:grid grid-cols-2 md:grid-cols-3 fixed top-0 max-w-[1350px] w-full backdrop-blur-lg z-50'>

            <div onClick={() => {navigate('/')}} className="logo  flex items-center justify-start md:justify-center z-50 w-full bg-black lg:bg-transparent px-3">
                <svg className={`lg:fill-black fill-white w-16 h-10`} xmlns="http://www.w3.org/2000/svg" viewBox="135.5 361.38 1000 356.39">
                    <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z" />
                </svg>
            </div>

            {<NavLinks
                setMenHeight={setMenHeight}
                setFeatureMenHeight = {setFeatureMenHeight}
                setWomenHeight = {setWomenHeight}
                setKidsHeight = {setKidsHeight}
                menHeight={menHeight}
                featureHeight = {featureHeight}
                womenHeight={womenHeight}
                kidsHeight={kidsHeight}
                isBar={isBar}
            />}

            <div className={`buttons flex justify-center gap-x-2 text-white z-50 bg-black py-1 ${hasSearch ? "translate-x-36" : "translate-x-0"}  transition-all px-3 py-2 relative`}>

                <button className='relative'>
                    <div className={`absolute ${hasSearch ? "w-[800%] md:w-[1350%]" : "w-[0%]"} flex bg-slate-100 ${hasSearch ? "h-[100%]" : "h-[0%]"} ${hasSearch ? "right-[105%] top-[0%]" : "right-[50%] top-[50%]"} ${hasSearch ? "opacity-1" : "opacity-0"} rounded-md px-[1.5px] py-[1.5px] border-[1.5px] border-black/[0.5] overflow-hidden transition-all shadow-md`}>
                        <input value={value} onChange={(e) => { setValue(e.value); console.log(e.target.value); }} className='w-full text-black/[0.7] px-2 text-sm font-text font-semibold outline-none rounded-md mr-2 bg-transparent' type="text" />
                        <button onClick={() => { setValue("") }} className='bg-black/[0.5] text-white px-4 rounded-md text-xs font-nike'>Search</button>
                    </div>
                    {!hasSearch ?
                        <i onClick={() => { setSearchDecision(!hasSearch) }} className="fa-solid fa-magnifying-glass bg-white/[0.2] p-3 rounded-md" /> :
                        <i onClick={() => { setSearchDecision(!hasSearch) }} className="fa-solid fa-xmark bg-white/[0.2] px-3.5 py-3 rounded-md" />
                    }
                </button>
                <button onClick={() => {
                    const path = '/CartList'
                    pathname !== path ? navigate(path) : console.log(window.location.hostname);
                }} className='relative'>
                    <i className="fa-solid fa-bag-shopping bg-white/[0.2] p-3 rounded-md" />
                    {
                        cartData.length > 0 && <Dot />
                    }
                </button>

                <button
                    onMouseEnter={() => { setAcHeignt(true) }}
                    onMouseLeave={() => { setAcHeignt(false) }}
                    onClick={() => {
                        const path = '/MyAccount'
                        pathname !== path ? navigate(path) : console.log(window.location.hostname);
                    }}
                >
                    {<Account acHeight={acHeight} setAcHeignt={setAcHeignt}/>}
                    <i className="fa-solid fa-user bg-white/[0.2] p-3 rounded-md" />
                </button>

                <button onClick={() => { setBar(!isBar) }}><i className="fa-solid fa-bars bg-lime-500 p-3 rounded-md md:hidden" /></button>
            </div>
        </nav>
    )
}

export default NavigationBar

const Dot = () => {
    return (
        <div className='absolute w-2 h-2 bg-red-500 top-2 right-2 rounded-full' />
    )
}
