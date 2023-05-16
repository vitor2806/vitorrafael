import { Moon, Sun } from '@phosphor-icons/react';
import { Container } from './styles';

type ThemeSwitchProps = {
  theme: string;
  toggleTheme: () => void;
};

export function ThemeSwitch({ theme, toggleTheme }: ThemeSwitchProps) {
  return (
    <Container
      onClick={toggleTheme}
      id='theme-toggle'
      aria-label='Botão de tema'
      title='Botão de tema'
    >
      {theme === 'light' ? (
        <Sun size={16} weight='bold' />
      ) : (
        <Moon size={16} weight='bold' />
      )}
    </Container>
  );
}
