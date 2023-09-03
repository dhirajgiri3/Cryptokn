import React from "react";
import { Link } from "react-router-dom";
import "./Erroe.css";

function Error() {
  return (
    <div className="error">
      <section className="page_404">
      
        <div className="err_top">
          <h1>404</h1>
          <div class="four_zero_four_bg"></div>
          <h2>Page Not Found</h2>
        </div>
        <div className="err_bottom">
          <p>It Look Like You Are Lost In This Beautiful Website. </p>
        </div>
        <div >
          <Link className="goback" to="/">
            Go to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Error;
