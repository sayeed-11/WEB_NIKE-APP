import React from 'react'
import Footer from '../Footer'

const Order = () => {
    return (
        <div>
            <div className='px-5 sm:px-10 min-h-screen'>
                <NoOrder />
            </div>
            <Footer/>
        </div>
    )
}

export default Order

const NoOrder = () => {
    return (
        <div className='font-nike '>
            <h1 className='text-3xl border-b-[1.5px] border-slate-300'>Orders</h1>
            <p className='text-center mt-5'>ou don't have any orders yet</p>
        </div>
    )
}