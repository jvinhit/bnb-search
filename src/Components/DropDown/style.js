import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  background-color: ${({ theme }) => theme.inpSearchBg};
  transition: all .2s;
  border: 1px solid ${({ theme }) => theme.inpSearchBorder};
  position: relative;
  top: -4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 4px 4px;
`;
export const Item = styled.li`
  color: ${({ theme }) => theme.inpSIcon};
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  padding: 15px 0 15px 21px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.hoverItemBg};
    color: ${({ theme }) => theme.hoverItemCl};
  }
`;
