import { createGlobalStyle } from 'styled-components';
import image from '../../../assets/background.jpg';

const GlobalStyles = createGlobalStyle`
  body {
    position: relative;
    background-image: url('${image}');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
    color: ${({ theme }) => theme.colorPrimary};
    height: 100vh;
    transition: all 0.3s linear;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.bgRgba};
      z-index: -1;
      transition: all 0.3s linear;

    }
  }
  #root {
    position: relative;
    height: 100%;
  }
`;

export default GlobalStyles;
