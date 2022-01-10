import { Page, Text, useMediaQuery } from '@geist-ui/react';
export const PageHeader = () => {
  const isMobile = useMediaQuery('mobile');

  return (
    <Page.Header center style={{ textAlign: 'center' }}>
      <Text h4={!isMobile} h5={isMobile} mt={2}>
        Real-time crypto coins statistics
      </Text>
    </Page.Header>
  );
};
