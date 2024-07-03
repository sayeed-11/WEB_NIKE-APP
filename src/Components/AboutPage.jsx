import React from 'react'
import running_man from '../asset/running_man.png'

const AboutPage = () => {
    return (
        <div className='w-full bg-black flex lg:flex-row flex-col'>

            <div className='w-full h-auto lg:w-[33.33%] bg-black relative flex justify-end lg:justify-center items-center py-20 sm:py-10 md:py-16  lg:py-0 px-0 lg:px-0'>
                <div className='w-full absolute h-20 top-0 lg:lg:top-0 lg:-right-1 flex justify-end '>
                    <div className='triangle h-full w-[30%] rotate-180 bg-slate-100'></div>
                </div>
                <h1 className='text-[5rem] sm:text-[10rem] lg:text-[8rem] text-zinc-900 lg:-rotate-90 font-nike italic -translate-x-[20%] lg:-translate-x-36 -translate-y-10 sm:-translate-y-0 font-bold'>ABOUT</h1>
               <div className='absolute w-[30%] lg:w-[70%] aspect-square bg-yellow-500 right-[40%] sm:right-[30%] bottom-[-10%] sm:bottom-[-20%] lg:bottom-[20%] lg:right-[-30%] z-40 rounded-full'>
                    <img className='scale-[3.5] sm:scale-[3] lg:scale-[2]' src={running_man} alt="" />
               </div>
            </div>






            <div className='w-full h-auto bg-slate-100 lg:w-[66.66%] pt-40 sm:pt-60 lg:pt-20 flex flex-col lg:justify-center  items-end px-5 sm:px-20 space-y-5 pb-10 lg:pb-40 relative'>


                <div>
                    <div className='flex items-baseline gap-x-3 justify-end'>
                        <div className='w-28 h-[3px] bg-yellow-500 rounded-3xl' />
                        <h1 className='font-nike text-xl sm:text-4xl text-yellow-500'>Sports Shoes</h1>
                    </div>
                    <h1 className='font-nike text-[2.7rem] sm:text-[4rem] md:text-[4rem] italic font-semibold -mt-2 sm:-mt-6 text-right'>FASHION STYLE</h1>
                </div>
                <p className='text-slate-500 font-text pl-1 sm:pl-40 text-right text-sm sm:text-sm'>Distinctively integrate interoperable total linkage and covalent processes.Seamlessly generate optimal</p>
                <div className='space-x-5'>
                    <button className=' font-text text-white text-xs'>
                        <div className='bg-yellow-500 px-6 py-3 rounded-3xl space-x-3'>
                            <span>Discover More</span>
                            <i className="fa-solid fa-arrow-right -rotate-45" />
                        </div>
                    </button>
                    
                </div>



            </div>


        </div>
    )
}

export default AboutPage