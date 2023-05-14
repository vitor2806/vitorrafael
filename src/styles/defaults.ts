import styled from 'styled-components';

export const GlobalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const GlobalInnerContainer = styled.div<{
  centralized?: boolean;
  fillHeight?: boolean;
}>`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 1040px;

  ${({ centralized }) =>
    centralized
      ? `justify-content: center;
    align-items: center;
  `
      : ''}

  ${({ fillHeight }) => (fillHeight ? 'height: 100vh;' : '')}
`;
