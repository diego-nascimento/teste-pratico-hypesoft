import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Main = styled.main`
${({theme}) => css`
  max-width: ${theme.widthSize};
  width: 100%;
  padding: ${theme.spacings.none} ${theme.spacings.xxSmall}
`}
  
`