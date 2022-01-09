import {
  Page,
  Loading,
  Avatar,
  Grid,
  Card,
  Text,
  Description,
  Spacer,
} from '@geist-ui/react';
import { useGetCryptoQuery } from '@services/cryptoApi';

export const PageContent = () => {
  const { isFetching, data } = useGetCryptoQuery('');

  const fetchedData = data?.data;

  console.log('data', data?.data);

  return (
    <Page.Content>
      <Grid.Container>
        {isFetching && <Loading />}
        {fetchedData?.coins.map((coin) => (
          <Grid xs={12} md={6}>
            <Card shadow hoverable margin={2} width={100}>
              <Avatar src={coin.iconUrl} />
              <Spacer h={1} />
              <Text b>{coin.name}</Text>
              <Card.Footer>
                <Description
                  title={<Text>Rank {coin.rank}</Text>}
                  content={`$ ${Number(coin.price).toFixed()}`}
                />
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Page.Content>
  );
};
