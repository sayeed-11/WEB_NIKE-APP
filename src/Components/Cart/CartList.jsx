import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavigationBar from '../../Components/NavigationBar'
import Footer from '../Footer';
import {
    add_product_in_wishlist,
    remove_product_from_cart,
    remove_product_from_wishlist,
    remove_data_from_cart_array,
    add_data_in_wishlist_array,
    remove_data_from_wishlist_array
} from '../../reduxStore/Actions';

const CartList = () => {

    const {
        cartData,
    } = useSelector(state => state.productInCart)

    const [quantity,setQuantity] = useState(cartData.length); 


    return (
        <div className='fixed top-0 pt-0 h-[100%] w-full bg-slate-100'>
            <NavigationBar />
            <div className='h-[100%] overflow-auto w-full pt-16 grid px-0 sm:px-5 space-y-10'>
                <div className='flex flex-col lg:flex-row w-full justify-center gap-x-10 gap-y-16'>

                    <div className='space-y-10'>
                        <CartHeader />
                        {cartData.length > 0 ? <CartItems /> : <EmptyCart />}
                    </div>
                    <Summary />

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default CartList


const CartHeader = () => {
    const {
        cartData,
    } = useSelector(state => state.productInCart)

    return (
        <div className='flex justify-between px-5 sm:px-0'>
            <h1 className='font-nike text text-2xl space-x-5'>
                <span>My Cart</span>
                <i className='fa-solid fa-cart-shopping' />
            </h1>
            <p className='font-nike text text-xl space-x-2'>
                <span>{cartData.length}</span>
                <span>{cartData.length > 1 ? "items" : "item"}</span>
            </p>
        </div>
    )
}


const CartItems = () => {
    const { wishlistArray } = useSelector(state => state.wishlistDataReducer)
    const dispatch = useDispatch();

    const {
        cartData,

    } = useSelector(state => state.productInCart)

    function inArray(needle, haystack) {
        var count = haystack.length;
        for (var i = 0; i < count; i++) {
            if (haystack[i] === needle) { return true; }
        }
        return false;
    }
    return (
        <div className=' h-auto space-y-10'>
            {
                cartData.map((item, index) => {
                    return (
                        <div className='py-2 flex-col flex sm:flex-row sm:justify-between border-b-[1.5px] border-black/[0.3]'>
                            <div className='flex flex-row gap-x-5 justify-center'>
                                <div> 
                                    <img className='max-w-[150px] rounded-sm sm:h-auto min-w-[150px] aspect-square object-cover' src={item.colorsAvailable[0].images[0]} alt="" />
                                </div>
                                <div className='flex flex-col-reverse justify-end sm:flex-row flex-wrap'>
                                    <div className='flex flex-col justify-between'>
                                        <div>
                                            <h1 className='font-nike text-[1.1rem]  sm:text-2xl '>{item.colorsAvailable[0].name}</h1>
                                            <p className='text-sm font-nike text-black/[0.7]  '>{item.type}</p>
                                        </div>
                                        <div className='text-black/[0.8] hidden sm:block'>
                                            <p className='font-nike'>{item.colorsAvailable[0].colorShown}</p>
                                            <p className='font-nike'>{item.colorsAvailable[0].style}</p>
                                        </div>
                                        <div className='flex flex-row flex-wrap justify-between gap-x-2 sm:gap-x-10 gap-y-2'>
                                            <div className='space-x-1 text-sm  font-nike'>
                                                <label htmlFor="">Size</label>
                                                <select className='outline-none border-none bg-white/[0.5] px-1' name="Size" id="">
                                                    <option value="6">6</option>
                                                    <option value="6.5">6.5</option>
                                                    <option value="7">7</option>
                                                    <option value="7.5">7.5</option>
                                                </select>
                                            </div>
                                            <div className='space-x-1 text-sm  font-nike'>
                                                <label htmlFor="">Quantity</label>
                                                <select className='outline-none border-none bg-white/[0.5] px-1' name="Size" id="">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex gap-x-10 mt-3 sm:mt-5'>
                                            <button
                                                onClick={() => {
                                                    inArray(item.id, wishlistArray) ? dispatch(remove_product_from_wishlist(item.id)) : dispatch(add_product_in_wishlist(item))
                                                    inArray(item.id, wishlistArray) ? dispatch(remove_data_from_wishlist_array(item.id)) : dispatch(add_data_in_wishlist_array(item.id))
                                                }}
                                            >
                                                <i className={`fa-${inArray(item.id, wishlistArray) ? "solid" : "regular"} fa-heart text-xl sm:text-2xl`} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    dispatch(remove_product_from_cart(item.id))
                                                    dispatch(remove_data_from_cart_array(item.id))
                                                }}
                                            >
                                                <i className='fa-solid fa-trash text-xl sm:text-2xl' />
                                            </button>
                                        </div>
                                    </div>

                                    <div className='sm:hidden'>
                                        <p className='font-nike text-xl'>₹ {item.colorsAvailable[0].price}</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <p className='font-nike text-xl hidden sm:block'>₹ {item.colorsAvailable[0].price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}





const Summary = () => {

    const {
        cartData,

    } = useSelector(state => state.productInCart)

    const total = () => {
        let total = 0;
        cartData.forEach(element => {
            total += element.colorsAvailable[0].price
        })
        return total
    }
    return (
        <div className=' px-5 sm:px-0 space-y-10'>
            <h1 className='text-2xl font-nike'>Summary</h1>
            <div className='font-nike text-[1.3rem] sm:text-xl'>
                <div className='flex justify-between py-3'>
                    <p>Subtotal</p>
                    {cartData.length > 0 ? <p>₹{total()}.00</p> : <p>-</p>}
                </div>
                <div className='flex justify-between gap-x-5 sm:gap-x-16 py-3 border-b-[1.5px] border-black/[0.3]'>
                    <p>Estimated Delivery & Handling</p>
                    {
                        cartData.length > 0 ? <p>₹1250.00</p> : <p>Free</p>
                    }
                </div>
                <div className='flex py-3 justify-between'>
                    <p>Total</p>
                    {
                        cartData.length > 0 ? <p>₹ {total() + 1250}.00 </p> : <p>-</p>
                    }
                </div>
            </div>
            <button className='font-nike bg-black text-white w-full py-3'>Payment Now</button>
        </div>
    )
}

const EmptyCart = () => {
    return (
        <div className='relative flex flex-col justify-center items-center h-full space-y-5'>
            <i className='fa-solid fa-cart-shopping text-[3.5rem] sm:text-[7rem] top-0 text-black/[0.1]' />
            <h1 className='font-nike text-[1.5rem] sm:text-[3rem] text-black/[0.1]'>There is no item in your cart</h1>
        </div>
    )
}