import React from 'react'
import './Shop.scss'
import { useSelector } from 'react-redux'
import {  selectAllProducts, useGetProductsQuery } from '../../api/api'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'

const Shop = () => {

const { isLoading } = useGetProductsQuery()

const products = useSelector(selectAllProducts)
console.log(products[0])

if(isLoading) {
    return <h1>Loading...</h1>
}

  return (
    <div className='shop-container'>
    <div className='products-container'>
    {
      products.map(product => (
        <Product key={product.id} {...product}  />
      ))
    }
    </div>
    <Cart />
    </div>
  )
}

export default Shop