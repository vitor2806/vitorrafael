import Image from 'next/image';
import Link from 'next/link';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div id="hero" className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-20 md:mt-0 xl:mt-10">
      <div className="flex flex-col gap-8 leading-loose" data-aos="fade-right">
        <div>
          <p className="lg:mb-3 text-lg font-semibold lg:text-2xl xl:text-4xl">Olá, meu nome é</p>
          <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-500">Vitor Rafael</h1>
          <p className="text-zinc-400 font-bold text-md lg:text-lg">&lt;Front-end Developer /&gt;</p>
        </div>
        <div className="flex gap-2" data-aos="fade-up">
          <Link href="https://github.com/vitor2806">
            <a target={'_blank'} rel="noreferrer" className="flex text-lg items-center justify-center py-2 px-5 bg-primary-500 rounded text-brand-900 font-semibold hover:bg-primary-600 transition-colors">
              <GithubLogo size={32} />
              GitHub
            </a>
          </Link>
          <Link href="https://linkedin.com/in/vitor2806">
            <a target={'_blank'} rel="noreferrer" className="flex text-lg gap-1 items-center justify-center py-2 px-4 bg-transparent border-2 border-primary-500 rounded text-primary-500 font-semibold hover:text-zinc-100 hover:border-zinc-100 transition-colors">
              <LinkedinLogo size={32} weight="duotone" />
              LinkedIn
            </a>
          </Link>
        </div>
      </div>
      <div data-aos="fade-up">
        <Image alt="Guy touching smartphone screen" src={'/Development-amico.svg'} width={700} height={700} />
      </div>
    </div>
  );
}
