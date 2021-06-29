/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Content from './Content';

// import './index.scss';

const BasicLayout = ({ theme, onToggleTheme, children }) => (
  <>
    <Header theme={theme} onToggleTheme={onToggleTheme} />
    <Content>{children}</Content>
  </>
);

export default React.memo(BasicLayout);
