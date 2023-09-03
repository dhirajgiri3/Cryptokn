import { ClassNames } from "@emotion/react";
import React from "react";
import "./Loader2.css"

function Loader() {
  return (
    <>
      <div class="loader2">
        <div class="loader2__inner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
