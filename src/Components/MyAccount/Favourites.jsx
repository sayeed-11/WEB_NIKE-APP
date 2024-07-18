import React, { useState } from 'react'
import Footer from '../Footer'
import { ExtraData } from '../Cart/CartList'
// import { store } from '../../reduxStore/store'
import { useSelector, useDispatch } from 'react-redux'
import {
    add_product_in_wishlist,
    remove_product_from_wishlist,
    add_data_in_wishlist_array,
    remove_data_from_wishlist_array,
} from '../../reduxStore/Actions';

const Favourites = () => {
    return (
        <div className='space-y-20'>
            <div className='min-h-[250px]'>
                <FavouriteItems />
            </div>
            <div className='px-3'>
            <ExtraData />
            </div>
            <Footer />
        </div>
    )
}

export default Favourites


const FavouriteItems = () => {
    const {
        wishlistData,
    } = useSelector(state => state.productInWishlist)
    console.log('fav data', wishlistData);
    return (
        <div>
            {wishlistData.length > 0 ? <FavouriteData /> : <NoFavouriteData />}
        </div>
    )
}

const NoFavouriteData = () => {
    return (
        <div className='font-nike px-5'>
            <h1 className='text-3xl border-b-[1.5px] border-slate-300'>Favourites</h1>
            <p className='text-center mt-32'>Items added to your Favourites will be saved here.</p>
        </div>
    )
}

const FavouriteData = () => {
    const dispatch = useDispatch();

    // const { cartArray } = useSelector(state => state.cartDataReducer)
    const { wishlistArray } = useSelector(state => state.wishlistDataReducer)

    function inArray(needle, haystack) {
        var count = haystack.length;
        for (var i = 0; i < count; i++) {
            if (haystack[i] === needle) { return true; }
        }
        return false;
    }
    const {
        wishlistData,
    } = useSelector(state => state.productInWishlist)

    const [isEdit, setEdit] = useState(false);
    return (
        <div className='px-5'>
            <div className='border-b-[1.5px] border-slate-300 flex justify-between py-2'>
            <h1 className='text-3xl font-nike'>Favourites</h1>
            <button onClick={() => {
                setEdit(!isEdit)
                }} className={`px-8 py-2   rounded-md ${isEdit ? "bg-black text-white py-3" : "bg-white text-black border-2 border-black"}`}>{isEdit ? "Done" : "Edit"}</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10'>
                {
                    wishlistData.map((data, index) => {
                        return (
                            <div className='overflow-hidden border-[1px] border-black/[0.1] font-nike rounded-md shadow-sm bg-white relative'>
                                <div className={`absolute z-50 ${isEdit ? "block" : "hidden"}`}>
                                    <i onClick={() => {
                                        inArray(data.id, wishlistArray) ? dispatch(remove_product_from_wishlist(data.id)) : dispatch(add_product_in_wishlist(data))
                                        inArray(data.id, wishlistArray) ? dispatch(remove_data_from_wishlist_array(data.id)) : dispatch(add_data_in_wishlist_array(data.id))
                                    }} className={`fa-${inArray(data.id, wishlistArray) ? "solid" : "regular"} fa-heart  w-12 aspect-square grid place-items-center rounded-ee-lg  text-sm scale-[1]  text-white bg-black shadow-md`} />
                                </div>
                                <img className='-translate-y-16' src={data.colorsAvailable[0].images[0]} alt="" />
                                <div className='px-2 py-2 -translate-y-16 -mb-16 space-y-3'>
                                    <div>
                                        <h1>{data.colorsAvailable[0].name}</h1>
                                        <p className='text-xs'>{data.type}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <button className='bg-black text-white px-3 py-2 text-xs rounded-sm'>Select size</button>
                                        <p>MRP : ₹ {data.colorsAvailable[0].price}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}