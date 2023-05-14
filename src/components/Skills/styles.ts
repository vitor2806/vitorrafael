import { SectionTitle } from '@/styles/defaults';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #19181b;

  width: 100%;
`;

export const Title = styled(SectionTitle)`
  color: #845cd6;

  > span {
    color: #fff;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 28px;
  row-gap: 64px;
`;
