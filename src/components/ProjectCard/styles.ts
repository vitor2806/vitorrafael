import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray600};
  border-radius: 8px;
  overflow: hidden;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #3e3a3f;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 176px;
`;

export const TextContainer = styled.div`
  padding: 8px 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 30px;
`;

export const ProjectTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: 0.5px;

  color: ${({ theme }) => theme.colors.purple100};
`;

export const ProjectDescription = styled.span`
  height: 64px;

  overflow: hidden;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;

  color: ${({ theme }) => theme.colors.purple100};
`;
