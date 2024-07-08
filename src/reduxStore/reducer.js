import {
    VIEW_DETAILS,
    CLOSE_DETAILS,
    VIEW_PRODUCT_DETAILS,
    CLOSE_PRODUCT_DETAILS,
    ADD_PRODUCT_IN_CART,
    REMOVE_PRODUCT_FROM_CART,
    ADD_PRODUCT_IN_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    SET_DATA,
    ADD_DATA_IN_CART_ARRAY,
    REMOVE_DATA_FROM_CART_ARRAY,
    ADD_DATA_IN_WISHLIST_ARRAY,
    REMOVE_DATA_FROM_WISHLIST_ARRAY
} from "./TypesOfActions";



// VIEW_DETAILS & CLOSE_DETAILS
const detailsInitialState = {
    isView : false
};
export const detailsReducer = (state=detailsInitialState, action) => {
    switch(action.type) {
        case VIEW_DETAILS :
            return({
                isView : true
            })
        case CLOSE_DETAILS :
            return({
                isView : false
            })
        default : return state
    }
}


// VIEW_PRODUCT_DETAILS & CLOSE_PRODUCT_DETAILS
const productDetailsInitialState = {
    isViewDetails : false
};
export const productDetailsReducer = (state=productDetailsInitialState, action) => {
    switch(action.type) {
        case VIEW_PRODUCT_DETAILS :
            return({
                isViewDetails : true
            })
        case CLOSE_PRODUCT_DETAILS :
            return({
                isViewDetails : false
            })
        default : return state
    }
}


//ADD_PRODUCT_IN_CART & REMOVE_PRODUCT_FROM_CART
const initialCart = {
    cartData : []
}
export const productInCart = (state = initialCart, action) => {
    switch(action.type){
        case ADD_PRODUCT_IN_CART :
            return({
                cartData : [action.payload,...state.cartData]
            })
        case REMOVE_PRODUCT_FROM_CART :
            const remainData = state.cartData.filter((value) => {
                return value.id !== action.payload
            })
            return({
                cartData : remainData
            })
        default : return state
    }
}


//ADD_PRODUCT_IN_WISHLIST & REMOVE_PRODUCT_FROM_WISHLIST
const initialWishlist = {
    wishlistData : []
}
export const productInWishlist = (state = initialWishlist, action) => {
    switch(action.type){
        case ADD_PRODUCT_IN_WISHLIST :
            return({
                wishlistData : [...state.wishlistData,action.payload]
            })
        case REMOVE_PRODUCT_FROM_WISHLIST :
            const remainData = state.wishlistData.filter((value) => {
                return value.id !== action.payload
            })
            return({
                wishlistData : remainData
            })
        default : return state  
    }
}



//SET_DATA
const setInitialData = {
    productDetails : {}
}
export const setData = (state = setInitialData , action) => {
    switch(action.type){
        case SET_DATA :
            return(
                {
                    productDetails : action.payload
                }
            )
        default : return state
    }
}


// ADD_DATA_IN_CART_ARRAY & REMOVE_DATA_FROM_CART_ARRAY
const initialCartArrray = {
    cartArray : []
}
export const cartDataReducer = (state = initialCartArrray, action) =>{
    switch(action.type){
        case ADD_DATA_IN_CART_ARRAY :
            return({
                cartArray : [...state.cartArray, action.payload]
            })
        case REMOVE_DATA_FROM_CART_ARRAY :
            return({
                cartArray : state.cartArray.filter((id) => id !== action.payload)
            })
        default : return state
    }
}


// ADD_DATA_IN_WISHLIST_ARRAY & REMOVE_DATA_FROM_WISHLIST_ARRAY
const initialWishlistArrray = {
    wishlistArray : []
}
export const wishlistDataReducer = (state = initialWishlistArrray, action) =>{
    switch(action.type){
        case ADD_DATA_IN_WISHLIST_ARRAY :
            return({
                wishlistArray : [...state.wishlistArray, action.payload]
            })
        case REMOVE_DATA_FROM_WISHLIST_ARRAY :
            return({
                wishlistArray : state.wishlistArray.filter((id) => id !== action.payload)
            })
        default : return state
    }
}