import { Container, Logo, Navigator, StyledLink, Wrapper } from './styles';

export function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo></Logo>
        <Navigator>
          <StyledLink href='#'>Sobre</StyledLink>
          <StyledLink href='#'>Projetos</StyledLink>
          <StyledLink href='#'>Habilidades</StyledLink>
          <StyledLink href='#'>Experiências</StyledLink>
        </Navigator>
      </Container>
    </Wrapper>
  );
}
