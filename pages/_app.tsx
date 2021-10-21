import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Themes from '../styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Themes.light}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
