// import { SourceMap } from "module";
import React from "react";
import App from "../ProductData";
import Filter from "../components/Filter";

// import Filter from "../components/Filter";
const Products = () => {
  return (
    <h1>
      <Filter></Filter>
      <App />
    </h1>
  );
};

export default Products;
