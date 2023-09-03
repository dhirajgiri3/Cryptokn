import React, { useState, useEffect, lazy } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import Header from "./Header";
import "./Trending.css";
import { Fade, Roll, Slide, Hinge } from "react-awesome-reveal";
import Footer from "./Footer";

function Trending() {
  const [trend, setTrend] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [querry, setQuerry] = useState("");
  const [num, setNum] = useState(1);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const { data } = await axios.get(`${server}/search/trending`);
        setTrend(data.coins);
        setLoading(false);
        setNum(num++);
        console.log(data.coins);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchTrend();
  });

  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Header querry={querry} setQuerry={setQuerry} />
          <div className="cover">
            <div className="container-mx">
                <Slide>
              {trend
                .filter((trend) => trend.item.id.toLowerCase().includes(querry))
                .map((trend) => (
                  <div>
                    <div className="trending_main">
                      <div className="trending_card">
                        <div className="trending_img">
                          <img src={trend.item.thumb} alt={trend.name} loading={lazy} />
                        </div>
                        <h3 className="trending_rank" title="CryptoCurrency Rank" >#{trend.item.market_cap_rank}</h3>
                        <div className="trending_info">
                          <h1>{trend.item.id}</h1>
                          <h3>{trend.item.symbol}</h3>
                                                    
                          <h5 title="Price In Bitcoin"> {trend.item.price_btc} BTC</h5>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
               </Slide>
            </div>
          </div>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default Trending;
