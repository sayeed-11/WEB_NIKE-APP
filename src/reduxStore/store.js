import { legacy_createStore as createStore, combineReducers} from 'redux'

import { 
    detailsReducer,
    productDetailsReducer,
    productInCart,
    productInWishlist,
    setData
 } from './reducer'

const rootReducer = combineReducers({
    detailsReducer : detailsReducer,
    productDetailsReducer : productDetailsReducer,
    productInCart : productInCart,
    productInWishlist : productInWishlist,
    setData : setData
})

export const store = createStore(rootReducer);

store.subscribe(() => {console.log('updated data',detailsReducer.isView )})