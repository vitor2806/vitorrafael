import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useGetProjectsQuery } from '../../graphql/generated';
import { SecTitle } from '../SecTitle';
import { ProjectContainer } from './ProjectContainer';

export function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const { data } = useGetProjectsQuery();

  return (
    <section id="projects" className="flex flex-col items-center" data-aos="fade-right">
      <SecTitle content="Projetos" />
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-x-3 gap-y-3">
        {data?.projects.map(project => {
          return <ProjectContainer key={project.name} imgUrl={project.cover?.url} title={project.name} url={project.url} description={project.projectDesription} />;
        })}
      </div>
    </section>
  );
}
