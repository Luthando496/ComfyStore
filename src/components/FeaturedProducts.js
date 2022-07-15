import React ,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import {fetchProducts} from '../Store/Actions/ProductsActions'


const FeaturedProducts = () => {
  const {featured,error,loading} = useSelector(state => state.prod)

  const dispatch =useDispatch()
  
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])

  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error error={error}/>
  }
  return(
    <Wrapper className='section'>
    <div className="title">
      <h2>Featured Products</h2>
      <div className="underline"></div>
    </div>

    <div className="section-center featured">
    {featured && featured.map(pro=>(
      <Product key={pro.id} {...pro} />
    ))}

    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
