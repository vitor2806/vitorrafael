import styled from 'styled-components';

export const SectionTitle = styled.h2`
  margin-top: 16px;
  margin-bottom: 40px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 58px;
  line-height: 87px;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 72px;
    margin-bottom: 16px;
  }
`;

export const GlobalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const GlobalInnerContainer = styled.div<{
  $centralized?: boolean;
  $fillHeight?: boolean;
}>`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 1040px;

  ${({ $centralized }) =>
    $centralized
      ? `justify-content: center;
    align-items: center;
  `
      : ''}

  ${({ $fillHeight }) => ($fillHeight ? 'min-height: 100vh;' : '')}
  
  @media (max-width: 1280px) {
    max-width: 80%;
    padding-bottom: 24px;
  }

  @media (max-width: 320px) {
    max-width: 304px;
  }
`;
