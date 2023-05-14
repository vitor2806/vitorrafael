import { About } from '@/components/About';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { GlobalWrapper } from '@/styles/defaults';

export default function Home() {
  return (
    <>
      <GlobalWrapper>
        <Header />
        <Hero />
        <About />
        <Projects />
      </GlobalWrapper>
    </>
  );
}
