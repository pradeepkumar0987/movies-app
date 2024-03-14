import {DefaultTheme, configureFonts} from 'react-native-paper';

export const FONTS = {
  REGULAR: 'OpenSans-Regular',
  MEDIUM: 'OpenSans-Medium',
  BOLD: 'OpenSans-Bold',
  ITALIC: 'OpenSans-Italic',
  LIGHT: 'OpenSans-Light',
  BOLD_ITALIC: 'OpenSans-BoldItalic',
};

export default {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#53D495',
    black: '#000000',
    richBlack: '#212121',
    charcoalGray: '#303030',
    white: '#FFFFFF',
    mintGreen: '#53d49580',
    lightGray: '#E2E2E2',
    secondary: '#101111',
    gray500: '#797C7A',
    gray300: '#CBCCCB',
    gray700: '#202020',
    gray900: '#101111',
    primaryLight: '#F57070',
    transparent: '#00000000',
    blackTransparent: '#0000007c',
    silver: '#D9D9D9',
    primaryDark: '#C22C2C',
    pacificBlue: '#008CDC',
    brightYellow: '#F6B40A',
    golden: '#FFAE00',
    darkGreen: '#118E51',
    darkGray: '#161616',
    dimGray: '#545454',
  },
  fonts: configureFonts(fontConfig),
};

const fontConfig = {
  android: {
    regular: {
      fontFamily: 'OpenSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'OpenSans-Medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'OpenSans-Bold',
      fontWeight: 'normal',
    },
    italic: {
      fontFamily: 'OpenSans-Italic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'OpenSans-Light',
      fontWeight: 'normal',
    },
    boldItalic: {
      fontFamily: 'OpenSans-BoldItalic',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'OpenSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'OpenSans-Medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'OpenSans-Bold',
      fontWeight: 'normal',
    },
    italic: {
      fontFamily: 'OpenSans-Italic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'OpenSans-Light',
      fontWeight: 'normal',
    },
    boldItalic: {
      fontFamily: 'OpenSans-BoldItalic',
      fontWeight: 'normal',
    },
  },
};
