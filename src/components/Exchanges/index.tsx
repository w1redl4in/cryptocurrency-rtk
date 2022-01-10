import { Card, Loading, Page } from '@geist-ui/react';
import { useGetExchangesQuery } from '@services/apis/coinranking/endpoints/exchanges';

export const Exchanges = () => {
  const { isLoading, data } = useGetExchangesQuery();

  const fetchedData = data?.data;

  return (
    <Page.Content>
      {isLoading && <Loading />}
      {fetchedData?.exchanges.map((exchange) => (
        <Card key={exchange.uuid}>{exchange.name}</Card>
      ))}
    </Page.Content>
  );
};
