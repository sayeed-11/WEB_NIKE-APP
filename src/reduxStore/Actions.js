import {
    VIEW_DETAILS,
    CLOSE_DETAILS,
    VIEW_PRODUCT_DETAILS,
    CLOSE_PRODUCT_DETAILS,
    ADD_PRODUCT_IN_CART,
    REMOVE_PRODUCT_FROM_CART,
    ADD_PRODUCT_IN_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    SET_DATA
} from "./TypesOfActions";


export const view_details = () => {
    return(
        {
            type : VIEW_DETAILS
        }
    )
}

export const close_details = () => {
    return(
        {
            type : CLOSE_DETAILS
        }
    )
}

export const view_product_details = () => {
    return(
        {
            type : VIEW_PRODUCT_DETAILS
        }
    )
}

export const close_product_details = () => {
    return(
        {
            type : CLOSE_PRODUCT_DETAILS
        }
    )
}

export const add_product_in_cart = (data) => {
    return(
        {
            type : ADD_PRODUCT_IN_CART,
            payload : data
        }
    )
}

export const remove_product_from_cart = (id) => {
    return(
        {
            type : REMOVE_PRODUCT_FROM_CART,
            payload : id,
        }
    )
}

export const add_product_in_wishlist = (data) => {
    return(
        {
            type : ADD_PRODUCT_IN_WISHLIST,
            payload : data
        }
    )
}

export const remove_product_from_wishlist = (id) => {
    return(
        {
            type : REMOVE_PRODUCT_FROM_WISHLIST,
            payload : id
        }
    )
}

export const set_data = (data) => {
    return(
        {
            type : SET_DATA,
            payload : data
        }
    )
}
