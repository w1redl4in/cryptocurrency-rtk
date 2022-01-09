export interface Coin {
  stats: {
    total: number;
    totalCoins: number;
  };
  coins: [
    {
      iconUrl: string;
      price: number;
      color: string;
      name: string;
      rank: number;
    }
  ];
}
