import Aos from 'aos';
import { useEffect } from 'react';

import { useGetAllExperiencesQuery } from '../../graphql/generated';
import { SecTitle } from '../SecTitle';
import { ExperienceContainer } from './ExperienceContainer';

export function Experiences() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  const { data } = useGetAllExperiencesQuery();

  return (
    <section className="flex flex-col items-center" data-aos="fade-up">
      <SecTitle content="Experiências" />
      <span className="h-0.5 w-full bg-secondary-500"></span>
      <div className="w-full lg:flex-row flex flex-col gap-4 py-8 lg:justify-start lg:overflow-x-scroll lg:scrollbar-thin lg:scrollbar-track-secondary-500 lg:scrollbar-thumb-primary-500">
        {data?.experiences.map(experience => {
          return <ExperienceContainer title={experience.title} date={experience.date} desc={experience.desc} key={experience.title} />;
        })}
      </div>
    </section>
  );
}
