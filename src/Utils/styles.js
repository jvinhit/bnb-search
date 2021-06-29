import { css } from 'styled-components';

export const centerItem = (direction = 'row') => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${direction};
`;
