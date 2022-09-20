import HTMLReactParser from "html-react-parser";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
export default function CrytoDetails() {
  const { id } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(id);
  const cryptoDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1m", "3m", "3y", "6y"];

  //   const stats = [
  //     { title: "price to usd", value: `${cryptoDetails.price}` },
  //     { title: "Rank", value: `${cryptoDetails.rank}` },
  //   ];

  console.log(cryptoDetails);
  if (isFetching) return <Loading />;
  return (
    <div className="cryptoDetailsPage">
      <div className="header">
        <div className="container">
          <a className="flex" href={cryptoDetails.websiteUrl}>
            <img src={cryptoDetails.iconUrl} alt={cryptoDetails.name} />
            <h1>{cryptoDetails.name}</h1>{" "}
            <p className="sym">{cryptoDetails.symbol}</p>
          </a>
          <div className="details">
            <p>Rank- {cryptoDetails.rank}</p>
            <p>Price- ${cryptoDetails.btcPrice}</p>

            {/* <p>websiteUrl- {cryptoDetails.websiteUrl}</p> */}
          </div>
        </div>
      </div>

      <div className="body">
        <div className="container">
          <h3>
            What is <u>{cryptoDetails.name}</u>
          </h3>
          <div className="crytoDetails">
            {HTMLReactParser(cryptoDetails.description)}
          </div>
        </div>
      </div>
    </div>
  );
}
