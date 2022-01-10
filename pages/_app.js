import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>ReliSource ERP</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
