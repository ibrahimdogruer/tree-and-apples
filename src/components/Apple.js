import React from "react";
import { useSelector } from "react-redux";
import { AppleSvg } from "./svgs/index.js";

const Apple = ({ width = 40, height = 42 }) => {
  const { dropping, shaking, selectedApple, applesOnTheTree } = useSelector(
    (state) => state.basket
  );

  const apples = new Array(applesOnTheTree).fill(0);

  return (
    <div
      className={`apples-on-tree d-flex flex-wrap justify-content-center ${
        shaking ? "shake" : ""
      }`}
    >
      {apples?.map((x, i) => {
        return (
          <div
            key={"apple-on-tree-" + i}
            className={`apple-on-tree ${
              dropping && selectedApple === i ? "drop" : "apple-on-tree"
            }`}
          >
            <AppleSvg
              preserveAspectRatio="none"
              width={width}
              height={height}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Apple;
