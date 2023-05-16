import Image from 'next/image';
import {
  ImageContainer,
  ProjectDescription,
  ProjectTitle,
  TextContainer,
  Wrapper,
} from './styles';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function ProjectCard({
  title,
  description,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Wrapper href={href} rel='noreferrer' target='_blank'>
      <ImageContainer>
        <Image
          src={image}
          alt={`Imagem do projeto ${title}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes='500px'
        />
      </ImageContainer>
      <TextContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription title={description}>
          {description}
        </ProjectDescription>
      </TextContainer>
    </Wrapper>
  );
}
