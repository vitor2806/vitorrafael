import { client } from '@/lib/apollo';
import Reset from '@/styles/reset';
import { ApolloProvider } from '@apollo/client';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Reset />
        <Analytics />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
