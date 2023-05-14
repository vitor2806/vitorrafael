import { useGetProjectsQuery } from '@/graphql/generated';
import { GlobalInnerContainer } from '@/styles/defaults';
import { ProjectCard } from '../ProjectCard';
import { ProjectsGrid, SeeMore, Title, Wrapper } from './styles';

export function Projects() {
  const { data } = useGetProjectsQuery();

  data?.projects[0];

  return (
    <Wrapper id='projects'>
      <GlobalInnerContainer $fillHeight={true}>
        <Title>
          <span>#</span> Projetos
        </Title>
        <ProjectsGrid>
          {data?.projects.map(project => {
            return (
              <ProjectCard
                key={project.id}
                image={project.cover?.url || ''}
                title={project.title}
                description={project.description || ''}
                href={project.url || ''}
              />
            );
          })}
        </ProjectsGrid>

        <SeeMore
          href='https://github.com/vitorqf?tab=repositories'
          rel='noreferrer'
          target='_blank'
        >
          VER MAIS
        </SeeMore>
      </GlobalInnerContainer>
    </Wrapper>
  );
}
