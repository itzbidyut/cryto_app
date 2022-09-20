import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";

import millify from "millify";
import Loading from "../components/Loading";
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
            {/* <p>Price- </p> */}

            {/* <p>websiteUrl- {cryptoDetails.websiteUrl}</p> */}
          </div>
        </div>
      </div>

      <div className="body">
        <div className="container">
          <div className="cryto-details-list">
            <div className="cryto-details-items">
              <div className="cryto-details-item">
                <p>{cryptoDetails.name} price</p>
                <p>$ {cryptoDetails.btcPrice}</p>
              </div>
              <div className="cryto-details-item">
                <p>24h Volume</p>
                <p>$ {millify(cryptoDetails["24hVolume"])}</p>
              </div>
              <div className="cryto-details-item">
                <p>Number Of Exchanges</p>
                <p>{cryptoDetails["numberOfExchanges"]}</p>
              </div>
            </div>
            <div className="cryto-details-items">
              <div className="cryto-details-item">
                <p>Market Cap</p>
                <p>$ {millify(cryptoDetails.marketCap)} </p>
              </div>
              <div className="cryto-details-item">
                <p>All Time High</p>
                <p>$ {millify(cryptoDetails.allTimeHigh.price)}</p>
              </div>{" "}
              <div className="cryto-details-item">
                <p>Number Of Markets</p>
                <p>{cryptoDetails["numberOfMarkets"]}</p>
              </div>
            </div>
          </div>
          <h3 className="mt-5 pt-5">
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
