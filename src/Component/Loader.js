import { ClassNames } from "@emotion/react";
import React from "react";
import "./Loader.css"

function Loader() {
  return (
    <>
      <div class="loader">
        <div class="loader__inner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
