import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "devextreme/dist/css/dx.material.blue.light.css";
import "../styles/devextreme.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout ?? ((page: any) => page);

  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
