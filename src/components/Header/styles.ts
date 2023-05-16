import { GlobalInnerContainer } from '@/styles/defaults';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray700};
  height: 72px;
  width: 100%;
`;

export const Container = styled(GlobalInnerContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0;
`;

export const Logo = styled(Link)`
  position: relative;

  width: 48px;
  height: 48px;
`;

export const Navigator = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavigator = styled.nav`
  display: none;

  @media (max-width: 768px) {
    z-index: 30;
    position: fixed;
    inset: 0;

    background-color: ${({ theme }) => theme.colors.gray700};
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 24px;
    right: 24px;

    padding: 0;

    background-color: transparent;

    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
    background-color: transparent;

    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const StyledLink = styled(LinkScroll)<{ selected?: boolean }>`
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1.25px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.purple200};

  &:hover {
    color: ${({ theme }) => theme.colors.purple500};
  }

  ${({ selected, theme }) =>
    selected &&
    `
    color: ${theme.colors.purple500}
    border-bottom: 2px solid ${theme.colors.purple500};
  `}
`;
