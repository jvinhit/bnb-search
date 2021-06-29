import React from 'react';
import { LoadingContainer, Fragment } from './style';

// eslint-disable-next-line react/prop-types
const Loading = ({ width = '50px', height = '80px' }) => (
  <LoadingContainer width={width} height={height}>
    <Fragment />
    <Fragment />
    <Fragment />
    <Fragment />
  </LoadingContainer>
);

export default Loading;
