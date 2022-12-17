import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoApi";
import { cryptoApiNews } from "../services/CryptoNews";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoApiNews.reducerPath]: cryptoApiNews.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cryptoApi.middleware,
      cryptoApiNews.middleware
    ]),
});

export default store;
