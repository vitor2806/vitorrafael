import { client } from '@/lib/apollo';
import Reset from '@/styles/reset';
import { darkTheme, lightTheme } from '@/styles/theme';
import { ApolloProvider } from '@apollo/client';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useThemes from '../hooks/useThemes';

export default function App({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useThemes();

  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={selectedTheme}>
          {/* <ThemeSwitch theme={theme} toggleTheme={toggleTheme} /> */}
          <Reset />
          <Analytics />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
