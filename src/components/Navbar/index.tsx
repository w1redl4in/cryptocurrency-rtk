import { Text, Tabs, Display, Image } from '@geist-ui/react';

export const Navbar = () => {
  const tabs = [
    {
      label: 'Dashboard',
      value: 'Dashboard',
    },
    {
      label: 'Cryptocurrencies',
      value: 'Cryptocurrencies',
    },
    {
      label: 'Exchanges',
      value: 'Exchanges',
    },
    {
      label: 'News',
      value: 'News',
    },
  ];

  return (
    <>
      <Display caption={<Text h2>Cryptocurrency</Text>}>
        <Image width="100px" src="/nft.svg" />
      </Display>
      <Tabs initialValue="Dashboard">
        {tabs.map((tab) => (
          <Tabs.Item label={tab.label} value={tab.value}>
            <Text>{tab.value}</Text>
          </Tabs.Item>
        ))}
      </Tabs>
    </>
  );
};
