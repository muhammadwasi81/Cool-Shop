import '../styles/globals.css'
import { StoreProvider } from '../components/Store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';


//TODO: IT WILL LOAD THE PAGE WHEN SWITCH ONE TO ANOTHER
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;

MyApp.getInitialState = async () => {
  return {
    pageProps: {
      commercePublicKey: process.env.COMMERCE_PUBLIC_KEY,
    },
  }
}
