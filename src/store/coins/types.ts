export interface Coin {
  stats: {
    total: number;
    totalCoins: number;
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
