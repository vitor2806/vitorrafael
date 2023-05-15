import { Container } from './styles';

type ThemeSwitchProps = {
  theme: string;
  toggleTheme: () => void;
};

export function ThemeSwitch({ theme, toggleTheme }: ThemeSwitchProps) {
  return (
    <Container>
      <input type='checkbox' id='switch' />
      <label htmlFor='switch'>Toggle</label>
    </Container>
  );
}
