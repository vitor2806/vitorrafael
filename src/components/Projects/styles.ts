import { SectionTitle } from '@/styles/defaults';
import Link from 'next/link';
import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;

  background: ${({ theme }) => theme.colors.gray700};
`;

export const Title = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.purple500};

  > span {
    color: ${({ theme }) => theme.colors.purple100};
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 336px);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 336px);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 336px);
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

  background: ${({ theme }) => theme.colors.purple500};
  border-radius: 6px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 1.25px;

  color: ${({ theme }) => theme.colors.white};

  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => darken(0.15, theme.colors.purple500)};
  }

  &:active {
    background: ${({ theme }) => darken(0.25, theme.colors.purple500)};
  }
`;
