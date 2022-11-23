import Theme from '../styles/theme';
import Head from 'next/head'
import { useRouter } from 'next/router'
// código omitido


export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { locale } = router 
  return (
    <>
      <Head>
        <title> Kleber Barilli - Node.JS & Java Dev</title>
      </Head>
      <Theme>
      {locale}
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
