import { GlobalInnerContainer } from '@/styles/defaults';
import { Atom } from '@phosphor-icons/react';
import { SkillCard } from '../SkillCard';
import { SkillsGrid, Title, Wrapper } from './styles';

export function Skills() {
  return (
    <Wrapper id='skills'>
      <GlobalInnerContainer $fillHeight={true}>
        <Title>
          <span>#</span> Habilidades
        </Title>

        <SkillsGrid>
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
          <SkillCard
            icon={<Atom size={32} color='white' />}
            tech_name='React'
            description='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          '
          />
        </SkillsGrid>
      </GlobalInnerContainer>
    </Wrapper>
  );
}
