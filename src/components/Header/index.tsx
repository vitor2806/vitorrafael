import { List, X } from '@phosphor-icons/react';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  CloseButton,
  Container,
  Logo,
  MenuButton,
  MobileNavigator,
  Navigator,
  StyledLink,
  Wrapper,
} from './styles';

export function Header() {
  const themeContext = useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Logo href='/'>
          {themeContext?.title === 'light' ? (
            <Image src='/logo_light.svg' alt='Logo' fill />
          ) : (
            <Image src='/logo_dark.svg' alt='Logo' fill />
          )}
        </Logo>

        {isMenuOpen ? (
          <MobileNavigator>
            <StyledLink smooth={true} to='about'>
              Sobre
            </StyledLink>
            <StyledLink smooth={true} offset={1} to='projects'>
              Projetos
            </StyledLink>
            <StyledLink smooth={true} to='skills'>
              Habilidades
            </StyledLink>

            <CloseButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id='close-menu'
              title='Fechar menu'
            >
              <X size={24} weight='bold' />
            </CloseButton>
          </MobileNavigator>
        ) : (
          <MenuButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id='open-menu'
            title='Abrir menu'
          >
            <List size={24} weight='bold' />
          </MenuButton>
        )}

        <Navigator>
          <StyledLink smooth={true} to='about'>
            Sobre
          </StyledLink>
          <StyledLink smooth={true} offset={1} to='projects'>
            Projetos
          </StyledLink>
          <StyledLink smooth={true} to='skills'>
            Habilidades
          </StyledLink>
          {/* <StyledLink smooth={true} to='experiences'>
            Experiências
          </StyledLink> */}
        </Navigator>
      </Container>
    </Wrapper>
  );
}
