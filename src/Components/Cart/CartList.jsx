import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavigationBar from '../../Components/NavigationBar'
import Footer from '../Footer';
import {
    add_product_in_wishlist,
    add_product_in_cart,
    add_data_in_cart_array,
    view_details,
    set_data,
    remove_product_from_cart,
    remove_product_from_wishlist,
    remove_data_from_cart_array,
    add_data_in_wishlist_array,
    remove_data_from_wishlist_array,
} from '../../reduxStore/Actions';

import { shoes } from '../../data/MenShoes/Shoes';
import ProductDetails from '../ShortDetails';

const CartList = () => {

    const {
        cartData,
    } = useSelector(state => state.productInCart)

    const {detailsReducer} = useSelector(state => state)

    return (
        <div className='fixed top-0 pt-0 h-[100%] w-full bg-slate-100'>
            <NavigationBar />
            <div className='h-[100%] overflow-auto w-full pt-16 grid px-0 sm:px-5 space-y-10'>
                <div className='flex flex-col lg:flex-row w-full justify-center gap-x-20 gap-y-16'>

                    <div className='space-y-10'>
                        <CartHeader />
                        {cartData.length > 0 ? <CartItems /> : <EmptyCart />}
                    </div>
                    <Summary />
                </div>
                <ExtraData />
                <Footer />
            </div>
            {detailsReducer.isView && <ProductDetails/>}
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

    var {
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
                    // item = {...item, quantity : 1}
                    return (
                        <div className='py-2 flex-col flex sm:flex-row sm:justify-between border-b-[1.5px] border-black/[0.3] gap-x-5 sm:gap-x-20'>
                            <div className='flex flex-row gap-x-5 justify-center'>
                                <div>
                                    <img className='max-w-[150px] sm:max-w-[200px] rounded-sm sm:h-auto min-w-[150px] sm:min-w-[200px] aspect-square object-cover' src={item.colorsAvailable[0].images[0]} alt="" />
                                </div>
                                <div className='flex flex-col-reverse justify-end sm:flex-row flex-wrap'>
                                    <div className='flex flex-col justify-between'>
                                        <div>
                                            {/* <p>{item.quantity}</p> */}
                                            <h1 className='font-nike text-[1.1rem]  sm:text-xl '>{item.colorsAvailable[0].name}</h1>
                                            <p className='text-sm font-nike text-black/[0.7]  '>{item.type}</p>
                                        </div>
                                        <div className='text-black/[0.8] hidden sm:block text-sm'>
                                            <p className='font-nike'>{item.colorsAvailable[0].colorShown}</p>
                                            <p className='font-nike'>{item.colorsAvailable[0].style}</p>
                                        </div>
                                        <div className='flex flex-row flex-wrap justify-between gap-x-2 sm:gap-x-10 gap-y-2'>
                                            <div className='space-x-1 text-sm  font-nike'>
                                                <label htmlFor="">Size</label>
                                                <select className='outline-none border-none bg-white/[0.5] px-1' name="Size" id="">
                                                    <option value={6}>6</option>
                                                    <option value={6.5}>6.5</option>
                                                    <option value={7}>7</option>
                                                    <option value={7.5}>7.5</option>
                                                </select>
                                            </div>
                                            <div className='space-x-1 text-sm  font-nike'>
                                                <label htmlFor="">Quantity</label>
                                                <select className='outline-none border-none bg-white/[0.5] px-1' name="Size" id="" >
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                    <option value={9}>9</option>
                                                    <option value={10}>10</option>
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
                                <p className='font-nike text-xl hidden sm:block text-nowrap'>₹ {item.colorsAvailable[0].price}</p>
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
            <div className='font-nike '>
                <div className='flex justify-between py-3'>
                    <p>Subtotal</p>
                    {cartData.length > 0 ? <p>₹{total().toLocaleString()}.00</p> : <p>-</p>}
                </div>
                <div className='flex justify-between gap-x-5 sm:gap-x-16 py-3 border-b-[1.5px] border-black/[0.3]'>
                    <p>Estimated Delivery & Handling</p>
                    {
                        cartData.length > 0 ? <p>₹{Number(1250.00).toLocaleString()}</p> : <p>Free</p>
                    }
                </div>
                <div className='flex py-3 justify-between'>
                    <p>Total</p>
                    {
                        cartData.length > 0 ? <p>₹ {(total() + 1250).toLocaleString()}.00 </p> : <p>-</p>
                    }
                </div>
            </div>
            <button className='font-nike bg-black text-white w-full py-3'>Place Order</button>
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




export const ExtraData = () => {

    const dispatch = useDispatch();

    const { cartArray } = useSelector(state => state.cartDataReducer)
    const { wishlistArray } = useSelector(state => state.wishlistDataReducer)

    function inArray(needle, haystack) {
        var count = haystack.length;
        for (var i = 0; i < count; i++) {
            if (haystack[i] === needle) { return true; }
        }
        return false;
    }

    return (
        <div className='w-full overflow-x-auto h-[450px] flex flex-col justify-end gap-y-5'>
            <Heading />
            <div className='flex overflow-x-auto gap-x-4 pl-2 py-2 h-[335px] w-full'>
                {
                    shoes.map((data, index) => {
                        const item = {
                            ...data,
                            id: data.colorsAvailable[0].style
                        }
                        return (
                            <div key={item.id} className='min-w-[230px] bg-white  shadow-md rounded-md h-[100%]   transition-all flex flex-col gap-y-2 items-start  relative border-t-2 border-black overflow-hidden'>
                                <div className=' flex items-start z-30 flex-row gap-x-[1.5px] absolute -right-2 px-2 -top-0 rounded-ee-lg '>
                                    <i onClick={() => {
                                        inArray(item.id, wishlistArray) ? dispatch(remove_product_from_wishlist(item.id)) : dispatch(add_product_in_wishlist(item))
                                        inArray(item.id, wishlistArray) ? dispatch(remove_data_from_wishlist_array(item.id)) : dispatch(add_data_in_wishlist_array(item.id))
                                    }} className={`fa-${inArray(item.id, wishlistArray) ? "solid" : "regular"} fa-heart  w-9 aspect-square grid place-items-center rounded-ee-lg  text-sm scale-[1]  text-white bg-black shadow-md`} />
                                    <i onClick={() => {
                                        inArray(item.id, cartArray) ? dispatch(remove_product_from_cart(item.id)) : dispatch(add_product_in_cart(item))
                                        inArray(item.id, cartArray) ? dispatch(remove_data_from_cart_array(item.id)) : dispatch(add_data_in_cart_array(item.id))
                                    }} className={`fa-solid fa-cart-shopping w-9 aspect-square grid place-items-center rounded-ee-lg rounded-es-lg text-sm scale-[1] ${inArray(item.id, cartArray) ? "bg-white text-black" : "text-white bg-black"} shadow-md`} />
                                    <i onClick={() => {
                                        dispatch(view_details())
                                        dispatch(set_data(item))
                                    }} className="fa-regular fa-eye w-9 aspect-square grid place-items-center rounded-es-lg text-white text-sm scale-[1] bg-black shadow-md" />
                                </div>
                                <div className='w-full relative  -translate-y-5 overflow-hidden rounded-ee-lg rounded-es-lg'>
                                    <img className='w-[100%] aspect-[1/1] -rotate-[25deg] scale-[1.15] -translate-y-3 -translate-x-3 object-cover' src={item.colorsAvailable[0].images[0]} alt="" />
                                    <div className='absolute w-full h-full top-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.8]'/>
                                </div>
                                <div className=' flex flex-col gap-y-1 w-[100%] -translate-y-3 px-2 '>
                                    <div className='w-full'>
                                        <h1 className='font-nike font text-sm'>{item.colorsAvailable[0].name}</h1>
                                    </div>
                                    <div className='flex justify-start gap-x-3 items-center '>
                                        <p className='font-text text-[0.5rem] font-extrabold text-black pt-1'><span className='text-sm'>₹ {item.colorsAvailable[0].price}</span> <span className='ml-1 line-through text-slate-700'>₹ {item.colorsAvailable[0].price - 2000}</span></p>
                                        <div>
                                            {
                                                [1, 2, 3, 4, 5].map((star) => {
                                                    return (
                                                        <span>
                                                            <i className={`fa-solid ${star !== 5 ? "fa-star" : "fa-star-half-stroke"} text-xs text-black`} />
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <button className=' bg-black w-[100%]  py-3 text-xs text-white rounded-md shadow-md text-slate-bg-slate-100 mt-1 flex justify-center items-center gap-x-3'>
                                        <span>Buy Now</span>
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

const Heading = () => {
    return (
        <div>
            <h1 className='font-nike text-3xl font-semibold italic '>You May Like Also</h1>
        </div>
    )
}