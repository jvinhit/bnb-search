import React from 'react';
import { LogoLink, Icon } from './style';

const Logo = () => (
  <LogoLink to="/">
    <Icon />
  </LogoLink>
);

export default React.memo(Logo);
