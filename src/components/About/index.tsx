import { useGetProfilePicQuery } from '@/graphql/generated';
import { GlobalInnerContainer } from '@/styles/defaults';
import Image from 'next/image';
import {
  Body,
  Description,
  ImageContainer,
  MobileSection,
  PersonalInfo,
  Section,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

export function About() {
  const { data } = useGetProfilePicQuery();

  return (
    <Wrapper id='about'>
      <GlobalInnerContainer $fillHeight={true}>
        <Title>
          <span>#</span> Sobre
        </Title>

        <PersonalInfo>
          <ImageContainer>
            <Image
              src={data?.profilePics[0].image?.url || ''}
              alt='Foto de perfil'
              fill
              sizes='1000px'
            />
          </ImageContainer>
          <Subtitle>Opa, tudo bem?</Subtitle>

          <Description>
            Como já sabe, eu me chamo <strong>Vitor</strong>.
          </Description>

          <Section>
            <Body>
              <strong>Sou um desenvolvedor full-stack</strong> fascinado por
              tecnologia e apaixonado pelo que é possível alcançar através de
              linhas de código.{' '}
              <strong>Minha especialidade está no front-end</strong>, mas
              possuo, também,{' '}
              <strong>
                conhecimentos na área do back-end, especialmente na construção
                de APIs REST com o Express
              </strong>
              . Além disso, tenho experiência com desenvolvimento de API
              GraphQL.
              <strong>
                {' '}
                O Typescript é a tecnologia que prefiro trabalhar atualmente
              </strong>
              .
            </Body>
            <Body>
              Atualmente, estou cursando Análise e Desenvolvimento de Sistemas
              no IFRN - Campus Pau dos Ferros e meu objetivo é ter o poder de
              <strong> desenvolver soluções eficientes</strong> para problemas
              atuais através do desenvolvimento de software.
            </Body>
          </Section>

          <MobileSection>
            <Body>
              “
              <strong>
                Desenvolvedor full-stack especializado em front-end
              </strong>{' '}
              com conhecimento em back-end e{' '}
              <strong>APIs REST e GraphQL utilizando Typescript</strong>. Tenho
              como objetivo procurar{' '}
              <strong>soluções eficientes e criativas</strong>. Apaixonado por
              tecnologia e pelo poder das linhas de código.”
            </Body>
          </MobileSection>
        </PersonalInfo>
      </GlobalInnerContainer>
    </Wrapper>
  );
}
