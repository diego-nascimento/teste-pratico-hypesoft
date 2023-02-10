import styled, { css } from "styled-components";
import {motion} from 'framer-motion'

const handleDelayAnimation = (index: number) => {
  if ((index + 1) % 2 !== 0) {
    return index * 0.15;
  } else {
    return (index - 1) * 0.15;
  }
};


interface Props {
  index: number
}

export const UserCardWrapper= styled(motion.li).attrs(({index}: Props) => ({
  initial:{ translateY: 15, opacity: 0 },
  animate:{ translateY: 0, opacity: 1 },
  transition:{ duration: 0.5, delay: handleDelayAnimation(index) }
}))<Props>`
  ${({theme}) => css`
  background-color: ${theme.colors.componentBackground};
    padding: ${theme.spacings.small} ${theme.spacings.small};
    border: 1px solid ${theme.colors.borderColors};
    border-radius: ${theme.borderRadius};
    display: flex;
    flex-direction: row;
    gap: ${theme.spacings.large};
    width: 100%;
    box-shadow: ${theme.boxShadow};
    user-select: none;
    position: relative;

    @media only screen and (min-width: 600px) and (max-width: ${theme.widthSize}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: ${theme.spacings.small};
      
      ${InformationContainer}{
        align-items: center;
        gap: ${theme.spacings.xxxSmall};
      }
    }
  `}
`

export const IconsContainer = styled.div`
${({theme}) => css`
  position: absolute;
  right: ${theme.spacings.small};
  top: ${theme.spacings.xxSmall};
  cursor: pointer;
  transition: .25s;
  opacity: .6;

  svg {
    color: ${theme.colors.textEaseColor};
  }

  :hover {
    opacity: 1;
  }
`}
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Image = styled.img`
 ${({theme}) => css`
    width: 100%;
    max-width: 80px;
    height: 100%;
    border-radius: 15px;
    box-shadow: ${theme.boxShadow};
  `}
 
`

export const InformationContainer = styled.div`
  ${({theme}) => css`
    font-size: ${theme.fonts.sizes.medium};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xxSmall};
    font-weight: ${theme.fonts.weights.medium};
  `}
`

export const LoginName = styled.h1`
  ${({theme}) => css`
    font-size: ${theme.fonts.sizes.large};
    text-transform: uppercase;
    font-weight: ${theme.fonts.weights.black};
    color: ${theme.colors.textColor};


  `}
`

export const GitURLWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  

  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    color: ${theme.colors.textEaseColor};
  `}
`

export const GitUrl= styled.span`
${({theme}) => css`
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weights.medium};
    color: ${theme.colors.textEaseColor};
  `}
`