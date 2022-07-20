import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import '../sass/main.scss';


// NProgress
Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
    // NProgress
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    // handler refresh back button history
    componentDidMount() {
        Router.beforePopState(({as}) => {
          location.href = as;
        });
    }
    render() {
        const { Component, pageProps } = this.props
        return (
              <>
                <Head>
                <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

                    {/* OPEN GRAP */}
                    <meta name="description" content="We craft experiences for your digital needs."/>
                    <meta name="og:description" content="We craft experiences for your digital needs."/>
                    <meta name="author" content="DIGNITE STUDIO"/>
                    <meta name="copyright" content="DIGNITE STUDIO" />
                    <meta name="creator" content="DIGNITE STUDIO" /> 
                    {/* favicon */}
                    <link rel="shortcut icon" href="../static/image/logofavicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="../static/favicon.ico" type="image/x-icon"></link>
                    {/* bootstrap */}
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384-Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y" crossOrigin="anonymous" />
                    {/* Import CSS for nprogress */}
                    <link rel='stylesheet' type='text/css' href='https://unpkg.com/nprogress@0.2.0/nprogress.css' />
                    {/* font */}
                    <link href="https://fonts.googleapis.com/css?family=Sanchez&display=swap" rel="stylesheet"></link>
                    {/* react slick */}
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <Component {...pageProps} />
              </>
        )
    }
}

export default MyApp
