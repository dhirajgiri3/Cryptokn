import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack, VStack } from "@chakra-ui/react";
import Loader from "./Loader";
import { Bounce, Fade, Slide, Roll, Scroll } from "react-awesome-reveal";
import "./Exchanges.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Exchanges() {
  const [exchanges, setExchanges] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [querry, setQuerry] = useState("");

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
        console.log(data);
        if (!data.url) {
          data.url = "https://www.google.com/";
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="container">
              <div className="exchange_main">
                <Header querry={querry} setQuerry={setQuerry} />
                <Fade>
                  {exchanges
                    .filter((exchange) =>
                      exchange.name.toLowerCase().includes(querry)
                    )
                    .map((exchange) => (
                      <div className="exchange_card" title={exchange.name}>
                        <div className="exchange_card_img">
                          <img src={exchange.image} alt={exchange.name} />
                        </div>
                        <div className="exchange_card_body" alt={exchange.name}>
                          <li>
                            <p className="exchange_rank" alt={exchange.name}>
                              {" "}
                              #{exchange.trust_score_rank}
                            </p>
                            <h3 alt={exchange.name}>{exchange.name}</h3>

                            <p>Year: {exchange.year_established}</p>
                            <p>Trust Score : {exchange.trust_score} </p>
                            <p className="trade">
                              Trade Volume 24h : {exchange.trade_volume_24h_btc}{" "}
                            </p>
                            <a
                              className="visit"
                              href={exchange.url}
                              target="_blank"
                              alt={exchange.name}
                            >
                              Visit
                            </a>
                          </li>
                        </div>
                      </div>
                    ))}
                </Fade>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default Exchanges;
