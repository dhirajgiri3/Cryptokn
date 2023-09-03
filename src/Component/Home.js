import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Header2 from "./Header2";
import { Link } from "react-router-dom";
import "react-nice-scroll/dist/styles.css";
import Footer from "./Footer";
import "./Home.css";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./Loader";

function Home() {
  const [loading, setLoading] = useState(true);

  const first = useRef();
  const second = useRef();
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.fromTo(
      first.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 1,
        ease: Power4.out,
      }
    );
    tl.fromTo(
      second.current,
      {
        opacity: 0.7,
        y: 30,
      },
      {
        opacity: 1,
        y: 300,
        duration: 1,
        ease: "linear",

        scrollTrigger: {
          trigger: ".home_hero",
          start: "95% 94%",
          end: "bottom center",
          scrub: 1,
        },
      },
      "-=1"
    );
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header2 />
          <div className="home">
            <div className="containier">
              <div className="home_hero_bg">
                <div className="home_hero">
                  <div className="home_hero_left" ref={first}>
                    <h1>Get the latest crypto news</h1>
                    <p> Charts & stats in one mobile wallet.</p>
                    <Link to="/news">
                      <button>Explore News</button>
                    </Link>
                  </div>
                  <div className="home_hero_right" ref={second}>
                    <img src="https://assets.website-files.com/628264a917ada63feba04851/628b6e3059b07ee4098906e4_Group%2047.png" />
                  </div>
                </div>
                <div className="home_2">
                  <div className="home_2_left">
                    <img
                      src="https://toka.b-cdn.net/wp-content/uploads/2022/03/cards-24.png"
                      alt=""
                    />
                  </div>
                  <div className="home_2_right">
                    <h1>Make your life easier with Cryptokn.</h1>
                  </div>
                </div>
                <div className="home_3">
                  <img
                    src="https://toka.b-cdn.net/wp-content/uploads/2022/03/wedgt.png"
                    alt=""
                  />
                </div>
                <div className="home_4">
                  <div className="home_4_left">
                    <img
                      src="https://toka.b-cdn.net/wp-content/uploads/2022/03/ervress.png"
                      alt=""
                    />
                  </div>
                  <div className="home_4_right">
                    <h1>Let Crypto Work Hard For your Future</h1>
                    <p> Keep Yourself Update About Crypto World </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
