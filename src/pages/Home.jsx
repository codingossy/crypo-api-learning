import React, { useEffect } from "react";
import Loader from "../components/loader/Loader";
import { useGetAllCryptosQuery } from "../services/CryptoApi";
import millify from "millify";
import CryptoCurr from "./CryptoCurr";
import News from "./News";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isFetching } = useGetAllCryptosQuery(20);
  console.log(data);
  const globalStatus = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold capitalize">crypto stats</h1>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center w-full gap-x-14 gap-y-10 my-10 bg-black rounded-md text-gray-300  p-4 text-xs md:text-sm">
        <div className="w-full flex flex-col text-center capitalize">
          <span className="text-center">Total Cryptos</span>
          <span className="text-green-500">{millify(globalStatus.total)}</span>
        </div>

        <div className="capitalize w-full flex flex-col text-center">
          <span className="text-center">top exchanges</span>
          <span className="text-green-500">
            {millify(globalStatus.totalExchanges)}
          </span>
        </div>

        <div className="w-full capitalize flex flex-col text-center">
          <span className="text-center">Total market cap</span>
          <span className="text-green-500">
            {millify(globalStatus.totalMarketCap)}
          </span>
        </div>

        <div className="capitalize w-full flex flex-col text-center">
          <span className="text-center">Total 24h volume</span>
          <span className="text-green-500">
            {millify(globalStatus.total24hVolume)}
          </span>
        </div>

        <div className="capitalize w-full flex flex-col text-center">
          <span className="text-center">Total Coins</span>
          <span className="text-green-500">
            {millify(globalStatus.totalCoins)}
          </span>
        </div>

        <div className="capitalize w-full flex flex-col text-center">
          <span className="text-center">Total markets</span>
          <span className="text-green-500">
            {millify(globalStatus.totalMarkets)}
          </span>
        </div>
      </div>

      {/* crypto sections with 20 items */}

      <div>
        <div className="my-10 flex justify-between items-center capitalize ">
          <h4 className="font-semibold md:text-xl">
            Top 20 Cryptos In The World
          </h4>
          <Link to={`/cyptocurr`}>
            <h4 className="text-blue-500 font-semibold">see more</h4>
          </Link>
        </div>
      </div>

        {/* cryto curreincy with 20 items */}
      <CryptoCurr simplified />

      <div>
        <div className="my-10 flex justify-between items-center capitalize ">
          <h4 className="font-semibold md:text-xl">Latest News from around the world</h4>
          <Link to={`/news`}>
            <h4 className="text-blue-500 font-semibold">show more</h4>
          </Link>
        </div>
      </div>

        {/* news with 20 items */}
      <News simplified />
    </>
  );
};

export default Home;
