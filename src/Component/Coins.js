import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import { Card } from "@chakra-ui/react";
import { Bounce, Fade, Slide, Roll, Scroll, Hinge } from "react-awesome-reveal";
import "./Coin.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  FixedElement,
  GellyElement,
  ParallaxImage,
  ScrollContainer,
} from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import Chart from "./Chart";

function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [querry, setQuerry] = useState("");
  const [page, setPage] = useState(0);
  const [url, seturl] = useState(
    `${server}/coins/bitcoin/market_chart?vs_currency=usd&days=max&interval=daily`
  );

  const userPerPage = 12;
  const pagesVisited = page * userPerPage;

  const displayUsers = coins
    .slice(pagesVisited, pagesVisited + userPerPage)
    .filter((coin) => coin.name.toLowerCase().includes(querry))
    .map((coin) => {
      return (
        <Bounce>
          <div className="coin_mains">
            <div className="coin_card" key={coin.id}>
              <div className="coin_card_body" alt={coin.name}>
                <img className="coin_img" src={coin.image} alt={coin.name} />
                <p className="rank" alt={coin.name}>
                  #{coin.market_cap_rank}
                </p>

                <h3 className="coin_name" alt={coin.name}>
                  {coin.name}
                </h3>
                <p className="coin_symbol" alt={coin.name}>
                  {coin.symbol}
                </p>

                <Chart name={coin.id} />

                <p className="coin_price" title="Price in USD" alt={coin.name}>
                  <span> ${coin.current_price}</span>
                </p>

                <p
                  className={
                    coin.price_change_percentage_24h < 0
                      ? "coin_percent_reds"
                      : "coin_percent_greens"
                  }
                  title="Price Change in 24 hours"
                  alt={coin.name}
                >
                  <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
                </p>
                <p
                  className="coin_marketcap"
                  title="Market Cap"
                  alt={coin.name}
                >
                  Mkt Cap ~ ${coin.market_cap}
                </p>

                <p className="coin_volume" title="Total Volume" alt={coin.name}>
                  Volume ~ ${coin.total_volume}
                </p>
                <p className="coin_high" alt={coin.name}>
                  High Price (24h) ~ <span>${coin.high_24h}</span>
                </p>
                <p className="coin_low" alt={coin.name}>
                  Low Price (24h) ~ <span>${coin.low_24h}</span>
                </p>

                <p className="coin_volume" alt={coin.name}>
                  Circulating Supply ~ {coin.circulating_supply} {coin.symbol}
                </p>
                <p className="coin_volume" alt={coin.name}>
                  Total Supply ~ {coin.total_supply} {coin.symbol}
                </p>
              </div>
            </div>
          </div>
        </Bounce>
      );
    });

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets/?vs_currency=usd&order=market_cap_desc&per_page=1000&page=${page}&sparkline=false`
        );
        setCoins(data);
        setLoading(false);
        console.log(data);
        console.log(data[1].name);


        if (!data.url) {
          data.url = "https://www.google.com/";
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header querry={querry} setQuerry={setQuerry} />
            <div className="container">
              <div className="coin_heading">
                <h1>Information About Coins</h1>
                <h1>Information About Coins</h1>
                <h1>Information About Coins</h1>
              </div>
              <div className="coin_main">
                <Fade>{displayUsers}</Fade>
                <div className="pagination">
                  <button
                    className="btn"
                    onClick={() => setPage((page) => Math.max(page - 1, 0))}
                  >
                    {page - 1 < 0 ? page : page - 1}{" "}
                    <span>
                      <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                    </span>{" "}
                  </button>
                  <button
                    className="btn"
                    onClick={() =>
                      setPage((page) => (page + 1 > 10 ? page : page + 1))
                    }
                  >
                    {" "}
                    <span>
                      <i
                        class="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                    {page + 1 > 10 ? page : page + 1}
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export const coinNmae = "bitcoin";

export default Coins;
