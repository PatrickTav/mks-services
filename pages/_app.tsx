import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import _default from "../styles/theme/default";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={_default}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
