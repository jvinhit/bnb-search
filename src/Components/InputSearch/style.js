import styled from 'styled-components';

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as Remove } from '../../assets/remove.svg';

export const IconSearch = styled(SearchIcon)`
  position: absolute;
  left: 21px;
  top: 17px;
  width: 26px !important;
  height: 26px !important;
  & path {
    fill: currentColor;
    color: ${({ theme }) => theme.inpSIcon};
  }
`;
export const InputSearchContainer = styled.div`
  position: relative;
  width: 660px;
  max-width: 660px;
  & ${IconSearch} & {
    color: 'yellow';
  }
`;

export const Input = styled.input`
  height: 60px;
  padding-left: 62px;
  padding-right: 52px;
  width: 100%;
  min-width: 300px;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.inpSearchBorder};
  background-color: ${({ theme }) => theme.inpSearchBg};
  color: ${({ theme }) => theme.inpSIcon};
  font-size: 20px;
  font-weight: 600;
  text-overflow: ellipsis;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: ${({ theme }) => theme.inpSearch};
  }
  &:focus::placeholder {
    color: transparent;
    transition: all 0.1 linear;
  }
`;

export const IconWrapper = styled.span`
  color: ${({ theme }) => theme.inpSIcon};
  position: absolute;
  height: 60px;
  cursor: pointer;
  user-select: none;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  transition: box-shadow 0.2s;

  &:after {
    display: none;
    position: absolute;
    top: 50%;
    right: 50%;
    width: 100%;
    height: 100%;
    transform: translate(50%, -50%);
    border-radius: 50%;
    content: '';
  }
  &:hover:after {
    display: block;
  }
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.inpSIcon};
  }
`;
export const IconClear = styled(Remove)`
  width: 26px !important;
  height: 26px !important;
`;

export const LoadingWrapper = styled.span`
  position: absolute;
  right: 0px;
  top: 0;
  cursor: pointer;
  user-select: none;
  font-size: 20px;
`;
