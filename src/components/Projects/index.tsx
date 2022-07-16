import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useGetProjectsQuery } from '../../graphql/generated';
import { ProjectContainer } from './ProjectContainer';

export function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const { data } = useGetProjectsQuery();

  console.log(data);

  return (
    <section id="projects" className="flex flex-col items-center" data-aos="fade-right">
      <h1 className="my-16 text-5xl text-primary-500">Projetos</h1>
      <div className="grid grid-cols-3 gap-8">
        {data?.projects.map(project => {
          return <ProjectContainer key={project.name} imgUrl={project.cover?.url} title={project.name} url={project.url} description={project.projectDesription} />;
        })}
      </div>
    </section>
  );
}
