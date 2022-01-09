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
import { useGetCryptoQuery } from '@services/cryptoApi';
import { openModal } from '@store/coins/slice';
import { useDispatch } from 'react-redux';
export const PageContent = () => {
  const dispatch = useDispatch();
  const { isFetching, data } = useGetCryptoQuery('');

  const fetchedData = data?.data;

  return (
    <Page.Content>
      <Grid.Container>
        {isFetching && <Loading />}
        {fetchedData?.coins.map((coin) => (
          <Grid xl={6} lg={8} md={12} sm={24} xs={24}>
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
                <Button onClick={() => dispatch(openModal())} auto>
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
