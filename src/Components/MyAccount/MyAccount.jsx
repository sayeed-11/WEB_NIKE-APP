import React, { useState } from 'react'
import NavigationBar from '../NavigationBar'
import Profile from './Profile';
import Inbox from './Inbox';
import Order from './Order';
import Favourites from './Favourites';
import Settings from './Settings';

const myLinks = ["Profile", "Inbox", "Order", "Favourites", "Settings"]

const MyAccount = () => {
    const [display, setDisplay] = useState("Profile");
    return (
        <div className='bg-slate-100 w-full min-h-screen pt-3 sm:pt-5 space-y-8 sm:space-y-16 max-w-[1350px] mx-auto'>
            <NavigationBar/>
            <AccountLinks setDisplay={setDisplay} display={display} />
            <div className='w-full'>
                {display === "Profile" && <Profile />}
                {display === "Inbox" && <Inbox />}
                {display === "Order" && <Order />}
                {display === "Favourites" && <Favourites />}
                {display === "Settings" && <Settings />}
            </div>
        </div>
    )
}

export default MyAccount


const AccountLinks = ({ setDisplay, display }) => {
    const [shadowColor, setShadowColor] = useState("slate-100");
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 0) {
            setShadowColor("shadow-md");
        }
        else{
            setShadowColor("shadow-none")
        }
    })
    return (
        <div className={`flex justify-start sm:justify-center font-nike sticky top-[56px] bg-slate-100 ${shadowColor} z-40`}>
            <ul className='flex gap-x-5 md:gap-x-10 overflow-auto px-5 py-5'>
                {
                    myLinks.map((link, index) => {
                        return(
                            <li key={index} className={`${display === link ? "text-lime-400 scale-[1.3] border-b-[1.5px] border-lime-400" : "text-slate-700"}`}>
                                <button onClick={() => { setDisplay(link) }}>{link}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}