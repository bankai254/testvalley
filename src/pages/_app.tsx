import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import 'normalize.css/normalize.css';
import '@/styles/globals.scss';

import { fetcher } from '@/utils/api';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        fetcher: fetcher,
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
            // We can send the error to Sentry,
            // or show a notification UI.
          }
        }
      }}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
