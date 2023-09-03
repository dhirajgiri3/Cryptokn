import { HStack, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header2.css";
import { server } from "../index";

function Header2({ querry, setQuerry }) {
  const [sidebars, setSidebars] = useState(false);

  const Search = (data) => {
    return data.filter((item) => {
      return item.name.toLowerCase().includes(querry.toLowerCase());
    });
  };

  const Header2 = document.querySelector(".Header2");
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      Header2.style.top = "0";
    } else {
      Header2.style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  };

  const showSidebar = () => {
    setSidebars(!sidebars);
  };
  return (
    <>
      <div className="header2">
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
            <a href="https://www.instagram.com/_.dhiraj._.03/" target="_blank">
              <i class="fa-brands fa-instagram icon insta" aria-hidden="true"></i>
            </a>
            <a href="https://mobile.twitter.com/freelancerr_7" target="_blank">
              <i class="fa-brands fa-twitter icon tweet" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/dhirajgiri/" target="_blank"><i class="fa-brands fa-linkedin linked icon" aria-hidden="true"></i></a>
            
          </div>
        </div>
      </div>

      {/* ############### sidebar  */}

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
            {/* <div className="sidebar_img1">
              <img src="https://img.freepik.com/free-vector/flat-design-cryptocurrency-concept_23-2149166905.jpg?w=2000" alt="Crypto" />
            </div> */}
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

export default Header2;
