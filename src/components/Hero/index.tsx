import { DownloadSimple } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ContactContainer,
  Container,
  DownloadCV,
  HeroBigText,
  HeroSubtitle,
  Wrapper,
} from './styles';

export function Hero() {
  return (
    <Wrapper id='hero'>
      <Container $fillHeight={true} $centralized={true}>
        <HeroBigText>
          Olá! Eu sou <strong>Vitor</strong>.
        </HeroBigText>
        <HeroSubtitle>Desenvolvedor Fullstack</HeroSubtitle>
        <ContactContainer>
          <Image
            src={'/assets/icons/EnvelopeOpen.svg'}
            height={40}
            width={40}
            sizes='100px'
            alt='Ícone de envolope'
          />

          <Link
            href='https://github.com/vitorqf'
            rel='noreferrer'
            target='_blank'
          >
            <Image
              src={'/assets/icons/GithubLogo.svg'}
              height={40}
              width={40}
              sizes='100px'
              alt='Ícone de envolope'
            />
          </Link>

          <Link
            href='https://linkedin.com/in/vitor2806'
            rel='noreferrer'
            target='_blank'
          >
            <Image
              src={'/assets/icons/LinkedinLogo.svg'}
              height={40}
              width={40}
              sizes='100px'
              alt='Ícone de envolope'
            />
          </Link>

          <DownloadCV
            href='https://media.graphassets.com/FHBjUN3BSBOzpF39xgCr'
            download='Vitor Rafael.pdf'
            target='_blank'
          >
            <DownloadSimple size={20} weight='bold' />
            BAIXAR CV
          </DownloadCV>
        </ContactContainer>
      </Container>
    </Wrapper>
  );
}
