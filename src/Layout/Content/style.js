import styled from 'styled-components';
import { centerItem } from '../../Utils/styles';

export const ContentContainer = styled.section`
  position: relative;
  color: #fff;
  text-align: center;
  padding-top: 220px;
  ${centerItem()}
`;

// export const ContentBackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-color: #464646;
//   background-image: url('${backgroundImage}');
//   background-position: center center;
//   background-repeat: no-repeat;
//   z-index: -1;

//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: #414a4f;
//     opacity: ${({ theme }) => theme.bgOpacity};
//   }
// `;
