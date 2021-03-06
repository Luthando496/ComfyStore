import React, { useEffect } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import { UpdateSort} from '../Store/Actions/ProductsActions'
import { productsActions } from '../Store/productsStore'



const Sort = () => {
  const sort = useSelector(state => state.prod.sort)
  const filteredProducts = useSelector(state => state.prod.filteredProducts)
  const dispatch = useDispatch()

  const updateSort =(e)=>{

    const name = e.target.name
    const value = e.target.value

    dispatch(UpdateSort(value))
  }

  useEffect(() => {
    dispatch(productsActions.sortProducts())

  },[sort])

  return(
    <Wrapper>
      <form >
        <label htmlFor='sort'>Sort By</label>
        <select name="sort" id="sort" className='sort-input' value={sort} onChange={updateSort}>
          <option value="lowest">lowest price</option>
          <option value="highest">highest price</option>
          <option value="name-a">name a-z</option>
          <option value="name-z">name z-a</option>
        </select>
      </form>

      <h4>{filteredProducts && filteredProducts.length} items found</h4>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Sort
