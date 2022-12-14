import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        // eslint-disable-next-line react/react-in-jsx-scope
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html lang="en-GB">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <meta
                        name="title"
                        content="Kleber Barilli - Nodejs & Java Dev"
                    />
                    <meta
                        name="description"
                        content="Hey there, This is Kleber Barill. I am a backend developer who works with NodeJS, Java and Python."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:title"
                        content="Kleber Barilli - Nodejs & Java dev"
                    />
                    <meta
                        property="og:description"
                        content="Hey there, This is Kleber Barill. I am a backend developer who works with NodeJS, Java and Python."
                    />
                    {/* <meta property="og:image" content="https://www.kb.com/images/banner.png" /> */}
                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:title"
                        content="Kleber Barilli - Nodejs & Java dev"
                    />
                    <meta
                        property="twitter:description"
                        content="Hey there, This is Kleber Barill. I am a backend developer who works with NodeJS, Java and Python."
                    />
                    {/* <meta property="twitter:image" content="https://www.kb.com/images/banner.png" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
