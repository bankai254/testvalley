import React from 'react';

import { ErrorBoundary,Provider as RollbarProvider } from '@rollbar/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import 'normalize.css/normalize.css';
import '@/styles/globals.scss';

import { fetcher } from '@/utils/api';

const rollbarConfig = {
  accessToken: process.env.NEXT_PUBLIC_ROLLBAR_CLIENT_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: true,
  payload: {
    client: {
      javascript: {
        code_version: '1.0.0',
        source_map_enabled: true
      }
    },
    environment: process.env.VERCEL_ENV || 'development'
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RollbarProvider config={rollbarConfig}>
      <SWRConfig
        value={{
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          fetcher: fetcher,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onError: (error: any) => {
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
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
        <SpeedInsights />
        <Analytics />
      </SWRConfig>
    </RollbarProvider>
  );
}
