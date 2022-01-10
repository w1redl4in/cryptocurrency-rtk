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
