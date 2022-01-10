import { Grid, Text } from '@geist-ui/react';
import { useGetExchangesQuery } from '@services/apis/coinranking/endpoints/exchanges';

export const Exchanges = () => {
  const {} = useGetExchangesQuery();

  return (
    <Grid.Container justify="center" alignItems="center" mt={5}>
      <Text h3 b>
        Coinranking API does not allow this endpoint{' '}
      </Text>
    </Grid.Container>
  );
};
