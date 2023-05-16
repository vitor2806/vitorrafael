import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, Logo, Navigator, StyledLink, Wrapper } from './styles';

export function Header() {
  const themeContext = useContext(ThemeContext);

  console.log(themeContext);

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
