import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'devextreme/dist/css/dx.material.blue.light.css';
import '../styles/devextreme.css';


export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout ?? ((page:any) => page)

  return (
      getLayout(<Component {...pageProps} />)
  );
}
