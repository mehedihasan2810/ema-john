import React from 'react'
import './Product.scss'

const Product = ({category, img, name, price, ratings, seller}) => {
  return (
    <figure className='product'>
        <div className='img-container'>
        <img src={img} alt="" />
        </div>

        <figcaption className='product-caption'>
            <div className='product-caption-fchild'>
            <h6>{name}</h6>
            <p className='price'>Price: ${price}</p>
            </div>

            <div className='product-caption-lchild'>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
        </figcaption>

        <button className='add-to-cart-btn'>
            Add to Cart
        </button>

    </figure>
  )
}

export default Product