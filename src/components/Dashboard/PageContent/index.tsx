import {
  Page,
  Loading,
  Grid,
  Text,
  Description,
  Spacer,
  useMediaQuery,
} from '@geist-ui/react';
import { useGetCoinsQuery } from '@services/apis/coinranking/endpoints/coins';
export const PageContent = () => {
  const { isFetching, data } = useGetCoinsQuery();

  const fetchedData = data?.data;

  const isMobile = useMediaQuery('mobile');

  return (
    <Page.Content>
      {isFetching ? (
        <Loading />
      ) : (
        <Grid.Container
          style={{ textAlign: 'center', height: '45vh' }}
          direction="column"
          alignItems="center"
          justify="space-between"
        >
          <Description
            title={
              <Text h3={!isMobile} h4={isMobile} type="success">
                Total Cryptocurrencies
              </Text>
            }
            content={<Text h4>{fetchedData?.stats.totalCoins}</Text>}
          />
          <Description
            title={
              <Text h3={!isMobile} h5={isMobile} type="success">
                Total Exchanges
              </Text>
            }
            content={<Text h5>{fetchedData?.stats.totalExchanges}</Text>}
          />
          <Description
            title={
              <Text h3={!isMobile} h5={isMobile} type="success">
                Total Market Cap
              </Text>
            }
            content={<Text h5>{fetchedData?.stats.totalMarketCap}</Text>}
          />
          <Description
            title={
              <Text h3={!isMobile} h5={isMobile} type="success">
                Total 24h Volume
              </Text>
            }
            content={<Text h4>{fetchedData?.stats.total24hVolume}</Text>}
          />
        </Grid.Container>
      )}
    </Page.Content>
  );
};
