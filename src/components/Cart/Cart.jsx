import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { clearCart, selectCartInfo } from "./cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({ children }) => {
  const dispatch = useDispatch();
  const { selectedItems, totalPrice, totalShippingCharge, tax, grandTotal } =
    useSelector((state) => selectCartInfo(state));

  return (
    <div className="cart">
      <h5>Order Summary</h5>

      <div className="cart-info">
        <p>Selected Items: {selectedItems}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShippingCharge}</p>
        <p>Tax: ${tax}</p>
        <h6>Grand Total: ${grandTotal}</h6>
      </div>
      <div className="btn-container">
        <button
          onClick={() => dispatch(clearCart())}
          className="clear-btn flex-center"
        >
          Clear Cart <DeleteIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
