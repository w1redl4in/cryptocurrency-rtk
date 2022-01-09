import { Page } from '@geist-ui/react';
import { PageHeader } from './PageHeader';
import { PageContent } from './PageContent';
import { CoinModal } from '@components/CoinModal';

export const Dashboard = () => {
  return (
    <Page>
      <PageHeader />
      <PageContent />
      <CoinModal />
    </Page>
  );
};
