import React, { useState } from 'react'
import shoe_logo1 from '../asset/shoes1.png'
import shoe_logo2 from '../asset/shoes2.png'
import shoe_logo3 from '../asset/shoes3.png'


const HomePage = (props) => {
    const{isView, setView} = props;
    const [defaultImage, setDefault] = useState(shoe_logo2);
    return (
        <div className='w-full lg:min-h-screen h-auto bg-slate-100 flex lg:flex-row flex-col-reverse overflow-x-hidden'>
            <div className='w-full bg-slate-100 lg:w-[66.66%] pt-20 flex flex-col justify-center px-5 sm:px-20 space-y-5 pb-40 relative'>
                <div>
                    <div className='flex items-baseline gap-x-3'>
                        <div className='w-28 h-[3px] bg-lime-500 rounded-3xl' />
                        <h1 className='font-nike text-xl sm:text-4xl text-lime-500'>Design & Quality</h1>
                    </div>
                    <h1 className='font-nike text-[4rem] sm:text-[6rem] italic font-semibold -mt-4 sm:-mt-10'>AIR MAX</h1>
                </div>
                <p className='text-slate-500 font-text pr-5 sm:pr-20'>Distinctively integrate interoperable total linkage and covalent processes.Seamlessly generate optimal</p>
                <div className='space-x-5'>
                    <button className=' font-text text-white text-xs active:scale-[0.95]'>
                        <div className='bg-lime-500 px-6 py-3 rounded-3xl space-x-3'>
                            <span>Shop Now</span>
                            <i className="fa-solid fa-arrow-right -rotate-45" />
                        </div>
                    </button>
                    <button onClick={() => {setView(!isView)}} className=' font-text text-white text-xs active:scale-[0.95]'>
                        <div className='bg-white text-slate-500 px-6 py-3 rounded-3xl space-x-3'>
                            <span>See Details</span>
                            <i className="fa-solid fa-arrow-right" />
                        </div>
                    </button>
                </div>
                <div className='absolute bottom-12 w-[70%] text-slate-500'>
                    <h1 className='text-center font-nike uppercase'>Scroll to explore</h1>
                    <h1 className='text-center scale-[1.5]'>I</h1>
                </div>
            </div>


            <div className='w-[100%] h-auto lg:w-[33.33%] bg-black relative flex justify-end lg:justify-center items-center py-20 sm:py-10 md:py-16  lg:py-0 px-10 lg:px-0'>
                <h1 className='text-[7rem] sm:text-[12rem] lg:text-[10rem] text-zinc-900 lg:-rotate-90 font-nike italic translate-y-10 font-bold'>NIKE</h1>
                <img className='absolute scale-[0.7] sm:scale-[0.5] md:scale-[0.5] lg:w-auto lg:scale-[1.2] left-[-16%] lg:left-[-50%] z-40' src={defaultImage} alt="" />
                <div className='w-full absolute h-20 -bottom-1 sm:-bottom-2 lg:-bottom-[0px] overflow-hidden   -left-1'>
                    <div className='triangle h-full w-[30%] bg-slate-100 border-4 border-slate-100'></div>
                </div>
                <div className='absolute flex gap-x-3 left-[30%] lg:left-[-25%] bottom-[-10%] md:bottom-[-6%] lg:bottom-8 items-end'>
                    <button onClick={() => { setDefault(shoe_logo3) }} className={`bg-white rounded-full ${defaultImage === shoe_logo3 ? "border-2 border-gray-500" : ""}`}>
                        <img className={`${defaultImage === shoe_logo3 ? "max-w-[70px]" : "max-w-[50px]"} sm:${defaultImage === shoe_logo3 ? "max-w-[100px]" : "max-w-[60px]"} aspect-square p-3 transition-all`} src={shoe_logo3} alt="" />
                    </button>
                    <button onClick={() => { setDefault(shoe_logo2) }} className={`bg-white rounded-full ${defaultImage === shoe_logo2 ? "border-2 border-lime-400" : ""}`}>
                        <img className={`${defaultImage === shoe_logo2 ? "max-w-[70px]" : "max-w-[50px]"} sm:${defaultImage === shoe_logo2 ? "max-w-[100px]" : "max-w-[60px]"} aspect-square p-3 transition-all`} src={shoe_logo2} alt="" />
                    </button>
                    <button onClick={() => { setDefault(shoe_logo1) }} className={`bg-white rounded-full ${defaultImage === shoe_logo1 ? "border-2 border-blue-400" : ""}`}>
                        <img className={`${defaultImage === shoe_logo1 ? "max-w-[70px]" : "max-w-[50px]"} sm:${defaultImage === shoe_logo1 ? "max-w-[100px]" : "max-w-[60px]"} aspect-square p-3 transition-all`} src={shoe_logo1} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage