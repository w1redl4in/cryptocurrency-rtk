import {
  Page,
  Loading,
  Avatar,
  Grid,
  Card,
  Text,
  Description,
  Spacer,
  Button,
} from '@geist-ui/react';
import { useCoinModal } from '@hooks/coins/useCoinModal';
import { useGetCryptoQuery } from '@services/endpoints';
export const PageContent = () => {
  const { isFetching, data } = useGetCryptoQuery('');

  const { handleOpenCoinModal } = useCoinModal();

  const fetchedData = data?.data;

  return (
    <Page.Content>
      <Grid.Container>
        {isFetching && <Loading />}
        {fetchedData?.coins.map((coin) => (
          <Grid xl={6} lg={8} md={12} sm={24} xs={24} key={coin.uuid}>
            <Card shadow hoverable margin={2} width={100}>
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
  );
};
