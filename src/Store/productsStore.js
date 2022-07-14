import {createSlice,configureStore} from '@reduxjs/toolkit'


const productsSlice = createSlice({
    name: 'user',
    initialState: {isOpen:true,loading:false,error:null,products:null,singleProduct:null,singleProductLoad:false,singleError:null},
    reducers: {
        SIDEBAROPEN(state,action){
            state.isOpen = true
        },
        SIDEBAR_CLOSE(state,action){
            state.isOpen = false

        },
        GET_PRODUCTS_BEGIN(state,action){

        },
        GET_PRODUCTS_SUCCESS(state,action){

        },
        GET_PRODUCTS_ERROR(state,action){

        },
        GET_SINGLE_PRODUCT_BEGIN(state,action){

        },
        GET_SINGLE_PRODUCT_SUCCESS(state,action){

        },
        GET_SINGLE_PRODUCT_ERROR(state,action){

        },
    }
})





export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer


