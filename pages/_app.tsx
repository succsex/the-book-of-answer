import type { AppProps } from "next/app";
import theme from "theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
