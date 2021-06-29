import styled from 'styled-components';
import { ReactComponent as SunnyIcon } from '../../assets/sunny-icon.svg';
import { ReactComponent as NightIcon } from '../../assets/night-icon.svg';

export const ToggleContainer = styled.div`
  display: inline-block;
`;

export const InputToggle = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  position: absolute;
  opacity: 0;
`;

export const LabelWrapper = styled.label`
  background-color: #555555;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 24px;
  width: 48px;
`;

export const Ball = styled.div`
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 24px;
  width: 24px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
  ${InputToggle}:checked + ${LabelWrapper} & {
    transform: translateX(25px);
  }
`;

export const LightIcon = styled(SunnyIcon)`
  width: 18px;
  height: 18px;
  ${InputToggle}:checked & {
    display: none;
  }
  visibility: visible;
  ${InputToggle}:checked + ${LabelWrapper} & {
    visibility: hidden;
  }
`;
export const DarkIcon = styled(NightIcon)`
  width: 18px;
  height: 18px;
  & path {
    fill: currentColor;
    color: #ffdb2d;
  }
  visibility: hidden;
  ${InputToggle}:checked + ${LabelWrapper} & {
    visibility: visible;
  }
`;
