import { ExperienceContainer } from './ExperienceContainer/index';
import { SecTitle } from '../SecTitle/index';
export function Experiences() {
  return (
    <section className="flex flex-col items-center">
      <SecTitle content="Experiências" />
      <span className="h-0.5 w-full bg-secondary-500"></span>
      <div className="w-full lg:flex-row flex flex-col gap-4 py-8 lg:justify-start lg:overflow-x-scroll lg:scrollbar-thin lg:scrollbar-track-secondary-500 lg:scrollbar-thumb-primary-500">
        <ExperienceContainer title={'Estágio em Integração na SIASP'} date={'2019 - 2020'} desc={'Responsável por migrar, por meio de sistema interno, dados do site de um cliente para novo site da empresa.'} />
        <ExperienceContainer title={'Operador de Suporte Técnico na Brisanet'} date={'2022 - Atual'} desc={'Responsável por atender remotamente as demandas dos clientes e resolver questões técnicas.'} />
      </div>
    </section>
  );
}
