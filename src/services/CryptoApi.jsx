import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders = {
    // from rapid api
    'X-RapidAPI-Key': '69e7525eb0msh1d739d09d2821bep1fdea6jsn8f85e1329207',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};
// base url
const baseUrl = "https://coinranking1.p.rapidapi.com"
// dynamic to get urls firectly
const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        // give any name
        // builder to get the data

        // get all crytpos
        getAllCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        // get a crypto detail
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),

        // get crypto history
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),

         // Note: To access this endpoint you need premium plan
         getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
    })
})


export const { useGetAllCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi