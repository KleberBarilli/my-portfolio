/* eslint-disable react/react-in-jsx-scope */
import Theme from '../styles/theme';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title> Kleber Barilli - Node.JS & Java Dev</title>
            </Head>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    );
}

export default appWithTranslation(App);
