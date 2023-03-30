import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";
import "./Product.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Product = ({ id, category, img, name, price, ratings, seller }) => {
  const dispatch = useDispatch();

  return (
    <figure className="product">
      <div className="img-container">
        <img
          onError={(e) => {
            e.target.src =
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a275f11d1b84fa4bf96ae760148f381_9366/Team_Issue_Tapered_Pants_Black_HI0707_25_model.jpg";
          }}
          src={img}
          width="286px"
          height="286px"
          alt={name}
          loading="lazy"
        />
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
        className="add-to-cart-btn flex-center"
      >
        Add to Cart <ShoppingCartOutlinedIcon />
      </button>
    </figure>
  );
};

export default Product;
