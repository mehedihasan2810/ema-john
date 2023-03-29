import React from "react";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <h5>Order Summary</h5>

      <div className="cart-info">
        <p>Selected Items: 0</p>
        <p>Total Price: $0</p>
        <p>Total Shipping Charge: $0</p>
        <p>Tax: $0</p>
        <h6>Grand Total: $00</h6>
      </div>
      <div className="btn-container">
      <button className="clear-btn">Clear Cart</button>
      <button className="review-btn">Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
