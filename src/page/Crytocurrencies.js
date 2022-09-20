import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCryptoQuery } from "../services/cryptoApi";

import Loading from "../components/Loading";
export default function Crytocurrencies({ simplified }) {
  const [searchTerm, setSearchTerm] = useState("");
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptoQuery(count);
  const [cryptos, SetCryptos] = useState(cryptoList?.data?.coins);

  useEffect(() => {
    SetCryptos(cryptoList?.data?.coins);
    if (searchTerm.length > 0) {
      const filteredData = cryptoList?.data?.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm)
      );
      if (filteredData.length > 0) {
        SetCryptos(filteredData);
      } else {
        SetCryptos();
      }
    }
  }, [cryptoList, searchTerm]);

  if (isFetching) return <Loading />;
  return (
    <div className="container ">
      {!simplified && (
        <div className="Cryto-header">
          <h3 className=" pb-3">List of Cryto currencies</h3>
          <div className="input-group w-25">
            <input
              className=" form-control"
              placeholder="Search cryto"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className="cryptoDetailsPage">
        <div className="crytoItems row">
          {cryptos ? (
            cryptos.map((item) => (
              <div className="col-3 mt-3" key={item.uuid}>
                <Link to={`/cryto-currencies/${item.uuid}`}>
                  <div className="crytoItem ">
                    <div className="crytoBox">
                      <p className="crytoName">{item.name}</p>
                      <p className="crytoName">{item.id}</p>
                      <img
                        src={item.iconUrl}
                        className="crytoIcon"
                        alt={item.name}
                      />
                    </div>

                    <p className="mt-3">Price : $ {millify(item.price)}</p>
                    <p>rank : {millify(item.rank)}</p>
                    <p>Daily change : {millify(item.change)} %</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h3 className="text-center mt-5">Cryto currency not found </h3>
          )}
        </div>
      </div>
    </div>
  );
}
