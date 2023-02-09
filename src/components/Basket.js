import React from "react";
import { BasketSvg } from "./index.js";

const Basket = ({ width = "auto", height = "auto" }) => {
  return (
    <div className="basket">
      <BasketSvg width={width} height={height} />
    </div>
  );
};

export default Basket;
