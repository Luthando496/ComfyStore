import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link,useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../Store/Actions/ProductsActions'
import {useDispatch,useSelector} from 'react-redux'


const SingleProductPage = () => {
  const id = useParams().id
  const dispatch = useDispatch()
  const {singleProduct,singleProductLoad,singleError:error} = useSelector(state => state.prod)

  useEffect(() => {
    if(singleProduct === null){
      dispatch(fetchSingleProduct(id))
    }
    
    dispatch(fetchSingleProduct(id))
    
  },[dispatch,id])

  if(singleProductLoad){
    return <Loading />
  }

  if(error && singleProduct === null){
    return <Error error={error || 'no products'} />
  }
  console.log(singleProduct && singleProduct)
  // const {name,price,description,stock,stars,reviews,company,image} = product && product
  

  return(
    <Wrapper>
      <PageHero title={singleProduct && singleProduct.name }product={singleProduct}  />
      <div className="section section-center page">
      <Link to='/products' className='btb'>
      Back to Products
      </Link>
      <div className="product-center">
      <ProductImages images={singleProduct && singleProduct.images} />

      <section className="content">
        <h2>{singleProduct && singleProduct.name }</h2>
        <Stars />
        <h5 className='price'>{formatPrice(singleProduct && singleProduct.price)}</h5>
        <p className="desc">{singleProduct && singleProduct.description}</p>
        <p className="info">
          <span>Available :</span>
          {singleProduct && singleProduct.stock && singleProduct.stock > 0 ? 'In stock' :'Out of stock' }
        </p>
        <p className="info">
          <span>SKU :</span>
          {singleProduct && singleProduct.id}
        </p>
        <p className="info">
          <span>Brand :</span>
          {singleProduct && singleProduct.company}
        </p>
        <hr />
        {singleProduct && singleProduct.stock && singleProduct.stock > 0 && <AddToCart product={singleProduct && singleProduct} /> }
      </section>
      </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
