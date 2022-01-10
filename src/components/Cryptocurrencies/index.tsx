import {
  Avatar,
  Button,
  Card,
  Description,
  Grid,
  Loading,
  Page,
  Spacer,
  Text,
  useMediaQuery,
} from '@geist-ui/react';
import { useCoinModal } from '@hooks/coins/useCoinModal';
import { useGetCoinsQuery } from '@services/apis/coinranking/endpoints/coins';
export const Cryptocurrencies = () => {
  const { isFetching, data } = useGetCoinsQuery();

  const { handleOpenCoinModal } = useCoinModal();

  const isMobile = useMediaQuery('mobile');

  const fetchedData = data?.data;

  return (
    <>
      <Page.Header center>
        <Text h3 mt={2}>
          List of top 50 cryptocurrencies
        </Text>
      </Page.Header>
      <Page.Content>
        <Grid.Container>
          {isFetching && <Loading />}
          {fetchedData?.coins.map((coin) => (
            <Grid xl={6} lg={8} md={12} sm={24} xs={24} key={coin.uuid}>
              <Card
                shadow
                hoverable
                margin={!isMobile && 5}
                marginBottom={isMobile && 5}
                marginLeft={isMobile && -2.5}
                width={isMobile ? 20 : 100}
              >
                <Avatar src={coin.iconUrl} />
                <Spacer h={1} />
                <Text b>{coin.name}</Text>
                <Card.Footer>
                  <Description
                    title={<Text>Rank {coin.rank}</Text>}
                    content={coin.price}
                  />
                  <Spacer h={1} />
                  <Button onClick={() => handleOpenCoinModal(coin.uuid)} auto>
                    Details
                  </Button>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Page.Content>
    </>
  );
};
