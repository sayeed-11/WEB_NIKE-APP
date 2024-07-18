import React from 'react'

const Account = ({acHeight, setAcHeignt}) => {
    return (
        <div className={`absolute bg-white text-black w-full top-[48px] right-0 flex flex-col items-start px-10 space-y-5 transition-all overflow-hidden ${acHeight ? "h-auto py-5" : "h-0 py-0"} border-t-[8px] border-black`}>
            <h1 className='font-nike text-xl'>Account</h1>
            <ul className='text-sm font-nike text-slate-600 space-y-1 flex flex-col items-start'>
                <li><button >Profile</button></li>
                <li><button >Order</button></li>
                <li><button >Favourite</button></li>
                <li><button >Index</button></li>
                <li><button >Experiences</button></li>
                <li><button >Accout Settings</button></li>
                <li><button >Log Out</button></li>
            </ul>
        </div>
    )
}

export default Account