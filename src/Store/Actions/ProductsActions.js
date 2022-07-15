import { products_url as url,single_product_url as urlPro } from "../../utils/constants";
import { productsActions as actions  } from "../productsStore";
import axios from 'axios'



export const fetchProducts = () => {
    return async dispatch=>{

        try {
            dispatch(actions.GET_PRODUCTS_BEGIN())
            const {data} = await axios.get(url)


            dispatch(actions.GET_PRODUCTS_SUCCESS(data))
            
        } catch (error) {
            dispatch(actions.GET_PRODUCTS_ERROR(error.response && error.response.data.message
                ? error.response.data.message
                : error.message))
            console.log(error.response && error.response.data.message
                ? error.response.data.message
                : error.message)
            
        }

    }
}


export const fetchSingleProduct = (id) => {
    return async dispatch=>{

        try {
            dispatch(actions.GET_SINGLE_PRODUCT_BEGIN())
            const {data} = await axios.get(`${urlPro}${id}`)


            dispatch(actions.GET_SINGLE_PRODUCT_SUCCESS(data))
            
        } catch (error) {
            dispatch(actions.GET_SINGLE_PRODUCT_ERROR(error.response && error.response.data.message
                ? error.response.data.message
                : error.message))
            console.log(error.response && error.response.data.message
                ? error.response.data.message
                : error.message)
            
        }

    }
}