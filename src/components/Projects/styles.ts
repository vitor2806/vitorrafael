import { SectionTitle } from '@/styles/defaults';
import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;

  background: #1e1d20;
`;

export const Title = styled(SectionTitle)`
  color: #845cd6;

  > span {
    color: #fff;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 304px);
  grid-template-rows: repeat(2, 336px);
  gap: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 304px);
  }
`;

export const SeeMore = styled(Link)`
  width: 150px;
  height: 44px;

  align-self: center;

  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #845cd6;
  border-radius: 6px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 1.25px;

  color: #ffffff;
`;
