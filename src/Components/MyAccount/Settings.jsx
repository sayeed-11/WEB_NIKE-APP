import React, { useState } from 'react'

import SocialLink from '../../icons/SocialLink'
import Privacy from '../../icons/Privacy'
import Communication from '../../icons/Communication'
import Share from '../../icons/Share'
import Delivery from '../../icons/Delivery'
import Preferences from '../../icons/Preferences'
import User from '../../icons/User'

const Settings = () => {
  const [isActive, setActive] = useState("AccountDetails");
  return (
    <div className='-mt-5 sm:-mt-10 font-nike sm:px-10 space-y-10 pb-10'>
      <div className='border-b-[1.5px] border-gray-400 px-3 sm:px-0'>
        <h1 className='text-3xl pb-5'>Settings</h1>
      </div>
      <div className='flex flex-col sm:flex-row justify-between gap-y-8'>
        <SettingLinks setActive={setActive} isActive={isActive} />
        <div className='w-[100%] sm:w-[60%]'>
          {isActive === "AccountDetails" && <AccountDetails />}
          {isActive === "DeliveryAddresses" && <DeliveryAddresses />}
          {isActive === "ShopPreferences" && <ShopPreferences />}
          {isActive === "CommunicationPreferences" && <CommunicationPreferences />}
          {isActive === "PrivacySettings" && <PrivacySettings />}
          {isActive === "ProfileVisibility" && <ProfileVisibility />}
          {isActive === "LinkedAccounts" && <LinkedAccounts />}
        </div>
      </div>
    </div>
  )
}

export default Settings


const AccountDetails = () => {
  return (
    <div className='w-[100%] sm:w-[60%] space-y-8 px-3 sm:px-0'>
      <h1 className='text-2xl font-sem'>Account Details</h1>
      <form className='space-y-7' action="">
        <div className='flex flex-col gap-y-1 relative'>
          <label className='absolute -top-[20%] left-3 bg-slate-100 px-2 text-xs' htmlFor="">Email</label>
          <input className='py-3 border-[1.5px] outline-none border-black rounded-md bg-transparent px-3' type="email" />
        </div>
        <div className='flex flex-col gap-y-1 relative'>
          <label className='absolute -top-[20%] left-3 bg-slate-100 px-2 text-xs' htmlFor="">Password</label>
          <input className='py-3 border-[1.5px] outline-none border-black rounded-md bg-transparent px-3' type="password" />
        </div>
        <div className='flex flex-col gap-y-1 relative'>
          <label className='absolute -top-[20%] left-3 bg-slate-100 px-2 text-xs' htmlFor="">Phone Number</label>
          <input className='py-3 border-[1.5px] outline-none border-black rounded-md bg-transparent px-3' type="tel" />
        </div>
        <div className='flex flex-col gap-y-1 relative'>
          <label className='absolute -top-[20%] left-3 bg-slate-100 px-2 text-xs' htmlFor="">Date of Birth</label>
          <input className='py-3 border-[1.5px] outline-none border-black rounded-md bg-transparent px-3' type="tel" />
        </div>
        <h1>Location</h1>
        <div className='flex flex-col gap-y-1 relative'>
          <label className='absolute -top-[20%] left-3 bg-slate-100 px-2 text-xs' htmlFor="">Country/Region</label>
          <input className='py-3 border-[1.5px] outline-none border-black rounded-md bg-transparent px-3' type="tel" />
        </div>
        <div className='flex flex-col gap-y-1 relative'>
          <label className='absolute -top-[20%] left-3 bg-slate-100 px-2 text-xs' htmlFor="">State</label>
          <input className='py-3 border-[1.5px] outline-none border-black rounded-md bg-transparent px-3' type="tel" />
        </div>
        <div className='flex flex-col gap-y-1 relative'>
          <label className='absolute -top-[20%] left-3 bg-slate-100 px-2 text-xs' htmlFor="">Town/City</label>
          <input className='py-3 border-[1.5px] outline-none border-black rounded-md bg-transparent px-3' type="tel" />
        </div>
        <div className='flex flex-col gap-y-1 relative'>
          <label className='absolute -top-[20%] left-3 bg-slate-100 px-2 text-xs' htmlFor="">Postcode</label>
          <input className='py-3 border-[1.5px] outline-none border-black rounded-md bg-transparent px-3' type="tel" />
        </div>

        <div className='flex justify-between items-center border-b-[1px] border-t-[1px] border-black py-3'>
          <h1>Delete Account</h1>
          <button className='bg-black text-white px-6 py-2 rounded-md'>Delete</button>
        </div>
        <button className='w-full bg-black text-white py-3 rounded-md' type='submit'>save</button>

      </form>
    </div>
  )
}
const DeliveryAddresses = () => {
  return (
    <div className='w-[100%] sm:w-[60%] space-y-8 px-3 sm:px-0'>
      <h1 className='text-2xl font-sem'>Delivery Addresses</h1>
      <p>You currently don't have any saved delivery addresses.Add an address here to be pre-filled for quicker checkout.</p>
      <button className='bg-black text-white w-[100%] sm:w-auto px-10 py-3 rounded-md'>Add Address</button>
    </div>
  )
}
const ShopPreferences = () => {
  return (
    <form className='w-[100%] sm:w-[60%] space-y-8 px-3 sm:px-0'>
      <h1 className='text-2xl font-sem'>Shop Preferences</h1>
      <div>
        <div className='flex flex-col gap-y-1 relative'>
          <label className='absolute -top-[20%] left-3 bg-slate-100 px-2 text-xs' htmlFor="">Shoe Size</label>
          <input className='py-3 border-[1.5px] outline-none border-black rounded-md bg-transparent px-3' type="Number" />
        </div>
        <p className='text-xs text-gray-500'>Provide your shoe size to have it pre-selected when you shop.</p>
      </div>

      <div className='space-y-2'>
        <h1 className='text-xl'>Shopping Preferences</h1>
        <div className='mt-5 flex items-center gap-x-3'>
          <input className='w-5 h-5' type="radio" name="" id="" />
          <label htmlFor="">Women's</label>
        </div>
        <div className=' flex items-center gap-x-3'>
          <input className='w-5 h-5' type="radio" name="" id="" />
          <label htmlFor="">Men's</label>
        </div>
      </div>


      <div className='space-y-2'>
        <h1 className='text-xl'>Additional Preferences</h1>
        <div className='mt-5 flex items-center gap-x-3'>
          <input className='w-5 h-5' type="checkbox" name="" id="" />
          <label htmlFor="">Women's</label>
        </div>
        <div className=' flex items-center gap-x-3'>
          <input className='w-5 h-5' type="checkbox" name="" id="" />
          <label htmlFor="">Men's</label>
        </div>
        <div className=' flex items-center gap-x-3'>
          <input className='w-5 h-5' type="checkbox" name="" id="" />
          <label htmlFor="">Girls'</label>
        </div>
        <div className=' flex items-center gap-x-3'>
          <input className='w-5 h-5' type="checkbox" name="" id="" />
          <label htmlFor="">Boys'</label>
        </div>
      </div>


      <div className='space-y-2'>
        <h1 className='text-xl'>Unit of Measure</h1>
        <div className='mt-5 flex items-center gap-x-3'>
          <input className='w-5 h-5' type="radio" name="" id="" />
          <label htmlFor="">Metric</label>
        </div>
        <div className=' flex items-center gap-x-3'>
          <input className='w-5 h-5' type="radio" name="" id="" />
          <label htmlFor="">Imperial</label>
        </div>
      </div>
      <button className='w-[100%] sm:w-auto px-10 py-3 bg-black text-white rounded-md' type='submit'>Save</button>
    </form>
  )
}
const CommunicationPreferences = () => {
  return (
    <div className='w-[100%] sm:w-[60%] space-y-5 px-3 sm:px-0'>
      <h1 className='text-2xl font-sem'>Communication Preferences</h1>
      <p>General Communication</p>
      <p className='text-xl'>Get updates on products, offers and your Member benefits</p>
      <form className='space-y-10' action="">
        <div className=' flex items-center gap-x-3'>
          <input className='w-5 h-5' type="checkbox" name="" id="" />
          <label htmlFor="">Yes, send me email</label>
        </div>
        <button className='px-10 py-3 w-[100%] sm:w-auto bg-black text-white rounded-md' type='submit'>Save</button>
      </form>
    </div>
  )
}
const PrivacySettings = () => {
  return (
    <div className='w-[100%] sm:w-[60%] space-y-5 px-3 sm:px-0'>
      <h1 className='text-2xl font-sem'>Privacy</h1>
      <p>Nike Run Club and Nike Training Club</p>
      <p className='text-xl'>Use my workout data to give me adaptive training plans, personalised product recommendations and special event invitations.</p>
      <div className=' flex items-center gap-x-3'>
        <input className='w-5 h-5' type="checkbox" name="" id="" />
        <label htmlFor="">Use workout data</label>
      </div>
    </div>
  )
}
const ProfileVisibility = () => {
  return (
    <div></div>
  )
}
const LinkedAccounts = () => {
  return (
    <div></div>
  )
}


const SettingLinks = ({ setActive, isActive }) => {
  const [shadowColor, setShadowColor] = useState("slate-100");
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      setShadowColor("shadow-md bg-slate-100 border-t-[1.5px] border-black");
    }
    else {
      setShadowColor("shadow-none")
    }
  })
  return (
    <div className={`${shadowColor} w-[100%] sm:w-auto px-3 sm:px-0 pb-3 sm:pb-0 -mt-3 sm:-mt-0 sticky top-[120px] sm:static sm:top-0 overflow-clip z-40`}>
      <ul className='flex items-center justify-between sm:block space-y-5'>

        <li>
          <button onClick={() => {
            setActive("AccountDetails");
          }} className={`${isActive === "AccountDetails" ? "text-lime-400" : "text-black"} flex gap-x-3 translate-y-2 sm:translate-y-0`}>
            <div className={`${isActive === "AccountDetails" ? "sm:border-none border-b-2 border-lime-400 pb-1 sm:pb-0" : "border-none"}`}>
              <User isActive={isActive} />
            </div>
            <h1 className='hidden sm:block'>Account Details</h1>
          </button>
        </li>

        <li>
          <button onClick={() => {
            setActive("DeliveryAddresses");
          }} className={`${isActive === "DeliveryAddresses" ? "text-lime-400" : "text-black"} flex gap-x-3`}>
            <div className={`${isActive === "DeliveryAddresses" ? "sm:border-none border-b-2 border-lime-400" : "border-none"}`}>
              <Delivery isActive={isActive} />
            </div>
            <h1 className='hidden sm:block'>Delivery Addresses</h1>
          </button>
        </li>

        <li>
          <button onClick={() => {
            setActive("ShopPreferences");
          }} className={`${isActive === "ShopPreferences" ? "text-lime-400" : "text-black"} flex gap-x-3`}>
            <div className={`${isActive === "ShopPreferences" ? "sm:border-none border-b-2 border-lime-400" : "border-none"}`}>
              <Preferences isActive={isActive} />
            </div>
            <h1 className='hidden sm:block'>Shop Preferences</h1>
          </button>
        </li>

        <li>
          <button onClick={() => {
            setActive("CommunicationPreferences");
          }} className={`${isActive === "CommunicationPreferences" ? "text-lime-400" : "text-black"} flex gap-x-3`}>
            <div className={`${isActive === "CommunicationPreferences" ? "sm:border-none border-b-2 border-lime-400" : "border-none"}`}>
              <Communication isActive={isActive} />
            </div>
            <h1 className='hidden sm:block'>Communication Preferences</h1>
          </button>
        </li>

        <li>
          <button onClick={() => {
            setActive("PrivacySettings");
          }} className={`${isActive === "PrivacySettings" ? "text-lime-400" : "text-black"} flex gap-x-3`}>
            <div className={`${isActive === "PrivacySettings" ? "sm:border-none border-b-2 border-lime-400" : "border-none"}`}>
              <Privacy isActive={isActive} />
            </div>
            <h1 className='hidden sm:block'>Privacy</h1>
          </button>
        </li>

        <li>
          <button onClick={() => {
            setActive("ProfileVisibility");
          }} className={`${isActive === "ProfileVisibility" ? "text-lime-400" : "text-black"} flex gap-x-3`}>
            <div className={`${isActive === "ProfileVisibility" ? "sm:border-none border-b-2 border-lime-400" : "border-none"}`}>
              <Share isActive={isActive} />
            </div>
            <h1 className='hidden sm:block'>Profile Visibility</h1>
          </button>
        </li>

        <li>
          <button onClick={() => {
            setActive("LinkedAccounts");
          }} className={`${isActive === "LinkedAccounts" ? "text-lime-400" : "text-black"} flex gap-x-3`}>
            <div className={`${isActive === "LinkedAccounts" ? "sm:border-none border-b-2 border-lime-400" : "border-none"}`}>
              <SocialLink isActive={isActive} />
            </div>
            <h1 className='hidden sm:block'>Linked Accounts</h1>
          </button>
        </li>


      </ul>
    </div>
  )
}