import {StyleSheet} from 'react-native';
import {FONTS} from '../../styles/theme';
import dimensions from '../../constants/dimensions';

const makeStyles = colors =>
  StyleSheet.create({
    container: {
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
      marginTop: 10,
    },
    favAndWatchCont: {
      top: dimensions.HEIGHT / 1.45,
      position: 'absolute',
      end: 0,
      gap: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    favoriteContainer: {
      backgroundColor: 'white',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    ratingContainer: {
      width: 200,
      top: dimensions.HEIGHT / 1.43,
      position: 'absolute',
      start: 5,
    },
  });

export default makeStyles;
