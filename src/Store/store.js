import {createSlice,configureStore} from '@reduxjs/toolkit'
import { productsReducer } from './productsStore'
import { cartReducer } from './cartStore'


const userSlice = createSlice({
    name: 'user',
    initialState: {user:null,loading:false,error:null},
    reducers: {
        Register(state, action) {

        }
    }
})





export const userActions = userSlice.actions


const store = configureStore({
    reducer:{
        user:userSlice.reducer,
        prod:productsReducer,
        cart:cartReducer
    }
})


export default store;