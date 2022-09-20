import React from "react";
import millify from "millify";

import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../services/cryptoApi";
import Crytocurrencies from "./Crytocurrencies";
import Loading from "../components/Loading";

export default function Home() {
  const { data, isFetching } = useGetCryptoQuery(10);
  const stats = data?.data?.stats;
  if (isFetching) return <Loading />;
  return (
    <>
      <div className="home">
        <div className="hone-bg"></div>
        <div className="container">
          <h1 className="">Global Cryto Stats</h1>
          <div className="center">
            <div className="line"></div>
          </div>
          <div className="total-item-list">
            <div className="total-item">
              <p className="currency-totol">Total cryto Currencies -</p>
              <p className="currency-result"> {stats.total}</p>
            </div>
            <div className="total-item">
              <p className="currency-totol">Total Exchanges -</p>
              <p className="currency-result">{millify(stats.totalExchanges)}</p>
            </div>
            <div className="total-item">
              <p className="currency-totol">Total Market Cap -</p>
              <p className="currency-result">{millify(stats.totalMarketCap)}</p>
            </div>
            <div className="total-item">
              <p className="currency-totol">Total 24h Volume -</p>
              <p className="currency-result">{millify(stats.total24hVolume)}</p>
            </div>
            <div className="total-item">
              <p className="currency-totol">Total Markets - </p>
              <p className="currency-result">{millify(stats.totalMarkets)} </p>
            </div>
          </div>

          <hr></hr>
        </div>
        <div className="container">
          <h2 className="">Top 10 Cryto Currencies in the world</h2>
          <Link to="/cryto-currencies">Show more</Link>
        </div>
        <div className="crytoItems">
          <Crytocurrencies simplified />
        </div>
      </div>
    </>
  );
}
