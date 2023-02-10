import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TreeSvg } from "./svgs/index.js";
import {
  putAppleToBasket,
  toggleShaking,
  toggleDroping,
} from "../stores/basket";

const Tree = ({ width, height }) => {
  const { shaking, applesOnTheTree } = useSelector((state) => state.basket);
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
    let rnd = Math.floor(Math.random() * applesOnTheTree);
    console.log(`apple ${rnd} is falling...`);
    dispatch(toggleDroping({ dropping: true, selectedApple: rnd }));

    createDropAnimation(rnd);

    setTimeout(() => {
      console.log("apple added to basket!");
      dispatch(toggleDroping({ dropping: false, selectedApple: null }));
      dispatch(putAppleToBasket());
    }, 2500);
  };

  const createDropAnimation = (selectedIndex) => {
    const head = document.getElementsByTagName("head")[0];

    let keyframes = `@keyframes drop {
        0% {
            transform-origin: center;
            opacity: 1;
        }
        20% {
            transform:
                translate3d(0, 20px, 0) rotate3d(0, 0, 1, -10deg);
            opacity: 1;
        }
        40%,
        45% {
            transform:
                translate3d(0, -20px, 0) rotate3d(0, 0, 1, 10deg);
            opacity: 1;
        }
        to {
            opacity: 1;
            transform:
                translate3d(0, ${
                  510 - Math.floor(selectedIndex / 4) * 60 + "px"
                }, 0) rotate3d(0, 0, 0, 0deg);
        }
    }`;

    let style = document.createElement("STYLE");
    style.innerHTML = keyframes;
    head.appendChild(style);
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
