import React,{useEffect} from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero, Loading } from '../components'
import { fetchProducts } from '../Store/Actions/ProductsActions'
import {useDispatch,useSelector} from 'react-redux'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.prod.loading)

  useEffect(()=>{
    
    dispatch(fetchProducts())
  },[dispatch])

  if(Loading === true){
   return <Loading />

  }

  return(
    <main>
      <PageHero title="Products" />

      <Wrapper className='page'>
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>

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
