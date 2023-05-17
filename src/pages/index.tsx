import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { GlobalWrapper } from '@/styles/defaults';
import Head from 'next/head';
import ScrollToTop from 'react-scroll-to-top';

export default function Home() {
  return (
    <>
      <GlobalWrapper>
        <Head>
          <title>Vitor Rafael | Desenvolvedor Full-Stack</title>
          <meta
            name='description'
            content='Desenvolvedor Full-Stack apaixonado por tecnologia e fascinado pelo que é possível alcançar através de linhas de código.'
          />
          <meta
            name='keywords'
            content='Desenvolvedor, Full-Stack, Front-End, Back-End, Typescript, Javascript, React, Next, Node, Express, GraphQL, Apollo, MongoDB, MySQL, PostgreSQL, Pau dos Ferros, Rio Grande do Norte, Brasil'
          />
          <meta name='author' content='Vitor Rafael' />
          <meta name='robots' content='index, follow' />
          <meta name='language' content='pt-br' />
          <meta name='theme-color' content='#000000' />
        </Head>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
        <ScrollToTop
          smooth
          width='16px'
          style={{
            bottom: '10px',
            right: '10px',
          }}
        />
      </GlobalWrapper>
    </>
  );
}
