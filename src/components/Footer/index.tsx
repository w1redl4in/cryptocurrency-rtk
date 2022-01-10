import { Grid, Page, Text } from '@geist-ui/react';

export const Footer = () => {
  return (
    <Page.Footer>
      <Grid.Container justify="center" direction="column" alignItems="center">
        <Text>All rights reserved - 2022</Text>
        <Text>Made by Felipe Austríaco</Text>
      </Grid.Container>
    </Page.Footer>
  );
};
