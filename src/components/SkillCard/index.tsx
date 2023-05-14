import { ReactNode } from 'react';
import { Description, TechInfo, TechName, Wrapper } from './styles';

interface SkillCardProps {
  tech_name: string;
  description: string;
  icon: ReactNode;
}

export function SkillCard({ tech_name, description, icon }: SkillCardProps) {
  return (
    <Wrapper>
      <TechInfo>
        {icon}
        <TechName>{tech_name}</TechName>
      </TechInfo>
      <Description>{description}</Description>
    </Wrapper>
  );
}
