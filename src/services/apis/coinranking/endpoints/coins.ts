import { coinRankingAPI } from '..';

export interface Coin {
  stats: {
    total: number;
    totalCoins: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
  };
  coins: [
    {
      uuid: string;
      iconUrl: string;
      price: number;
      color: string;
      name: string;
      rank: number;
    }
  ];
}

const coins = coinRankingAPI.injectEndpoints({
  endpoints: (build) => ({
    getCoins: build.query<{ data: Coin }, void>({
      query: () => ({
        url: `/coins`,
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
export const { useGetCoinsQuery } = coins;
