import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logos } from '../../assets/airbnb-logo.svg';

export const Icon = styled(Logos)`
  font-size: 32px;
  font-weight: bold;
  & path {
    fill: currentColor;
    color: ${({ theme }) => theme.logo};
  }
`;

export const LogoLink = styled(Link)``;
