import styled, { css } from 'styled-components';


export const Wrapper = styled.form`
  ${({theme}) => css`
    padding-top: ${theme.spacings.xxSmall};
    display: flex;
  *{
    border-radius: 0px;
   }
  `}
  
`

export const SubmitButton = styled.button`
${({theme}) => css`
  border-top-right-radius: ${theme.borderRadius};
  border-bottom-right-radius: ${theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: ${theme.spacings.xxSmall};
  border: 1px solid ${theme.colors.textColor};
  background: ${theme.colors.contrastColor};
  border: none;

  svg {
    transition: .5s;
    color: ${theme.colors.background};
  }

  :hover {
    svg{
      transform: scale(1.1);
    }
    
  }
`}

`

export const Input = styled.input`
${({theme}) => css`
  width: 100%;
  border-top-left-radius:${theme.borderRadius};
  border-bottom-left-radius:${theme.borderRadius};
  padding: ${theme.spacings.xxSmall} ${theme.spacings.small};
  border: 1px solid ${theme.colors.textColor};
  background-color: ${theme.colors.componentBackground};
  border: none;
  color: ${theme.colors.textColor};
`}
  
  
`
