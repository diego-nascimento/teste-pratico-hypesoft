import styled, { css } from "styled-components";

export const Wrapper = styled.div`
${({theme}) => css`
  margin: ${theme.spacings.xxSmall} ${theme.spacings.none} ${theme.spacings.small};
  text-align: center;

`}
  
`
export const PageNumberContainer =styled.div`
  ${({theme}) => css`
    padding-bottom: ${theme.spacings.none};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
  `}
`

export const PageNumber = styled.span`
  ${({theme}) => css`
  padding: ${theme.spacings.xxSmall};
  text-align: center;
  color: ${theme.colors.textEaseColor};
  `}
`

export const Container = styled.div`
 ${({theme}) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${theme.spacings.xxSmall};
`}`;


export const Button = styled.button`
  ${({theme}) => css`
    cursor: pointer;
    padding: ${theme.spacings.xxxSmall} ${theme.spacings.xxSmall};
    border-radius: ${theme.borderRadius};
    font-weight: ${theme.fonts.weights.bold};

    :disabled {
      color: ${theme.colors.textEaseColor};
      cursor: default;
    }
  `}
`