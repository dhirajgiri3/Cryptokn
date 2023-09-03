import { HStack, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { server } from "../index";
import Footer from "./Footer";

function Header({ querry, setQuerry }) {
  const [sidebars, setSidebars] = useState(false);

  const Search = (data) => {
    return data.filter((item) => {
      return item.name.toLowerCase().includes(querry.toLowerCase());
    });
  };

  const header = document.querySelector(".header");
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  };

  const showSidebar = () => {
    setSidebars(!sidebars);
  };
  return (
    <>
      <div className="header">
        <div className="menu">
          <div className="header_1">
            <div className="menu_top">
              <div className="logo">
                <Link to="/">
                  <h1>Cryptokn.</h1>
                </Link>
              </div>
              <div className="bars" onClick={showSidebar}>
                <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </div>

            <div className="links">
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
                <Link to="/nfts">
                  <li>NFT's</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="header_2">
            <input
              type="text"
              placeholder="Search Cryptocurrency"
              value={querry}
              onChange={(e) => setQuerry(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={sidebars ? "sidebar active" : "sidebar"}>
        <div className="sidebar_menu">
          <div className="sidebar_top">
            <div className="sidebar_logo">
              <Link to="/">
                <h1>Cryptokn.</h1>
              </Link>
            </div>
            <div className="sidebar_bar" onClick={showSidebar}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>

          <div className="sidebar_links">
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
              <Link to="/nfts">
                <li>NFT's</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
