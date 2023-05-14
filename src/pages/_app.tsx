import Reset from '@/styles/reset';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <Component {...pageProps} />
    </>
  );
}
