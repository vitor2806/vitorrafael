import { SectionTitle } from '@/styles/defaults';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: items-start;
  justify-content: center;

  width: 100%;

  background: #845cd6;
`;

export const Title = styled(SectionTitle)`
  > span {
    color: #453663;
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
  width: 465px;
  height: 328px;

  background: #ffffff;
  border-radius: 16px;
`;

export const Subtitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 39px;
  line-height: 58px;

  color: #ffffff;
`;

export const Description = styled.h5`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: 0.25px;

  color: #ffffff;

  > strong {
    color: #ffb546;
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

  color: #ffffff;

  > strong {
    color: #ffb546;
  }
`;
