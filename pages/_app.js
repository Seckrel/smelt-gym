import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { CssBaseline } from '@mui/material';
import Layout from '../src/components/layout';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

const generateClassName = createGenerateClassName({
  productionPrefix: 'myclasses-'
});

function MyApp({ Component, pageProps }) {

  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(1);
  }, []);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <StylesProvider generateClassName={generateClassName}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </StylesProvider>
      </CacheProvider>
    </>

  )
}


export default MyApp
