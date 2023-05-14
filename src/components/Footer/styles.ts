import { GlobalInnerContainer } from '@/styles/defaults';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1e1d20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(GlobalInnerContainer)`
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: 0.5px;

  color: #ffffff;

  > a {
    text-decoration: none;
    color: #845cd6;
  }
`;
