import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@store/index';

export const whitelabelAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3003/whitelabel-bank-api',
    prepareHeaders: (headers, { getState }) => {
      const { theme } = (getState() as RootState).theme;

      headers.set('authorization', `Bearer ${theme}`);

      return headers;
    },
  }),
  refetchOnFocus: true,
  endpoints: () => ({}),
});
