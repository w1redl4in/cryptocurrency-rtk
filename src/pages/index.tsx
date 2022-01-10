import { ApplicationModals } from '@components/Modals';
import { Navbar } from '@components/Navbar';
import {
  CssBaseline,
  GeistProvider,
  Page,
  useMediaQuery,
} from '@geist-ui/react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const { theme } = useSelector((state: any) => state.theme);

  const isMobile = useMediaQuery('mobile');

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <Page style={{ padding: isMobile ? 0 : 'auto' }}>
        <Navbar />
        <ApplicationModals />
      </Page>
    </GeistProvider>
  );
}
