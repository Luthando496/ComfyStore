// import {createSlice,configureStore} from '@reduxjs/toolkit'


// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {isOpen:false,loading:false,error:null,products:null,singleProduct:null,singleProductLoad:false,singleError:null,featured:null},
//     reducers: {
//         SIDEBAROPEN(state,action){
//             state.isOpen = true
//         },
//         SIDEBAR_CLOSE(state,action){
//             state.isOpen = false

//         },
//         GET_PRODUCTS_BEGIN(state,action){
//             state.loading  = true
//         },
//         GET_PRODUCTS_SUCCESS(state,action){
//             state.products = action.payload
//             state.loading = false
//             state.featured = action.payload.filter(pro => pro.featured)
            
//         },
//         GET_PRODUCTS_ERROR(state,action){
//             state.error =action.payload
//             state.loading =false
            
//         },
//         GET_SINGLE_PRODUCT_BEGIN(state,action){
//             state.singleProductLoad = true
            
//         },
//         GET_SINGLE_PRODUCT_SUCCESS(state,action){
//             state.singleProduct = action.payload
//             state.singleProductLoad = false
            
//         },
//         GET_SINGLE_PRODUCT_ERROR(state,action){
//             state.singleError = action.payload
            
//             state.singleProductLoad = false
//         },
//     }
// })





// export const productsActions = productsSlice.actions
// export const productsReducer = productsSlice.reducer


