import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import styled, { css } from "styled-components";

export const Wrapper = styled(motion.div).attrs({
  initial:{ translateY: 15, opacity: 0 },
  animate:{ translateY: 0, opacity: 1 },
  transition:{ duration: 0.5 }
})`
  ${({theme}) => css`
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.textEaseColor};
    width: 100%;
    max-width: 500px;
    border-radius: ${theme.borderRadius};
    user-select: none;
    box-shadow: ${theme.whiteBoxShadow};
  `}

`

export const Header = styled.header`
 ${({theme}) => css`
 display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    align-items: center;
    border-bottom: 1px solid ${theme.colors.textEaseColor};
  `}
 
`

export const HeaderTitle = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.textColor};
    text-transform: capitalize;
    font-size: ${theme.fonts.sizes.large};
    font-weight: ${theme.fonts.weights.black};
  `}
`

export const CloseIcon = styled(AiOutlineClose)`
  ${({theme}) => css`
    color: ${theme.colors.textColor};
    cursor: pointer;
`}`

export const MainContainer =styled.main`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: 2fr 3fr;
    width: 100%;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    background-color: ${theme.colors.componentBackground};
    border-bottom-right-radius: ${theme.borderRadius};
    border-bottom-left-radius: ${theme.borderRadius};
`}
`
export const imageContainer = styled.div`
  ${({theme}) => css`
  display: flex;
  align-items: center;
  justify-content: center;

`} 
`
export const Image = styled.img`
 ${({theme}) => css`
  width: 80%;
  border-radius: 50%;
  border: 2px solid ${theme.colors.textEaseColor};
  box-shadow: ${theme.boxShadow};
`}
`

export const InfoContainer = styled.div`
 ${({theme}) => css`
 width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`}
  
`

export const Name = styled.h2`
   ${({theme}) => css`
    color: ${theme.colors.textColor};
    font-size: ${theme.fonts.sizes.large};
    font-weight: ${theme.fonts.weights.bold};

`}
`

export const Location = styled.span`
   ${({theme}) => css`
    color: ${theme.colors.textEaseColor};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weights.medium};
   
`}
`

export const Email = styled.span`
   ${({theme}) => css`
    color: ${theme.colors.textEaseColor};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weights.medium};
`}
`

export const Repos = styled.span`
   ${({theme}) => css`
    color: ${theme.colors.textEaseColor};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weights.medium};
`}
`

export const SeeProfileButton = styled.a`
 ${({theme}) => css`
    margin-top: ${theme.spacings.small};
    width: 100%;
    max-width: 150px;
    padding: ${theme.spacings.xxxxSmall} ${theme.spacings.xxxSmall};
    cursor: pointer;
    background-color: transparent;
    border: 1px solid ${theme.colors.textEaseColor};
    border-radius: ${theme.borderRadius};
    color: ${theme.colors.textEaseColor};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weights.medium};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${theme.boxShadow};
`}
`