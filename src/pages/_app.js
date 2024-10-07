import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/client';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
};

export default MyApp;