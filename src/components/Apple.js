import React from "react";
import { useSelector } from "react-redux";
import { AppleSvg } from "./index.js/index.js";

const Apple = ({ width = "auto", height = "auto" }) => {
  const { dropping } = useSelector((state) => state.basket);

  return (
    <div className={dropping ? "apple d-block drop" : "apple d-none"}>
      <AppleSvg preserveAspectRatio="none" width={width} height={height} />
    </div>
  );
};

export default Apple;
