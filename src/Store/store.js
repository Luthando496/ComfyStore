import {createSlice,configureStore} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState: {user:null,loading:false,error},
    reducers: {
        Register(state, action) {

        }
    }
})





export const userActions = userSlice.actions


const store = configureStore({
    reducer:userSlice.reducer
})


export default store;