import { legacy_createStore as createStore, combineReducers} from 'redux'

import { 
    detailsReducer,
    productDetailsReducer,
    productInCart,
    productInWishlist,
    setData,
    cartDataReducer,
    wishlistDataReducer
 } from './reducer'

const rootReducer = combineReducers({
    detailsReducer : detailsReducer,
    productDetailsReducer : productDetailsReducer,
    productInCart : productInCart,
    productInWishlist : productInWishlist,
    setData : setData,
    cartDataReducer : cartDataReducer,
    wishlistDataReducer : wishlistDataReducer
})

export const store = createStore(rootReducer);

// store.subscribe(() => {console.log('updated data',store.getState().productInCart.cartData )})