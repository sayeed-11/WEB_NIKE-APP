import React, { useState } from 'react'
import { membersBenefit } from '../../data/AccountData/MembersBenefit'
import { nikeApp } from '../../data/AccountData/NikeApp'
import Footer from '../Footer';

const links = ["All", "Sports", "Products", "Teams", "Athletes", "Cities"];

const Profile = () => {
    return (
        <div className='space-y-20'>
            <div className='space-y-20'>
                <YourProfile />
                <Intesets />
                <MembersBenefit />
                <NikeApp />
            </div>
            <Footer/>
        </div>
    )
}

export default Profile

const YourProfile = () => {
    return (
        <div className='px-10 flex items-center gap-x-10 flex-col gap-y-3 md:flex-row'>
            <div className='w-24 rounded-full aspect-square bg-lime-400'></div>
            <div className='font-nike'>
                <h1 className='text-3xl text-lime-400'>SAYEED ANWAR</h1>
                <p className='text-slate-600'>Nike Member Since July 2024</p>
            </div>
        </div>
    )
}

const Intesets = () => {
    const [activeLink, setLink] = useState("All")
    return (
        <div className='px-5 md:px-10 space-y-10'>
            <div className='flex justify-between font-nike'>
                <h1 className='text-2xl'>Interests</h1>
                <button>Edit</button>
            </div>
            <div className='space-y-5'>
                <Buttons activeLink={activeLink} setLink={setLink} />
                <AddInterests activeLink={activeLink} />
            </div>
        </div>
    )
}

const Buttons = ({ activeLink, setLink }) => {
    return (
        <div className='flex px-5 sm:px-0 overflow-auto gap-x-5 md:gap-x-10 font-nike border-b-[1.5px] border-slate-300 pb-5'>
            {
                links.map((link, index) => {
                    return (
                        <button
                            className={`${activeLink === link ? "text-lime-500 text-[1.5rem]" : "text-black"}`}
                            key={index}
                            onClick={() => { setLink(link) }}
                        >{link}</button>
                    )
                })
            }
        </div>
    )
}

const AddInterests = ({ activeLink }) => {
    return (
        <div className='space-y-5'>
            <h1 className='font-text'>Add your interests to shop a collection of products that are based on what you're into.</h1>
            <button className='w-[200px] sm:w-[40%] md:w-[30%] lg:w-[20%] aspect-square bg-lime-400 font-nike text-white text-3xl hover:scale-[1.01] transition-all rounded-md flex flex-col items-center justify-center gap-5'>
                <p className='border-2 border-white px-3 aspect-square grid place-content-center rounded-full'>+</p>
                <p>Add {activeLink === "All" ? "Interest" : activeLink}</p>
            </button>
        </div>
    )
}

const MembersBenefit = () => {
    return (
        <div className='px-5 md:px-10 font-nike space-y-8'>
            <h1 className='text-2xl'>Member Benefits</h1>
            <div className='w-full overflow-x-auto flex gap-x-5'>
                {
                    membersBenefit.map((data, index) => {
                        const { id, name, img } = data;
                        return (
                            <button key={id} className='min-w-[350px]'>
                                <img src={img} alt="" />
                                <h1 className='mt-5 text-start'>{name}</h1>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

const NikeApp = () => {
    return (
        <div className='px-5 md:px-10 font-nike'>
            <h1 className='text-2xl'>Nike App</h1>
            <div className=' flex flex-col sm:flex-row gap-x-5'>
                {
                    nikeApp.map((data, index) => {
                        const { name, description, logo, img } = data;
                        return (
                            <div className='w-[100%] sm:w-[45%] md:w-[35%] lg:w-[25%] bg-white space-y-5 pb-5'>
                                <img className='w-full' src={img} alt="" />
                                <div className='px-5 flex items-center gap-x-5'>
                                    <img className='w-12' src={logo} alt="" />
                                    <h1>{name}</h1>
                                </div>
                                <p className='px-5 text-sm'>{description}</p>
                                <div className=' flex justify-center'>
                                    <button className='bg-black text-white px-10 py-2 rounded-md'>Download</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}