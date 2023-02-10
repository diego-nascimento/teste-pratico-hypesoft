import styled, { css } from "styled-components";


export const Wrapper = styled.ul`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: ${theme.spacings.xSmall} ${theme.spacings.none};
    gap: ${theme.spacings.small};
    width: 100%;

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  `}
`