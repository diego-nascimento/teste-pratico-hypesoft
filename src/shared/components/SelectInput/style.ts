import styled, { css } from "styled-components";

export const Select= styled.select`
${({theme}) => css`
  width: 100%;
  max-width: 300px;
  padding: ${theme.spacings.xxxSmall};
  border-radius: ${theme.borderRadius};
  background: ${theme.colors.componentBackground};
  color: ${theme.colors.textColor};
`}
`

export const Option = styled.option`
  ${({theme}) => css`
    width: 100%;
    max-width: 300px;
    padding: ${theme.spacings.xxxSmall};
    border-radius: ${theme.borderRadius};
`}
`