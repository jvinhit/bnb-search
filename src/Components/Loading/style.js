import styled, { keyframes } from 'styled-components';

const mot = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const hai = keyframes`
 0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(16px, 0);
  }
`;
const ba = keyframes`
   0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Fragment = styled.div`
  position: absolute;
  top: 42%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.inpSearch};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;
export const LoadingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: ${(props) => props?.width || '50px'};
  height: ${(props) => props?.height || '60px'};
  & ${Fragment}:nth-child(1) {
    left: 4px;
    animation: ${mot} 0.4s infinite;
  }

  & ${Fragment}:nth-child(2) {
    left: 4px;
    animation: ${hai} 0.4s infinite;
  }

  & ${Fragment}:nth-child(3) {
    left: 20px;
    animation: ${hai} 0.4s infinite;
  }

  & ${Fragment}:nth-child(4) {
    left:  36px;
    animation: ${ba} 0.4s infinite;
  }
`;
