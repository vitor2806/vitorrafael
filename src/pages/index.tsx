import { About } from '@/components/About';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { useGetProjectsQuery } from '@/graphql/generated';
import { GlobalWrapper } from '@/styles/defaults';

export default function Home() {
  const { data } = useGetProjectsQuery();

  console.log(data);

  return (
    <>
      <GlobalWrapper>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
      </GlobalWrapper>
    </>
  );
}
