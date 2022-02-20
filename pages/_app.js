import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { CssBaseline } from '@mui/material';
import Layout from '../src/components/layout';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { useState, useEffect } from 'react';

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
    <StylesProvider generateClassName={generateClassName}>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </StylesProvider>
  )
}


export default MyApp
