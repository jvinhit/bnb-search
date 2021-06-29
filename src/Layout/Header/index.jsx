/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, Toggle } from '../../Components';
import { CONSTANT } from '../../Constants';
import { PAGE_ROUTES } from '../../Constants/routes';
import {
  HeaderContainer, LogoWrapper, NavContainer, NavLinkWrapper,
} from './style';

const Header = React.memo(({ theme, onToggleTheme }) => {
  const isChecked = React.useMemo(() => theme === CONSTANT.DARD, [theme, onToggleTheme]);
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavContainer>
        <Toggle checked={isChecked} onChange={onToggleTheme} />
        {PAGE_ROUTES.map(({ path, name }) => (
          <NavLinkWrapper key={Math.random()} to={path}>
            {name}
          </NavLinkWrapper>
        )) }

      </NavContainer>
    </HeaderContainer>
  );
});
export default Header;
