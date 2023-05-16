import { DownloadSimple } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Contact,
  ContactContainer,
  Container,
  DownloadCV,
  HeroBigText,
  HeroBigTextMobile,
  HeroSubtitle,
  Wrapper,
} from './styles';

export function Hero() {
  return (
    <Wrapper id='hero'>
      <Container $centralized={true}>
        <HeroBigText>
          Olá! Eu sou <strong>Vitor</strong>.
        </HeroBigText>

        <HeroBigTextMobile>
          <span>Olá!</span>
          <span>
            Eu sou <strong>Vitor</strong>.
          </span>
        </HeroBigTextMobile>

        <HeroSubtitle>Desenvolvedor Fullstack</HeroSubtitle>

        <ContactContainer>
          <Contact>
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
          </Contact>

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
