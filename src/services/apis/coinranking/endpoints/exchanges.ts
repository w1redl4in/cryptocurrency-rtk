import { coinRankingAPI } from '..';

export interface Exchange {
  stats: {
    '24hVolume': string;
    total: number;
  };
  exchanges: [
    {
      uuid: string;
      name: string;
      iconUrl: string;
      coinrankingUrl: number;
      numberOfMarkets: number;
      '24hVolume': string;
      marketShare: string;
      verified: boolean;
      recommended: boolean;
      rank: number;
    }
  ];
}

const exchanges = coinRankingAPI.injectEndpoints({
  endpoints: (build) => ({
    getExchanges: build.query<{ data: Exchange }, void>({
      query: () => ({
        url: `/exchanges`,
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key':
            'd3597aaa61msh65299b50cf5a69ap181a6ejsn130ad146c48e',
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetExchangesQuery } = exchanges;
