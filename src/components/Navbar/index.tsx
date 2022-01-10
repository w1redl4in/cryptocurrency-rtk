import {
  Text,
  Tabs,
  Display,
  Image,
  Page,
  useMediaQuery,
} from '@geist-ui/react';
import { Dashboard } from '@components/Dashboard';
import { ToggleTheme } from './ToggleTheme';
import { Cryptocurrencies } from '@components/Cryptocurrencies';
import { Exchanges } from '@components/Exchanges';

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
      Component: Cryptocurrencies,
      disabled: false,
    },
    {
      label: 'Exchanges',
      value: 'Exchanges',
      Component: Exchanges,
      disabled: false,
    },
    {
      label: 'News',
      value: 'News',
      disabled: true,
    },
  ];

  return (
    <>
      <Page.Header>
        <ToggleTheme />
        <Display caption={<Text h2>CryptoVerse</Text>}>
          <Image width="100px" src="/nft.svg" alt="nft image" />
        </Display>
      </Page.Header>
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
    </>
  );
};
