/* eslint-disable react/prop-types */
import React from 'react';
import { ContentContainer } from './style';

const Content = ({ children }) => (
  <ContentContainer>
    {children}
  </ContentContainer>
);

export default React.memo(Content);
