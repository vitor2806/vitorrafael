import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SecTitle } from '../SecTitle';

export function About() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section id="about" className="flex flex-col items-center justify-center" data-aos="fade-up">
      <div className="flex flex-col lg:flex-col items-center leading-loose">
        <img src="https://avatars.githubusercontent.com/u/95248045?v=4" alt="Minha foto de perfil" className="rounded-full w-64 lg:w-80 ring-2 ring-primary-500 hover:scale-105 transition-transform duration-1000" />
        <article className="flex flex-col items-center">
          <SecTitle content="Sobre" />
          <p className="text-justify">
            Atualmente estou empenhando meus estudos em NextJS e suas possibilidades, bem como conhecendo GraphQL APIs. <strong className="text-primary-600">Estou em busca da minha primeira experiência profissional no mercado.</strong> Venho estudando JavaScript e seu ecossistema desde o final de 2021, onde através de plataformas como a Rocketseat pude aprofundar diversos conhecimentos. Venho realizando projetos pessoais e acadêmicos para aprimorar meus estudos. Me encontro ingressado no curso de Análise e Desenvolvimento de Sistemas pelo IFRN.
          </p>
        </article>
      </div>
    </section>
  );
}
