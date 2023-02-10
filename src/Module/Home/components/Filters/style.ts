import styled, { css } from "styled-components";


export const Wrapper = styled.div`
  ${({theme}) => css`
    padding: ${theme.spacings.small} ${theme.spacings.none} ${theme.spacings.none};
    display: grid;
    flex-direction: row;
    justify-content: flex-end;
  `}
`