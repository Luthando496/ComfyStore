import React from 'react'
import GridView from './GridView'
import ListView from './ListView'
import {useSelector} from 'react-redux'



const ProductList = () => {
  const {filteredProducts:products} = useSelector(state => state.prod)

  return(
    <GridView products={products && products}>
      Product List
    </GridView>
  )
}

export default ProductList
