import { GlobalInnerContainer } from '@/styles/defaults';
import { ProjectCard } from '../ProjectCard';
import { ProjectsGrid, SeeMore, Title, Wrapper } from './styles';

export function Projects() {
  return (
    <Wrapper id='projects'>
      <GlobalInnerContainer $fillHeight={true}>
        <Title>
          <span>#</span> Projetos
        </Title>
        <ProjectsGrid>
          <ProjectCard
            image='https://media.graphassets.com/sfkScCC7RCeQrYT7FiMn'
            title='PokéSearch'
            description='Esse é um projeto que utilizei para conhecer os conceitos de páginação, infinite scroll, etc.'
            href='https://pokesearch.vitorrafael.com.br/'
          />

          <ProjectCard
            image='https://media.graphassets.com/sfkScCC7RCeQrYT7FiMn'
            title='PokéSearch'
            description='Esse é um projeto que utilizei para conhecer os conceitos de páginação, infinite scroll, etc.'
            href='https://pokesearch.vitorrafael.com.br/'
          />

          <ProjectCard
            image='https://media.graphassets.com/sfkScCC7RCeQrYT7FiMn'
            title='PokéSearch'
            description='Esse é um projeto que utilizei para conhecer os conceitos de páginação, infinite scroll, etc.'
            href='https://pokesearch.vitorrafael.com.br/'
          />

          <ProjectCard
            image='https://media.graphassets.com/sfkScCC7RCeQrYT7FiMn'
            title='PokéSearch'
            description='Esse é um projeto que utilizei para conhecer os conceitos de páginação, infinite scroll, etc.'
            href='https://pokesearch.vitorrafael.com.br/'
          />

          <ProjectCard
            image='https://media.graphassets.com/sfkScCC7RCeQrYT7FiMn'
            title='PokéSearch'
            description='Esse é um projeto que utilizei para conhecer os conceitos de páginação, infinite scroll, etc.'
            href='https://pokesearch.vitorrafael.com.br/'
          />

          <ProjectCard
            image='https://media.graphassets.com/sfkScCC7RCeQrYT7FiMn'
            title='PokéSearch'
            description='Esse é um projeto que utilizei para conhecer os conceitos de páginação, infinite scroll, etc.'
            href='https://pokesearch.vitorrafael.com.br/'
          />
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
