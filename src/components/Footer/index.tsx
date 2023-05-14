import Link from 'next/link';
import { Container, Text, Wrapper } from './styles';

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Text>
          Copyright © 2023{' '}
          <Link href='https://vitorrafael.com.br/'>vitorrafael.com.br</Link>
        </Text>
        <Text>Todos os direitos reservados</Text>
      </Container>
    </Wrapper>
  );
}
