import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { server } from "../index";
import { coinNmae } from "./Coins";
import axios from "axios";
import "./Chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import Loader from "./Loader";
import Loader2 from "./Loader2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

function Chart({ name }) {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchChart = async () => {


      try {
        const { data } = await axios.get(
          `${server}/coins/${name}/market_chart?vs_currency=usd&days=max&interval=daily`
        );
        // /bitcoin/market_chart?vs_currency=usd&days=max&interval=daily
        setChartData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchChart();
  }, []);

  return (
    <div>
      <div className="chart">
        {loading ? (
            <Loader2 />
        ) : (
          <>
            {chartData.prices ? (
              <Line
                data={{
                  labels: chartData.prices.map((item) => item[0]),
                  datasets: [
                    {
                      label: "Price",
                      data: chartData.prices.map((item) => item[1]),
                      backgroundColor: "rgba(255, 99, 132, 0.2)",
                      borderColor: "rgba(255, 99, 132, 1)",
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                }}
              />
            ) : (
              // <div className="loading_container">
              //   <h1 className="loading_chart">Loading...</h1>
              // </div>
                <Loader2 />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Chart;
