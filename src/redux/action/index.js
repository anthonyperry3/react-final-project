//For add item to cart
export const addCart = (product) => {
    return{
        type : "ADDCART",
        payload : product
    }
}


//For delete item from cart
export const delCart= (product) => {
    return{
        type : "DELCART",
        payload : product
    }
}