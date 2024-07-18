import React from 'react'
import Footer from '../Footer'

const Inbox = () => {
    return (
        <div>
            <div className='px-10 flex-1 min-h-screen'>
                <NoMessage />
            </div>
            <Footer/>
        </div>
    )
}

export default Inbox

const NoMessage = () => {
    return (
        <div className='flex flex-col items-center font-nike'>
            <h1 className='text-3xl'>No Messages</h1>
            <p className='font-text'>Messages and notifications from Nike will show up here.</p>
        </div>
    )
}