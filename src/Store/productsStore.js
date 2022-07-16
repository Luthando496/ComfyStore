import {createSlice,configureStore} from '@reduxjs/toolkit'


const productsSlice = createSlice({
    name: 'user',
    initialState: {isOpen:true,loading:false,error:null,products:null,singleProduct:null,singleProductLoad:false,singleError:null,featured:null,filteredProducts:[],allProducts:[],sort:'price-highest'},
    reducers: {
        SIDEBAROPEN(state,action){
            state.isOpen = true
        },
        SIDEBAR_CLOSE(state,action){
            state.isOpen = false

        },
        GET_PRODUCTS_BEGIN(state,action){
            state.loading  = true
        },
        GET_PRODUCTS_SUCCESS(state,action){
            state.products = action.payload
            state.allProducts = state.products
            state.filteredProducts = state.products
            state.loading = false
            state.featured = action.payload.filter(pro => pro.featured)
            
        },
        sortUpdate(state,action){
            state.sort = action.payload

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
        Filter(state,action){
            state.allProducts = [...state.products]
            state.filteredProducts = [...state.products]

        },
        sortProducts(state,action){
            let temp = []
            temp = [...state.filteredProducts]
            if(state.sort === 'lowest'){

                

                temp.sort((a,b)=> a.price - b.price )

             state.filteredProducts = temp
                console.log('this is lowest')
                
            }
            if(state.sort === 'highest'){
                temp.sort((a,b)=> b.price - a.price )
                

             state.filteredProducts = temp
                
                console.log('this is highest')
            }
            if(state.sort === 'name-a'){
              temp = temp.sort((a,b)=>{
                return a.name.localeCompare(b.name)
              })

              state.filteredProducts = temp
              
              
            }
            if(state.sort === 'name-z'){
                console.log('this is nam z to a')
                temp = temp.sort((a,b)=>{
                  return b.name.localeCompare(a.name)
                })

                state.filteredProducts = temp
                
            }
        },
    }
})





export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer


