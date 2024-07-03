import React from 'react'
import shoesLogo from '../asset/shoes2.png'

const Discount = () => {
    return (
        <div className='relative bg-slate-100 py-20'>
            <h1 className='absolute font-nike italic text-[4rem] sm:text-[7rem] top-0 left-0 sm:left-10 font-bold text-black/[0.03] -translate-y-10 sm:-translate-y-20'>DISCOUNT</h1>
            <div className='w-[95%] lg:w-[90%] bg-black ml-auto text-white grid grid-cols-1 sm:grid-cols-2 rounded-ss-xl rounded-es-xl p-5 relative'>
                <h1 className='absolute font-nike italic text-[5rem] sm:text-[10rem] font-semibold left-10 -top-5 sm:-top-10  text-white/[0.1]'>NIKE</h1>
                <h1 className='absolute font-nike italic text-[5rem] sm:text-[10rem] font-semibold right-10 -bottom-5 sm:-bottom-10  text-white/[0.1]'>AIR</h1>
                <div className='flex flex-col justify-center sm:items-center items-start gap-y-3 sm:gap-y-0'>
                    <div className='flex items-baseline gap-x-3'>
                        <div className='h-1 w-10 lg:w-20 bg-yellow-500' />
                        <h1 className='text-[1.5rem] lg:text-[3rem] font-nike text-yellow-500'>Spring Sale</h1>
                    </div>
                    <h1 className='font-nike text-[2rem] sm:text-[3rem] lg:text-[4rem] italic flex gap-x-3'><p className='bg-yellow-500 rounded-full text-[0.8rem] sm:text-[1.5rem] sm:min-w-20 min-w-12 max-h-12 sm:max-h-20 aspect-square grid place-items-center'>50%</p> <p>SALE OFF</p></h1>
                    <button className=' font-text text-white text-xs'>
                        <div className='bg-yellow-500 px-6 py-3 rounded-3xl space-x-3'>
                            <span>Shop Now</span>
                            <i className="fa-solid fa-arrow-right -rotate-45" />
                        </div>
                    </button>
                </div>
                <div className=' flex justify-center sm:block items-start  rounded-ee-full border-r-8 border-lime-400'>
                    <img className='w-[30%] sm:w-[70%] scale-[3] sm:scale-[1.7]' src={shoesLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Discount