import React,{useEffect} from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'
import { fetchProducts } from '../Store/Actions/ProductsActions'
import {useDispatch} from 'react-redux'

const ProductsPage = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    
    dispatch(fetchProducts())
  },[dispatch])

  return(
    <h4>products page</h4>

  ) 
}



const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
