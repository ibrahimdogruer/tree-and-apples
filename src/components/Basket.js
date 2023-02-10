import React from "react";
import { useSelector } from "react-redux";
import { AppleSvg, BasketSvg } from "./svgs/index.js";

const Basket = ({ width, height }) => {
  const { dropping, applesOnTheTree, applesInTheBasket } = useSelector(
    (state) => state.basket
  );
  // const apples = new Array(applesInBasket).fill(0);
  const apples = new Array(applesInTheBasket).fill(0);

  return (
    <div className="basket">
      <div className="apples-in-basket d-flex flex-wrap justify-content-center">
        {apples?.map((x, i) => {
          return (
            <div
              key={"apple-in-basket-" + i}
              className="position-absolute"
              style={{
                zIndex: Math.ceil(apples.length / 4) - Math.floor(i / 4),
                left: 20 * (i % 4),
                bottom: -48 + Math.floor(i / 4) * 16,
              }}
            >
              <AppleSvg preserveAspectRatio="none" width={40} height={42} />
            </div>
          );
        })}
      </div>
      <BasketSvg width={width} height={height} />
      <h6 className="text-center">Apples: {applesInTheBasket}</h6>
    </div>
  );
};

export default Basket;
