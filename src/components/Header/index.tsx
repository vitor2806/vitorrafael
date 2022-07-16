import { Link as LinkScroll } from 'react-scroll';

export function Header() {
  return (
    <header className="w-full flex justify-center py-4 fixed top-0 bg-brand-900 z-10 border-b border-zinc-800">
      <nav>
        <ul className={`flex gap-4 uppercase font-medium text-zinc-400`}>
          <li>
            <LinkScroll to="hero" spy={true} smooth={true} offset={0} duration={500} className="hover:text-primary-500 cursor-pointer transition-colors">
              Inicio
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="about" spy={true} smooth={true} offset={-50} duration={500} className="hover:text-primary-500 cursor-pointer transition-colors">
              Sobre
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="projects" spy={true} smooth={true} offset={-50} duration={500} className="hover:text-primary-500 cursor-pointer transition-colors">
              Projetos
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="contact" spy={true} smooth={true} offset={50} duration={500} className="hover:text-primary-500 cursor-pointer transition-colors">
              Contato
            </LinkScroll>
          </li>
        </ul>
      </nav>
    </header>
  );
}
