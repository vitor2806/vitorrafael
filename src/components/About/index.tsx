import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function About() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section id="about" className="my-36 flex flex-col items-center justify-center" data-aos="fade-up">
      <section className="flex flex-col lg:flex-row w-full px-10 lg:px-0 lg:w-[75%] items-center gap-16 leading-loose">
        <img src="https://avatars.githubusercontent.com/u/95248045?v=4" alt="Minha foto de perfil" className="rounded-full w-64 lg:w-80 ring-2 ring-primary-500" />
        <article className="flex flex-col items-center gap-8">
          <h1 className="text-3xl lg:text-5xl text-primary-500">Sobre mim</h1>
          <p className="text-justify">
            Atualmente estou empenhando meus estudos em NextJS e suas possibilidades, bem como conhecendo GraphQL APIs. <strong className="text-primary-600">Estou em busca da minha primeira experiência profissional no mercado.</strong> Venho estudando JavaScript e seu ecossistema desde o final de 2021, onde através de plataformas como a Rocketseat pude aprofundar diversos conhecimentos. Venho realizando projetos pessoais e acadêmicos para aprimorar meus estudos. Me encontro ingressado no curso de Análise e Desenvolvimento de Sistemas pelo IFRN. Meu objetivo é se tornar um estimado desenvolvedor front-end.
          </p>
        </article>
      </section>
    </section>
  );
}
