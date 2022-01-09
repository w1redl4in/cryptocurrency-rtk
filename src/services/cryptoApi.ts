import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Coin } from '../store/coins/types';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'd3597aaa61msh65299b50cf5a69ap181a6ejsn130ad146c48e',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query<{ data: Coin }, string>({
      query: () => createRequest('/coins'),
    }),
  }),
});
export const { useGetCryptoQuery } = cryptoApi;
