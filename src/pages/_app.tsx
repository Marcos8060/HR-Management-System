import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "devextreme/dist/css/dx.material.blue.light.css";
import "../styles/devextreme.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import { AuthProvider } from "../AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout ?? ((page: any) => page);

  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}
