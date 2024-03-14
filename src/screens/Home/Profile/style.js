import {StyleSheet} from 'react-native';
import {FONTS} from '../../../styles/theme';
import dimensions from '../../../constants/dimensions';

const makeStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.darkGray,
      justifyContent: 'center',
      padding: 16,
    },
    LoginContainer: {
      flex: 1,
      backgroundColor: colors.darkGray,
      padding: 16,
    },
    logo: {
      width: dimensions.WIDTH / 2,
      height: dimensions.HEIGHT / 5,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    headerTextContainer: {
      padding: 15,
      borderRadius: 16,
      marginTop: 20,
      backgroundColor: colors.charcoalGray,
    },
    headingText: {
      fontSize: 24,
      alignSelf: 'center',
      textAlign: 'center',
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
      color: colors.primary,
      fontSize: 16,
      fontFamily: FONTS.REGULAR,
      textAlign: 'center',
    },
    termsAndPolicyText: {
      color: colors.primary,
      fontFamily: FONTS.REGULAR,
    },
  });

export default makeStyles;
