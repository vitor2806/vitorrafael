import { GlobalInnerContainer } from '@/styles/defaults';
import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled(GlobalInnerContainer)`
  min-height: 100vh;

  @media (max-width: 768px) {
    min-height: 90vh;
  }
`;

export const HeroBigText = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 93px;
  line-height: 140px;
  /* identical to box height */

  letter-spacing: -1.5px;

  text-align: center;

  color: ${({ theme }) => {
    if (theme.title === 'light') return '#000';
    return theme.colors.purple500;
  }};

  > strong {
    font-weight: 700;
    color: ${({ theme }) => {
      if (theme.title === 'light') return theme.colors.purple500;
      return theme.colors.white;
    }};
  }

  @media (max-width: 904px) {
    display: none;
  }
`;

export const HeroBigTextMobile = styled.h1`
  display: none;

  @media (max-width: 904px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */

    letter-spacing: -1.5px;

    color: ${({ theme }) => {
      if (theme.title === 'light') return '#000';
      return theme.colors.purple500;
    }};

    strong {
      font-weight: 600;
      color: ${({ theme }) => {
        if (theme.title === 'light') return theme.colors.purple500;
        return theme.colors.white;
      }};
    }
  }

  @media (min-width: 600px) {
    font-size: 58px;
    line-height: 87px;
  }
`;

export const HeroSubtitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 58px;
  color: ${({ theme }) => theme.colors.purple100};

  @media (max-width: 904px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const DownloadCV = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  gap: 8px;

  width: 150px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.colors.purple500};
  border-radius: 6px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.25px;

  color: ${({ theme }) => theme.colors.purple500};

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple500};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    transform: scale(0.95);
  }
`;
