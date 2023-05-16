import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 296px;
  height: 120px;
`;

export const TechInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TechName = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: 0.5px;

  color: ${({ theme }) => theme.colors.purple100};
`;

export const TechIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  padding: 4px;

  width: 24px;
  height: 24px;
`;

export const Description = styled.span`
  height: 72px;

  overflow: hidden;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;

  color: ${({ theme }) => theme.colors.purple100};
`;
