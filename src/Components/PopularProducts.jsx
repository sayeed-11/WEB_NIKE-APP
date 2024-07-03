import React from 'react'
import { popular } from '../data/popular'

const PopularProducts = () => {
    return (
        <div className='py-5 sm:py-20 flex flex-col sm:flex-row gap-x-1 pl-5 pr-5 sm:pr-0 sm:pl-10'>


            <div className='min-w-[250px] sm:border-r-2 sm:border-yellow-500'>
                <div className='flex items-baseline gap-x-1'>
                    <div className='w-8 h-[2px] bg-yellow-500 rounded-3xl' />
                    <h1 className='font-nike text-sm text-yellow-500'>Trending Products</h1>
                </div>
                <div className='flex flex-row  sm:flex-col font-nike text-[1.7rem] italic font-semibold'>
                    <h1 className='-mt-2'>Most Popular</h1>
                    <h1 className='-mt-2 sm:-mt-3'>Products</h1>
                </div>
                <div  className='flex flex-row sm:flex-col items-center sm:items-start pb-5 sm:pb-0 gap-x-10'>
                    <p className='text-slate-500 font-text text-xs'>Distinctively integrate interoperable total linkage and covalent processes.</p>
                    <button className='bg-yellow-500 px-4 py-3 rounded-3xl text-white mt-5 flex md:block'>
                        <p className='w-20 sm:hidden text-xs'>See All</p>
                        <i className="fa-solid fa-arrow-right -rotate-45 hidden sm:block" />
                    </button>
                </div>
            </div>


            <div className='flex overflow-x-auto gap-x-4 py-5 pl-2'>
                {
                    popular.map((item, index) => {
                        return (
                            <div key={item.id} className='min-w-[170px] bg-gradient-to-b from-yellow-500 via-yellow-500/[0.1] to-slate-100 shadow-md rounded-md overflow-hidden h-[200px] hover:bg-yellow-500 hover:scale-[1.15] hover:border-2 hover:border-white transition-all'>
                                <img className='w-full aspect-[1/1] object-cover -translate-y-12 rounded-ee-full rounded-es-full border-b-2 border-yellow-500' src={item.img} alt="" />
                                <div className='px-5 -translate-y-10 flex justify-between items-start  h-[70px] rounded-ss-3xl'>
                                    <div className='translate-y-2'>
                                        <h1 className='font-nike font-semibold text-xs'>{item.name.length > 11 ? item.name.slice(0, 11) + "..." : item.name}</h1>
                                        <p className='font-text text-[0.5rem] font-extrabold text-yellow-500 mt-3'><span className='bg-white px-3 py-2 rounded-3xl border-[1px] border-yellow-500'>$ {item.price}</span> <span className='ml-1 line-through text-slate-700'>$ 25.99</span></p>
                                    </div>
                                    <button className='bg-yellow-500 w-8 aspect-square rounded-3xl text-slate-bg-slate-100 mt-5 flex justify-center items-center border-[1px] border-white'>
                                        <i className="fa-solid fa-arrow-right -rotate-45 text-xs text-white" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularProducts