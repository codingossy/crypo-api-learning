import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetAllCryptosQuery } from "../services/CryptoApi";
import Loader from "../components/loader/Loader";

const CryptoCurr = ({ simplified }) => {
  // show 20 on main screen and 100 on the cyptocurr page
  const count = simplified ? 20 : 100;
  // search
  const [searchTerm, setSearchTerm] = useState("");
  // data
  const { data: cryptosList, isFetching } = useGetAllCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  // this will run if cryptolist or searchterm changes
  useEffect(() => {
    // setCryptos(cryptosList?.data.coins)

    const filteredState = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredState);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;



  return (
    <div className="my-5">
      {/* search and simplified */}
      {!simplified && (
        
      <div className="my-4 w-52 p-1">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-1 px-1 rounded-sm w-full outline-none text-black"
        type="text"
        placeholder="search cryptocurrency"
      />
    </div>

      )}
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10 place-items-center w-full p-1 text-gray-300">
        {cryptos?.map((crypts) => (
          <div
            className="w-full h-full p-4 border hover:scale-90 transition-all duration-300 ease-in-out rounded-sm"
            key={crypts.uuid}
          >
            <Link to={`/crypto/${crypts.uuid}`}>
              <div className="flex justify-between items-center">
                <span className="flex gap-x-3 items-center">
                  <p className="text-sm font-semibold">{`${crypts.rank}`}</p>
                  <h4 className="font-semibold text-blue-500">{crypts.name}</h4>
                </span>
                <img
                  src={crypts.iconUrl}
                  alt=""
                  className="w-10 h-10 md:h-12 md:w-12 object-cover"
                />
              </div>

              <div className="text-start my-4">
                <p>Price: {millify(crypts.price)}</p>
                <p>market Cap: {millify(crypts.marketCap)}</p>
                <p>Daily Change: {crypts.change} %</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCurr;
