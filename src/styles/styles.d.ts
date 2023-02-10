
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    widthSize: string,
    colors: {
      background: string,
      componentBackground: string,
      primary: string,
      textColor: string,
      textEaseColor: string,
      borderColors: string,
      warningBackground: string,
    },
    fonts: {
      family: string,
      sizes: {
        small: string,
        medium: string,
        xMedium: string,
        large: string
      },
      weights: {
        regular: number,
        medium: number,
        bold: number,
        black: number
      }
    },
    spacings: {
      none: string,
      xxxxSmall: string,
      xxxSmall: string,
      xxSmall: string,
      xSmall: string,
      small: string,
      medium: string,
      large: string,
      xLarge: string
    },
    borderRadius: string,
    boxShadow: string,
    whiteBoxShadow: string       
  }
}
