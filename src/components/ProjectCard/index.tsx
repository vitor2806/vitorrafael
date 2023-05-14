import Image from 'next/image';
import {
  ImageContainer,
  ProjectDescription,
  ProjectTitle,
  TextContainer,
  Wrapper,
} from './styles';

export function ProjectCard() {
  return (
    <Wrapper href='/'>
      <ImageContainer>
        <Image
          src='/assets/Capa.png'
          alt='Imagem'
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <TextContainer>
        <ProjectTitle>PokéSearch</ProjectTitle>
        <ProjectDescription>
          Esse é um projeto que utilizei para conhecer os conceitos de
          paginação, infinite scroll, etc.
        </ProjectDescription>
      </TextContainer>
    </Wrapper>
  );
}
