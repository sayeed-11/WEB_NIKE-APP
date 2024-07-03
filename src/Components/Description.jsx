import React from 'react'
import sole from '../asset/sole.png'
import weight from '../asset/weight.png'

import nike_shoe1 from '../asset/nike_shoe (1).jpg';
import nike_shoe2 from '../asset/nike_shoe (2).jpg';
import nike_shoe3 from '../asset/nike_shoe (3).jpg';

const Description = () => {
    return (
        <div className='relative bg-slate-100 pl-2 sm:pl-10 flex flex-col lg:flex-row gap-y-10 py-5 sm:py-0'>
            <h1 className='absolute font-nike italic text-[2.5rem] sm:text-[5rem] top-0 left-0 sm:left-10 font-bold text-black/[0.03]'>WHY CHOOSE US</h1>


            <div className='w-full h-auto lg:w-[66.66%] pt-0 sm:pt-12 lg:pt-20 flex flex-col lg:justify-center  items-start px-5 lg:px-20 space-y-5 pb-10 lg:pb-10 relative'>


                <div>
                    <div className='flex items-baseline gap-x-3 justify-end'>
                        <div className='w-28 h-[3px] bg-yellow-500 rounded-3xl' />
                        <h1 className='font-nike text-xl sm:text-4xl text-yellow-500'>The Best Shoe</h1>
                    </div>
                    <h1 className='font-nike text-[2.7rem] sm:text-[4rem] md:text-[4rem] italic font-semibold -mt-2 sm:-mt-6 text-right'>BEST PEOPLE</h1>
                </div>
                <p className='text-slate-500 font-text pl-1 sm:pr-40 text-left text-sm sm:text-sm'>Distinctively integrate interoperable total linkage and covalent processes.Seamlessly generate optimal</p>

                <div className=' grid sm:grid-cols-3 gap-x-3 gap-y-3 pr-20 sm:pr-0'>
                    <div className='bg-white p-5 space-y-5 rounded-md shadow-md'>
                        <img className='w-[50%]' src={sole} alt="" />
                        <h1 className='font-nike text-sm'>Design Padded Insole</h1>
                        <p className='font-text text-xs '>Manufactured products team building core comprehencies standard</p>
                    </div>
                    <div className='bg-white p-5 space-y-5 rounded-md shadow-md'>
                        <i className="fa-solid fa-eraser text-[3.5rem] text-yellow-500" />
                        <h1 className='font-nike text-sm'>Ultra Durable Rubber Sole</h1>
                        <p className='font-text text-xs '>Manufactured products team building core comprehencies standard</p>
                    </div>
                    <div className='bg-white p-5 space-y-5 rounded-md shadow-md'>
                        <img className='w-[30%]' src={weight} alt="" />
                        <h1 className='font-nike text-sm'>Breathable Lightweight</h1>
                        <p className='font-text text-[0.7rem] '>Manufactured products team building core comprehencies standard</p>
                    </div>
                </div>



            </div>


            <div className='w-full h-[600px] lg:h-auto lg:w-[33.33%] flex items-center justify-end mb-0'>
                <div className='w-[100%] lg:w-[60%] h-[80%] bg-black relative -translate-x-10 lg:-translate-x-0 rounded-se-3xl rounded-ee-3xl lg:rounded-se-sm lg:rounded-ee-sm lg:rounded-ss-3xl lg:rounded-es-3xl'>
                    <div className='lg:absolute w-full lg:left-[-50%] flex lg:block justify-center items-center'>
                        <img className=' w-[150px] aspect-square lg:w-[150px] translate-x-72 sm:translate-x-10 translate-y-60 lg:translate-y-20 lg:-translate-x-20 z-10 rounded-full lg:rounded-3xl' src={nike_shoe1} alt="" />
                        <img className=' w-[300px] lg:w-[250px] rounded-xl translate-y-12 translate-x-5' src={nike_shoe2} alt="" />
                        <img className=' w-[200px] lg:w-[100px] rounded-full lg:rounded-3xl -translate-y-32 -translate-x-52 sm:-translate-x-20  lg:-translate-y-20 lg:translate-x-40' src={nike_shoe3} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Description