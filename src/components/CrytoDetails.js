import HTMLReactParser from "html-react-parser";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  if (isFetching) return " Loading...";
  return (
    <div className="mt-5 container">
      <img
        src={cryptoDetails.iconUrl}
        alt={cryptoDetails.name}
        className="crytoIcon pr-3"
      />
      <h1>{cryptoDetails.name}</h1>
      <p>Rank- {cryptoDetails.rank}</p>
      <p>btcPrice- {cryptoDetails.btcPrice}</p>
      <p>symbol- {cryptoDetails.symbol}</p>
      <p>websiteUrl- {cryptoDetails.websiteUrl}</p>
      <h3>
        What is <u>{cryptoDetails.name}</u>
      </h3>
      <div className="crytoDetails">
        {HTMLReactParser(cryptoDetails.description)}
      </div>
    </div>
  );
}
