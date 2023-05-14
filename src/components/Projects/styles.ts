import { SectionTitle } from '@/styles/defaults';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
`;

export const Title = styled(SectionTitle)`
  color: #845cd6;

  > span {
    color: #fff;
  }
`;
