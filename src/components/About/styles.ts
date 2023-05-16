import { SectionTitle } from '@/styles/defaults';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: items-start;
  justify-content: center;

  width: 100%;

  background: ${({ theme }) => theme.colors.purple500};
`;

export const Title = styled(SectionTitle)`
  > span {
    color: ${({ theme }) => theme.colors.purple700};
  }
`;

export const PersonalInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 328px;
  height: 328px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;

  @media (max-width: 768px) {
    width: 256px;
    height: 256px;
  }
`;

export const Subtitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 39px;
  line-height: 58px;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 48px;
  }
`;

export const Description = styled.h5`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: 0.25px;

  color: ${({ theme }) => theme.colors.white};

  > strong {
    color: ${({ theme }) => theme.colors.orange500};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileSection = styled.section`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Body = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  /* or 250% */

  text-align: justify;
  letter-spacing: 0.15px;
  text-indent: 48px;

  color: ${({ theme }) => theme.colors.white};

  > strong {
    color: ${({ theme }) => theme.colors.orange500};
  }

  @media (max-width: 768px) {
    text-indent: 0;
    text-align: center;
  }
`;
