import { legacy_createStore as createStore, combineReducers} from 'redux'

import { 
    detailsReducer,
    productDetailsReducer,
    productInCart,
    productInWishlist
 } from './reducer'

const rootReducer = combineReducers({
    detailsReducer : detailsReducer,
    productDetailsReducer : productDetailsReducer,
    productInCart : productInCart,
    productInWishlist : productInWishlist
})

export const store = createStore(rootReducer);

store.subscribe(() => {console.log('updated data',detailsReducer.isView )})