import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import Loader from "../components/loader/Loader";
import DOMPurify from "dompurify";
import LineChart from "../components/linechart/LineChart";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/CryptoApi";
import {
  AiOutlineCheck,
  AiOutlineDollar,
  AiOutlineDollarCircle,
  AiOutlineExclamation,
  AiOutlineExclamationCircle,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineNumber,
  AiOutlineStop,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
} from "react-icons/ai";

const CryptoDeets = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState("7d");
  // getting the detials data
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  // getting the history data
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });

  // for the details
  // lets assigin the data to a new const to call with
  // data = data from rtk
  // data = data from api
  // coin = individual coin
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);

  // TIME DURATIONS
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  // STATS DATA
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <AiOutlineDollar />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <AiOutlineNumber /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <AiOutlineDollarCircle />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];

  // GENERIC STATS DATA
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <AiOutlineFund />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <AiOutlineCheck />
      ) : (
        <AiOutlineStop />
      ),
      icon: <AiOutlineExclamation />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamationCircle />,
    },
  ];

  return (
    <div className="my-5 p-2 md:p-4">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl text-green-500 mb-4 capitalize">
          {cryptoDetails?.name} ({cryptoDetails?.symbol})
        </h1>
        <p className="capitalize text-sm md:text-xl">
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </div>

      {/* options and line chart */}
      <div className="flex flex-col gap-y-10">
        {/* <select
          defaultValue="7d"
          className="p-1 rounded-sm outline-none text-black px-2 w-32"
          placeholder="Select Timeperiod"
          onChange={(value) => setTimeperiod(value)}
        >
          {time.map((date) => (
            <option key={date}>{date}</option>
          ))}
        </select> */}

        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
      </div>

      {/* bitcoin stats */}

      <div className="flex flex-col md:flex-row gap-x-10 gap-y-10 justify-between my-10">
        {/* bit stats */}
        <div className="w-full">
          <h1 className="text-2xl mb-3 capitalize text-blue-500">
            {cryptoDetails?.name} value statistics
          </h1>
          <p>
            An overview showing the statistics of {cryptoDetails?.name}, such as
            the base and quote currency, the rank, and trading volume.
          </p>

          {stats.map(({ icon, title, value }) => (
            <div className="my-5 flex items-center justify-between border-b ">
              <span className="flex items-center gap-x-5 mb-4">
                <h4>{icon}</h4>
                <h4 className="text-blue-500 font-semibold">{title}</h4>
              </span>

              <p>{value}</p>
            </div>
          ))}
        </div>
        {/* other stats */}

        <div className="w-full">
          <h1 className="text-2xl capitalize text-blue-500 mb-3">
            other coin stats
          </h1>
          <p>
            An overview showing the statistics of {cryptoDetails?.name}, such as
            the base and quote currency, the rank, and trading volume.
          </p>

          {genericStats.map(({ icon, title, value }) => (
            <div className="my-5 flex items-center justify-between border-b ">
              <span className="flex items-center gap-x-5 mb-4">
                <h4>{icon}</h4>
                <h4 className="text-blue-500 font-semibold">{title}</h4>
              </span>

              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT IS BITCOIN and link */}

      <div className="flex flex-col md:flex-row gap-x-10 gap-y-10 justify-between my-10">
        {/* what is btc */}
        <div className="w-full">
          <div>
            <h1 className="text-2xl capitalize text-blue-500">
              what is {cryptoDetails?.name}?
            </h1>

            <div className="my-5 ">
              <p
                className="w-full"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(cryptoDetails?.description),
                }}
              ></p>
            </div>
          </div>
        </div>

        {/* links */}
        <div className="w-full">
          <h1 className="text-2xl text-left capitalize text-blue-500 mb-3">
            {cryptoDetails?.name} Links
          </h1>

          <div className="flex flex-col gap-y-4 capitalize">
            <p>url: {cryptoDetails?.coinrankingUrl}</p>
            <p>rank: {cryptoDetails?.rank}</p>
            <p>price: {cryptoDetails?.price}</p>
            <p>color: {cryptoDetails?.color}</p>
            <p>uuid: {cryptoDetails?.uuid}</p>
            <p>symbol: {cryptoDetails?.symbol}</p>
            <p>website: {cryptoDetails?.websiteUrl}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDeets;
