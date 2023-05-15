import { SectionTitle } from '@/styles/defaults';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray800};

  width: 100%;
`;

export const Title = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.purple500};

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
