import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/client';
import '../styles/globals.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    </>
  );
};

export default MyApp;