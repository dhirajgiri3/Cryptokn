import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer_top">
          <div className="left">
            <div className="footer_logo">
              <Link to="/">
                <h1>Cryptokn.</h1>{" "}
              </Link>
              <img
                src="https://toka.b-cdn.net/wp-content/uploads/2022/05/rkgmv.png"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <div className="footer_links">
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/coins">
                  <li>Coins</li>
                </Link>
                <Link to="/exchanges">
                  <li>Exchanges</li>
                </Link>
                <Link to="/news">
                  <li>News</li>
                </Link>
                <Link to="/trending">
                  <li>Trending</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            ©2023 Cryptokn. All rights reserved by{" "}
            <span>
              {" "}
              <a
                href="https://www.linkedin.com/company/cyper-studio/?viewAsMember=true"
                target="_blank"
              >
                Cyper Studio
              </a>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
