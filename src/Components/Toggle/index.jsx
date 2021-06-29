/* eslint-disable react/prop-types */
import React from 'react';

import {
  InputToggle, LabelWrapper, Ball, DarkIcon, LightIcon, ToggleContainer,
} from './style';

const Toggle = ({ checked, onChange }) => (
  <ToggleContainer>
    <InputToggle checked={checked} id="toggle-theme" onChange={onChange} />
    <LabelWrapper className="label" htmlFor="toggle-theme">
      <DarkIcon />
      <LightIcon />
      <Ball className="ball" />
    </LabelWrapper>
  </ToggleContainer>
);

export default Toggle;
