import { Page } from '@geist-ui/react';
import { PageHeader } from './PageHeader';
import { PageContent } from './PageContent';
export const Dashboard = () => {
  return (
    <Page>
      <PageHeader />
      <PageContent />
    </Page>
  );
};
