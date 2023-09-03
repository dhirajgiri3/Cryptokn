import React, { useState, useEffect } from "react";
import Header from "./Header";
import { server } from "../index";
import axios from "axios";
import "./News.css";
import { Fade } from "react-awesome-reveal";
import Loader from "./Loader";
import Footer from "./Footer";

function News() {
  const [querry, setQuerry] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const FetchExchangeList = async () => {
      try {
        const { data } = await axios.get(`${server}/news.data`);
        setNews(data.data);
        console.log(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    FetchExchangeList();
  }, []);

  const cursor = document.querySelector("#cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
  });

  return (
    <div>
      
      {loading ? (
        <Loader />
      ) : (
        <>
        <Header querry={querry} setQuerry={setQuerry} />
          <div className="container news">
            <div className="news_main">
              <Fade>
                {news
                  .filter((newss) =>
                    (newss.title || newss.description)
                      .toLowerCase()
                      .includes(querry)
                  )
                  .map((newss) => (
                    <div className="news_card">
                      <div className="news_card_body blog">
                        <a target="_blank" href={newss.url}>
                          <div className="news_img">
                            <img src={newss.thumb_2x} alt="" />
                          </div>
                        </a>
                        <div className="news_info">
                          <h2 className="news_title">{newss.title}</h2>
                          <h4 className="news_description">
                            {newss.description}
                          </h4>
                          <a
                            className="news_readbtn"
                            target="_blank"
                            href={newss.url}
                          >
                            <button className="read_btn">Read More</button>
                          </a>

                          <p className="news_author"> {newss.author} </p>
                        </div>
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
  );
}

export default News;
