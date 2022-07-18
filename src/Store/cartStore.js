import {createSlice} from '@reduxjs/toolkit'


const getCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []


const cartSlice = createSlice({
    name: 'cart',
    initialState: {cart:getCart,total_items:getCart.length > 1 ? getCart.length : 0,total_amount:0,shippingFee:250},
    reducers: {
        AddToCart(state,action){
            const product =action.payload.product
            const exist = state.cart.find(pro => pro.id === product.id)

            if(exist){
                if(exist.amount + action.payload.amount > exist.max){
                    exist.amount = exist.max
                    
                }else{
                    exist.amount =exist.amount + action.payload 

                }
                
            }else{
                state.cart.push({
                    name:product.name,
                    id:product.id,
                    price:product.price,
                    image:product.images[0].url,
                    amount:action.payload.amount,
                    max:product.stock
                })


            }
            state.total_items = state.cart.length

            localStorage.setItem('cart',JSON.stringify(state.cart))
            
            
            
        },
        RemoveItem(state,action){
            const id = action.payload
            state.cart = state.cart.filter(pro=> pro.id !== id)
            
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        clearCart(state,action){
            state.cart = []
            localStorage.removeItem('cart')
        },
        GET_PRODUCTS_SUCCESS(state,action){
            state.products = action.payload
            state.loading = false
            state.featured = action.payload.filter(pro => pro.featured)
            
        },
        GET_PRODUCTS_ERROR(state,action){
            state.error =action.payload
            state.loading =false
            
        },
        GET_SINGLE_PRODUCT_BEGIN(state,action){
            state.singleProductLoad = true
            
        },
        GET_SINGLE_PRODUCT_SUCCESS(state,action){
            state.singleProduct = action.payload
            state.singleProductLoad = false
            
        },
        GET_SINGLE_PRODUCT_ERROR(state,action){
            state.singleError = action.payload
            
            state.singleProductLoad = false
        },
    }
})





export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer


