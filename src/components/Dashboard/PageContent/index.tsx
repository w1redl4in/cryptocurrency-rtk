import {
  Page,
  Loading,
  Grid,
  Text,
  Description,
  Spacer,
} from '@geist-ui/react';
import { useGetCoinsQuery } from '@services/apis/coinranking/endpoints/coins';
export const PageContent = () => {
  const { isFetching, data } = useGetCoinsQuery();

  const fetchedData = data?.data;

  return (
    <Page.Content>
      {isFetching && <Loading />}
      <Grid.Container direction="column" alignItems="center">
        <Grid.Container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Description
            title={
              <Text h3 type="success">
                Total Cryptocurrencies
              </Text>
            }
            content={<Text h4>{fetchedData?.stats.totalCoins}</Text>}
          />
          <Description
            title={
              <Text h3 type="success">
                Total Exchanges
              </Text>
            }
            content={<Text h4>{fetchedData?.stats.totalExchanges}</Text>}
          />
        </Grid.Container>
        <Spacer w={5} />
        <Grid.Container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Description
            title={
              <Text h3 type="success">
                Total Market Cap
              </Text>
            }
            content={<Text h4>{fetchedData?.stats.totalMarketCap}</Text>}
          />
          <Description
            title={
              <Text h3 type="success">
                Total 24h Volume
              </Text>
            }
            content={<Text h4>{fetchedData?.stats.total24hVolume}</Text>}
          />
        </Grid.Container>
      </Grid.Container>
    </Page.Content>
  );
};
