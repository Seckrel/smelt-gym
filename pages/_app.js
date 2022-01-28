import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { CssBaseline } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}


export default MyApp
