import type { AppProps } from "next/app";

// Default do css
import GlobalStyle from "../styles/globals";

// Theme Provider para os padrôes sejam usados no projeto
import { ThemeProvider } from "styled-components";
import _default from "../styles/theme/default";

// Redux-Toolkit
import { store } from '../redux/store'
import {Provider}  from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <> 
    <Provider store={store} >
      <ThemeProvider theme={_default}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
