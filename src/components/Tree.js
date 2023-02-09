import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TreeSvg } from "./index.js";
import { addApple, toggleShaking, toggleDroping } from "../stores/basket";

const Tree = ({ width = "auto", height = "auto" }) => {
  const { shaking } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const shakeTree = () => {
    console.log("tree is shaking...");
    dispatch(toggleShaking(true));
    setTimeout(() => {
      dispatch(toggleShaking(false));

      dropAnApple();
    }, 3000);
  };

  const dropAnApple = () => {
    console.log("apple is falling...");
    dispatch(toggleDroping(true));
    setTimeout(() => {
      dispatch(toggleDroping(false));

      addAppleToBasket();
    }, 2500);
  };

  const addAppleToBasket = () => {
    console.log("apple added to basket");
    dispatch(addApple());
  };

  return (
    <div
      onClick={shaking ? null : () => shakeTree()}
      className={shaking ? "shake" : null}
      style={{ cursor: shaking ? "not-allowed" : "pointer" }}
    >
      <TreeSvg width={width} height={height} fill="#ccc" />
    </div>
  );
};

export default Tree;
