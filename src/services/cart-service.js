import { privateHttp } from "./axios-helper"


export const addItemToCart = (productId,quantity) =>{
    return privateHttp.post(`/carts/`,{
        productId:productId,
        quantity:quantity
    }).then(Response =>Response.data)
}


export const getCart = () => {
    return privateHttp.get(`/carts/`).then(Response =>Response.data)


}

export const removeItemFromCart = (productId) => {
    return privateHttp.put(`/carts/${productId}`).then(Response =>Response.data)


}





