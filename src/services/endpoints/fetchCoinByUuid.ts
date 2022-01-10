import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'd3597aaa61msh65299b50cf5a69ap181a6ejsn130ad146c48e',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });
export const fetchCoinByUuid = createApi({
  reducerPath: 'getCoinApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoin: builder.query<{ data: any }, string>({
      query: (id: string) => createRequest(`/coin/${id}`),
    }),
  }),
});
export const { useGetCoinQuery } = fetchCoinByUuid;
