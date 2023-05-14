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

  color: #ffffff;
`;

export const Description = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;

  color: rgba(255, 255, 255, 0.8);
`;
