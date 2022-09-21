import React from "react";
import moment from "moment";

import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useGetCryptoNewsQuery } from "../services/cryptoNews";
const demoImage = `https://www.bing.com/th?id=OVFT.hiy0y5HkegaWBVZYX1PKmS&pid=News`;
export default function NewsItemHome({ simplified }) {
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 9 : 100,
  });
  if (isFetching) return <Loading />;
  console.log(data);
  return (
    <div className="NewsItemHome">
      <h2 className="">Latest Crypto News</h2>
      <Link to="/news">Show more</Link>
      <div className="row mt-5">
        {data.value.map((item) => (
          <div className="col-md-4">
            <a rel="noreferrer" target="_blank" href={item.url}>
              <div className="itemBox">
                <div>
                  <img
                    className="featureImage"
                    src={item?.image?.thumbnail?.contentUrl || demoImage}
                    alt="coinimage"
                  />
                </div>
                <div>
                  <p className="title">{item.name.slice(0, 70)}...</p>
                  <p className="des">{item?.description.slice(0, 150)}...</p>

                  <div className="providerBox">
                    <div className="providerDetails">
                      <img
                        className="provider"
                        src={
                          item?.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                        alt="icon"
                      />
                      <p className="providerNmae">{item?.provider[0]?.name}</p>
                    </div>
                    <p className="time">
                      {moment(item.datePublished).startOf("ss").fromNow()}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
