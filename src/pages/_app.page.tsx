import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";

import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import { Footer } from "../components/Footer";

import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
