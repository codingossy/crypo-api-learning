import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = `https://newsapi.org`

const createRequest = (url) => ({url})


export const cryptoApiNews = createApi({
    reducerPath: 'cryptoApiNews',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => createRequest(`/v2/top-headlines?country=us&apiKey=4cb0658e0ad04300aa4fabe85a038400`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoApiNews