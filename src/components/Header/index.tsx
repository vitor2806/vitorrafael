import { Container, Logo, Navigator, StyledLink, Wrapper } from './styles';

export function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo></Logo>
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
          <StyledLink smooth={true} to='experiences'>
            Experiências
          </StyledLink>
        </Navigator>
      </Container>
    </Wrapper>
  );
}
