import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "devextreme/dist/css/dx.material.blue.light.css";
import "../styles/devextreme.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import { AuthProvider } from "./auth/context";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout ?? ((page: any) => page);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </AuthProvider>
  );
}
