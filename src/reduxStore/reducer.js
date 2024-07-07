import {
    VIEW_DETAILS,
    CLOSE_DETAILS,
    VIEW_PRODUCT_DETAILS,
    CLOSE_PRODUCT_DETAILS,
    ADD_PRODUCT_IN_CART,
    REMOVE_PRODUCT_FROM_CART,
    ADD_PRODUCT_IN_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST
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
                cartData : [...state,action.payload]
            })
        case REMOVE_PRODUCT_FROM_CART :
            return({
                cartData : state.filter((value) => {
                    return value.id !== action.payload
                })
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
                wishlistData : [...state,action.payload]
            })
        case REMOVE_PRODUCT_FROM_WISHLIST :
            return({
                wishlistData : state.filter((value) => {
                    return value.id !== action.payload
                })
            })
        default : return state  
    }
}