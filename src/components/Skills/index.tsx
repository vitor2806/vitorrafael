import { useGetSkillsQuery } from '@/graphql/generated';
import { GlobalInnerContainer } from '@/styles/defaults';
import { SkillCard } from '../SkillCard';
import { SkillsGrid, Title, Wrapper } from './styles';

export function Skills() {
  const { data } = useGetSkillsQuery();

  return (
    <Wrapper id='skills'>
      <GlobalInnerContainer $fillHeight={true}>
        <Title>
          <span>#</span> Habilidades
        </Title>

        <SkillsGrid>
          {data?.skills.map(skill => {
            return (
              <SkillCard
                key={skill.id}
                tech_name={skill.tech_name || ''}
                description={skill.description || ''}
                icon_url={skill.icon_url || ''}
              />
            );
          })}
        </SkillsGrid>
      </GlobalInnerContainer>
    </Wrapper>
  );
}
