import { Navbar } from '@components/Navbar';
import { CssBaseline, GeistProvider, Page } from '@geist-ui/react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const { theme } = useSelector((state: any) => state.theme);

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <Page>
        <Navbar />
      </Page>
    </GeistProvider>
  );
}
