import Image from 'next/image';
import { Description, TechIcon, TechInfo, TechName, Wrapper } from './styles';

interface SkillCardProps {
  tech_name: string;
  description: string;
  icon_url: string;
}

export function SkillCard({
  tech_name,
  description,
  icon_url,
}: SkillCardProps) {
  return (
    <Wrapper>
      <TechInfo>
        <TechIcon>
          <Image
            src={icon_url}
            alt={`Icone da tecnologia ${tech_name}`}
            width={24}
            height={24}
            sizes='128px'
            style={{ objectFit: 'cover' }}
          />
        </TechIcon>
        <TechName>{tech_name}</TechName>
      </TechInfo>
      <Description title={description}>{description}</Description>
    </Wrapper>
  );
}
