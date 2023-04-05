import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Order from "./components/Order/Order";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Shop />} />
      <Route path="order" element={<Order />} />
      <Route path="order-review" element={<OrderReview />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
