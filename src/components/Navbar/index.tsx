import { Text, Tabs, Display, Image, Page } from '@geist-ui/react';
import { Dashboard } from '@components/Dashboard';
import { ToggleTheme } from './ToggleTheme';

export const Navbar = () => {
  const tabs = [
    {
      label: 'Dashboard',
      value: 'Dashboard',
      Component: Dashboard,
      disabled: false,
    },
    {
      label: 'Cryptocurrencies',
      value: 'Cryptocurrencies',
      disabled: true,
    },
    {
      label: 'Exchanges',
      value: 'Exchanges',
      disabled: true,
    },
    {
      label: 'News',
      value: 'News',
      disabled: true,
    },
  ];

  return (
    <Page.Header>
      <ToggleTheme />
      <Display caption={<Text h2>Cryptocurrency</Text>}>
        <Image width="100px" src="/nft.svg" />
      </Display>
      <Tabs hideDivider initialValue="Dashboard">
        {tabs.map((tab) => (
          <Tabs.Item
            disabled={tab.disabled}
            label={<Text b>{tab.label}</Text>}
            value={tab.value}
            key={tab.label}
          >
            {tab.Component && <tab.Component />}
          </Tabs.Item>
        ))}
      </Tabs>
    </Page.Header>
  );
};
