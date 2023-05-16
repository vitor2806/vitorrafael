import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  border: none;
  background-color: transparent;

  line-height: 0;
  padding: 4px;
  border-radius: 8px;

  border: ${({ theme }) => theme.colors.purple200} 2px solid;
  color: ${({ theme }) => theme.colors.purple200};

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple200};
    color: ${({ theme }) => theme.colors.gray600};
  }
`;
