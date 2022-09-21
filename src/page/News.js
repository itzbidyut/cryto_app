import React, { useState } from "react";
import Loading from "../components/Loading";
import { useGetCryptoNewsQuery } from "../services/cryptoNews";
import NewsItem from "../components/NewsItem";

export default function News({ simplified }) {
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 9 : 100,
  });
  if (isFetching) return <Loading />;

  return (
    <>
      <div className="newsPage">
        <h1 className="text-center mb-5">Cryto Currency News</h1>
        <div className="container">
          <div className="row">
            {data.value.map((item) => (
              <NewsItem item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
