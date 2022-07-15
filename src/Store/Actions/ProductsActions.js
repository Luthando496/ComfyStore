import { products_url as url } from "../../utils/constants";
import { productsActions as actions  } from "../productsStore";
import axios from 'axios'



export const fetchProducts = () => {
    return async dispatch=>{

        try {
            dispatch(actions.GET_SINGLE_PRODUCT_BEGIN())
            const {data} = await axios.get(url)

            dispatch(actions.GET_PRODUCTS_SUCCESS(data))
            
        } catch (error) {
            dispatch(actions.GET_SINGLE_PRODUCT_ERROR(error))
            console.log(error.response && error.response.data.message
                ? error.response.data.message
                : error.message)
            
        }

    }
}