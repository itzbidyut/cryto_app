import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCryptoQuery } from "../services/cryptoApi";

export default function Crytocurrencies({ simplified }) {
  const [searchTerm, setSearchTerm] = useState("");
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptoQuery(count);
  const [cryptos, SetCryptos] = useState(cryptoList?.data?.coins);

  useEffect(() => {
    SetCryptos(cryptoList?.data?.coins);
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    SetCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return " Loading...";
  return (
    <div className="container mt-4">
      {!simplified && (
        <div className="w-25">
          <h3>List of Cryto currencies</h3>
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Search cryto"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="crytoItems row">
        {cryptos?.map((item) => (
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

                <p className="mt-3">Price : {millify(item.price)}</p>
                <p>rank : {millify(item.rank)}</p>
                <p>Daily change : {millify(item.change)} %</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
