import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Cart from "../Cart/Cart";
import "./OrderReview.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../api/api";
import { removeProduct, selectCartItems } from "../Cart/cartSlice";
import { nanoid } from "@reduxjs/toolkit";

const OrderReview = () => {
  const dispatch = useDispatch();
  const { isLoading } = useGetProductsQuery();
  const cart = useSelector((state) => selectCartItems(state));
  console.log(cart);
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="order-review-container">
      <div className="order-review-items">
        {cart.map((product) => {
          const { id, name, img, price, shipping } = product;
          return (
            <div key={nanoid()} className="order-review-item">
              <img src={img} alt="product" />
              <div className="info">
                <h6>{name}</h6>
                <p>
                  Price: <span>${price}</span>
                </p>
                <p>
                  Shipping Charge: <span>${shipping}</span>
                </p>
              </div>
              <button onClick={() => dispatch(removeProduct(id))}>
                <DeleteOutlineOutlinedIcon className="deleteIcon" />
              </button>
            </div>
          );
        })}
      </div>
      <Cart>
        <Link className="link" to="/checkout">
          <button className="review-btn flex-center">
            Proceed Checkout
            <ArrowForwardIcon />
          </button>
        </Link>
      </Cart>
    </div>
  );
};

export default OrderReview;
