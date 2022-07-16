import { cartActions } from "../cartStore";



export const cartAdd =(id,amount,product)=>{
    return dispatch=>{
        const data = {product,amount,id}

        console.log(data)

        dispatch(cartActions.AddToCart(data))

        // const item = [{
        //     name:product.name,
        //     id:product.id,
        //     price:product.price,
        //     image:product.images[0].url,
        //     amount:amount,
        //     max:product.stock
        // }]

    }
}