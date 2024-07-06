import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-white grid grid-cols-1 gap-y-12 px-5 sm:px-10 py-10 font-nike'>
      <div>
        <svg className={`fill-black w-16 h-10`} xmlns="http://www.w3.org/2000/svg" viewBox="135.5 361.38 1000 356.39">
          <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z" />
        </svg>
      </div>
      <div className='flex justify-between sm:justify-start md:justify-between flex-wrap gap-y-10'>

        <div className='space-y-3 w-[100%] md:w-auto'>
          <h1 className='font-bold text-3xl'>Subscribe to Newsletter</h1>
          <div className=' w-full relative flex items-center'>
            <input className='bg-transparent w-full py-3 border-b-2 border-lime-500 outline-none pr-10' type="text" placeholder='Email' />
            <button className='absolute right-0'><i className='fa-solid fa-arrow-right text-xl text-lime-500' /></button>
          </div>
        </div>

        <div className='space-y-3'>
          <h1 className='font-semibold text-[1.1rem]'>Get Help</h1>
          <ul className='space-y-1 text-black/[0.7] text-[0.98rem]'>
            <li><button className='hover:text-lime-500'>Order Status</button></li>
            <li><button className='hover:text-lime-500'>Shipping & Delivery</button></li>
            <li><button className='hover:text-lime-500'>Returns</button></li>
            <li><button className='hover:text-lime-500'>Payment Options</button></li>
            <li><button className='hover:text-lime-500'>Contact Us</button></li>
          </ul>
        </div>

        <div className='space-y-3'>
          <h1 className='font-semibold text-[1.1rem]'>About Nike</h1>
          <ul className='space-y-1 text-black/[0.7] text-[0.98rem]'>
            <li><button className='hover:text-lime-500'>News</button></li>
            <li><button className='hover:text-lime-500'>Career</button></li>
            <li><button className='hover:text-lime-500'>Investor</button></li>
            <li><button className='hover:text-lime-500'>Pupose</button></li>
            <li><button className='hover:text-lime-500'>Sustainability</button></li>
          </ul>
        </div>

      </div>

      <div className='grid grid-cols-1 gap-y-5 sm:grid-cols-2'>
        <div className='flex gap-x-5 font-[500]'>
          <button className='hover:text-lime-500'>Facebook</button>
          <button className='hover:text-lime-500'>Instagram</button>
        </div>
        <div>
          <p className='text-sm text-black/[0.7]'>© 2024 Nike, Inc.All Righrs Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer