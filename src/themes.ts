export const theme: themeType = {
  light: {
    background: '#FFFFFF',
    secondaryBackground: '#F7F9F9',
    primaryFontColor: '#3e40b1',
    secondaryFontColor: 'grey',
  },
  dark: {
    background: '#212125',
    secondaryBackground: '#3A3A3A',
    primaryFontColor: '#7DB5F8',
    secondaryFontColor: 'grey',
  },
}

export type themeType = {
  light: {
    background: string
    secondaryBackground: string
    primaryFontColor: string
    secondaryFontColor: string
  }
  dark: {
    background: string
    secondaryBackground: string
    primaryFontColor: string
    secondaryFontColor: string
  }
}
