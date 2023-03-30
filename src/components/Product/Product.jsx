import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";
import "./Product.scss";

const Product = ({ id, category, img, name, price, ratings, seller }) => {
  const dispatch = useDispatch();

  return (
    <figure className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>

      <figcaption className="product-caption">
        <div className="product-caption-fchild">
          <h6>{name}</h6>
          <p className="price">Price: ${price}</p>
        </div>

        <div className="product-caption-lchild">
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings} stars</p>
        </div>
      </figcaption>

      <button
        onClick={() => {
          dispatch(addToCart(id));
        }}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </figure>
  );
};

export default Product;
