import { GlobalInnerContainer } from '@/styles/defaults';
import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #1e1d20;
  height: 72px;
  width: 100%;
`;

export const Container = styled(GlobalInnerContainer)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Navigator = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledLink = styled(Link)<{ selected?: boolean }>`
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1.25px;

  color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: #fff;
  }

  ${({ selected }) =>
    selected &&
    `
    color: #845CD6;
    border-bottom: 2px solid #845CD6;
  `}
`;
