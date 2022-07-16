import { Link as LinkScroll } from 'react-scroll';

export function Header() {
  return (
    <header className="w-full flex justify-center py-4 fixed top-0 bg-brand-900 z-10 border-b border-zinc-800">
      <nav>
        <ul className={`flex gap-4 uppercase font-medium text-zinc-600`}>
          <li>
            <LinkScroll to="hero" activeClass="active" spy={true} smooth={true} offset={0} duration={500} className="hover:text-zinc-500 cursor-pointer">
              Inicio
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="about" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} className="hover:text-zinc-500 cursor-pointer">
              Sobre
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="projects" activeClass="active" spy={true} smooth={true} offset={50} duration={500} className="hover:text-zinc-500 cursor-pointer">
              Projetos
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="contact" activeClass="active" spy={true} smooth={true} offset={50} duration={500} className="hover:text-zinc-500 cursor-pointer">
              Contato
            </LinkScroll>
          </li>
        </ul>
      </nav>
    </header>
  );
}
