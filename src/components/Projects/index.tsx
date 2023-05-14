import { GlobalInnerContainer } from '@/styles/defaults';
import { Title, Wrapper } from './styles';

export function Projects() {
  return (
    <Wrapper id='projects'>
      <GlobalInnerContainer fillHeight={true}>
        <Title>
          <span>#</span> Projetos
        </Title>
      </GlobalInnerContainer>
    </Wrapper>
  );
}
