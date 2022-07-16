import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';

export default function Home() {
  return (
    <div className="relative flex flex-col gap-10">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
