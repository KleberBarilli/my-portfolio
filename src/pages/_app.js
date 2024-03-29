/* eslint-disable react/react-in-jsx-scope */
import Theme from '../styles/theme';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react'

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title> Kleber Barilli - Node.JS & Java Dev</title>
            </Head>
            <Theme>
                <Component {...pageProps} />
                <Analytics />           
            </Theme>
        </>
    );
}
