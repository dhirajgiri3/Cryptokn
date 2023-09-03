import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack, VStack } from "@chakra-ui/react";
import Loader from "./Loader";
import { Bounce, Fade, Slide, Roll, Scroll } from "react-awesome-reveal";
import "./Nft.css";
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
        const { data } = await axios.get(`${server}/nfts/list`);
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
              <div className="nft_main">
                <Header querry={querry} setQuerry={setQuerry} />
                <Fade>
                  {exchanges
                    .filter((exchange) =>
                      exchange.name.toLowerCase().includes(querry)
                    )
                    .map((exchange) => (
                      <div className="nft_main2">
                        <div className="nft_card">
                          <h1>{exchange.name}</h1>
                          <h3> {exchange.symbol} </h3>
                          <h3> {exchange.contract_address} </h3>
                          <h3> {exchange.asset_platform_id} </h3>
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
