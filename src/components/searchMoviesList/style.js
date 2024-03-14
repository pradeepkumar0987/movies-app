import {StyleSheet} from 'react-native';
import {FONTS} from '../../styles/theme';
import dimensions from '../../constants/dimensions';

const makeStyles = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.charcoalGray,
      marginTop: 10,
      flexDirection: 'row',
      borderRadius: 10,
      alignItems: 'center',
      gap: 10,
    },
    logo: {
      width: dimensions.WIDTH / 5,
      height: dimensions.HEIGHT / 8,
      resizeMode: 'contain',
      alignSelf: 'center',
      overflow: 'hidden',
    },
    headerTextContainer: {
      padding: 15,
      borderRadius: 16,
      marginTop: 20,
      backgroundColor: colors.charcoalGray,
    },
    headingText: {
      fontSize: 24,
      fontFamily: FONTS.BOLD,
      color: colors.primary,
    },
    bottomText: {
      color: colors.gray300,
      fontSize: 14,
      marginTop: 10,
      fontFamily: FONTS.REGULAR,
      textAlign: 'center',
    },
    termsText: {
      color: colors.white,
      fontSize: 14,
      marginTop: 10,
      fontFamily: FONTS.REGULAR,
      textAlign: 'center',
    },
    extract: {
      color: colors.primary,
      fontFamily: FONTS.REGULAR,
      fontSize: 16,
      marginTop: 2,
    },
  });

export default makeStyles;
