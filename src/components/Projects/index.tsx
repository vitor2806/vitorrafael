import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ProjectContainer } from './ProjectContainer';

export function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <section id="projects" className="flex flex-col items-center" data-aos="fade-right">
      <h1 className="my-16 text-5xl text-primary-500">Projetos</h1>
      <div className="grid grid-cols-3 gap-8">
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </section>
  );
}
