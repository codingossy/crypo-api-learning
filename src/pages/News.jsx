import React, { useState } from "react";
import moment from "moment";
import Loader from "../components/loader/Loader";
import { useGetCryptoNewsQuery } from "../services/CryptoNews";
import { Link } from "react-router-dom";
import { useGetAllCryptosQuery } from "../services/CryptoApi";

const News = ({ simplified }) => {
  // for the filter and options
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  // getting the news data
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  });
  // getting all the cryptos
  const { data } = useGetAllCryptosQuery(100);
  // setting the global news to get the data from the newsapi
  const globalNews = cryptoNews?.articles;
  // console.log(globalNews);

  // if loading
  if (isFetching) return <Loader />;

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-x-14 gap-y-10 my-10">
        {globalNews.map((news, id) => (
          <div className="w-full h-full border p-4" key={id}>
            <img
              src={news.urlToImage}
              alt=""
              className="w-full h-52 object-cover"
            />
            <div className="my-4">
              <h3 className="text-xl text-center text-blue-500">
                <a href={news.url} target="/blank">
                  {news.title}
                </a>
              </h3>
              <p className="my-3 text-center">{news.description}</p>
              <p className="my-2 text-green-600">{news.source.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
