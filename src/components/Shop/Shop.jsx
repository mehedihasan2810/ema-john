import React from "react";
import "./Shop.scss";
import { useSelector } from "react-redux";
import { selectAllProducts, useGetProductsQuery } from "../../api/api";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Shop = () => {
  const { isLoading } = useGetProductsQuery();

  const products = useSelector(selectAllProducts);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <Cart>
        <Link className="link" to="/order-review">
          <button className="review-btn flex-center">
            Review Order
            <ArrowForwardIcon />
          </button>
        </Link>
      </Cart>
    </div>
  );
};

export default Shop;
