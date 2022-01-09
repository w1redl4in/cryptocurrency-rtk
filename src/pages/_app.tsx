import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
