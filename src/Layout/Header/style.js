import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { centerItem } from '../../Utils/styles';

export const HeaderContainer = styled.header`
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 24px;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;
export const LogoWrapper = styled.h2``;
export const NavContainer = styled.nav`
  ${centerItem()}
  gap: 36px;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const NavLinkWrapper = styled(NavLink).attrs(() => ({}))`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
`;
