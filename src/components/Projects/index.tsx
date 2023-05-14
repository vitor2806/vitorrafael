import { GlobalInnerContainer } from '@/styles/defaults';
import { ProjectCard } from '../ProjectCard';
import { ProjectsGrid, SeeMore, Title, Wrapper } from './styles';

export function Projects() {
  return (
    <Wrapper id='projects'>
      <GlobalInnerContainer fillHeight={true}>
        <Title>
          <span>#</span> Projetos
        </Title>
        <ProjectsGrid>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
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
