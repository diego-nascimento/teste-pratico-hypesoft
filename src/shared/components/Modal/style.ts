import styled, { css } from "styled-components";


export const Wrapper = styled.div`
${({theme}) => css`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, .8);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacings.small};
`}
  
`


 
