import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import theme from '../src/theme';

// https://mui.com/styles/advanced/#next-js
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <meta content={theme.palette.primary.main} name="theme-color"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body style={{paddingTop: theme.variables.appBarHeight}}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
MyDocument.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <React.Fragment>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </React.Fragment>
            ),
        };
    } finally {
        sheet.seal();
    }
}
;