import React from 'react'
import { feedbacks } from '../data/feedbacks'

const Feedback = () => {
    return (
        <div className='relative bg-slate-100 w-full py-10 md:py-20'>
            <h1 className='absolute font-nike italic text-[4rem] sm:text-[7rem] top-0 right-0 sm:right-10 font-bold text-black/[0.03]'>FEEDBACK</h1>
            <h1 className='font-nike text-[1.5rem] md:text-[2.5rem] font-bold italic pl-5 sm:pl-10 lg:px-20'><span>CUSTOMER'S</span> <span className='text-lime-500 text-[2rem] md:text-[3rem]'>FEEDBACK</span></h1>
            <div className='flex  gap-x-2 overflow-x-auto py-5 pl-5 sm:pl-10 lg:pl-20'>
                {
                    feedbacks.map((fb, i) => {
                        return (
                            <div key={fb.id} className='min-w-[250px] flex flex-col justify-between gap-y-5 bg-white rounded-lg overflow-hidden shadow-md mr-3'>
                                <p className='bg-black rounded-ee-[6rem] h-[100%] p-2 border-b-4 border-lime-500 shadow-xl '>
                                    <span className='text-lime-500 font-nike italic scale-[5]'>"</span>
                                    <span className='text-sm  text-white font-text font-semibold'>{fb.feedback}</span>
                                    <span className='text-lime-500 font-nike italic'>"</span>
                                </p>
                                <div className='flex items-center gap-x-5 p-3'>
                                    <div className='bg-lime-500 rounded-full p-[1.5px] shadow-md'>
                                        <img className='w-16 aspect-square object-cover rounded-full' src={fb.img} alt="" />
                                    </div>
                                    <h1 className='font-nike'>{fb.name}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Feedback