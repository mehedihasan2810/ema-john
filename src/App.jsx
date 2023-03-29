import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";

const App = () => {
  return (
    <div>
      <Navbar />
      <Shop />
    </div>
  );
};

export default App;
