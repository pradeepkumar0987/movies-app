import {StyleSheet} from 'react-native';
import {FONTS} from '../../styles/theme';

const makeStyle = (colors, props) =>
  StyleSheet.create({
    label: {
      color: props.labelColor ? props.labelColor : colors.primary,
      fontSize: 14,
      fontFamily: FONTS.REGULAR,
    },
    textInputStyle: {
      borderWidth: props.borderWidth ? 2 : 1,
      borderColor: props?.borderColor ? props?.borderColor : colors.gray500,
      borderRadius: 10,
      marginVertical: 3,
      paddingVertical: props.paddingVertical ? props.paddingVertical : 5,
      width: props.width,
      textAlignVertical: props.textAlignVertical
        ? props.textAlignVertical
        : 'center',
      paddingStart: props.paddingStart ? props.paddingStart : 15,
      textAlign: props.textAlign,
      paddingEnd: props.paddingEnd
        ? props.paddingEnd
        : props.rightOption
        ? 60
        : 5,
      fontSize: 16,
      marginTop: 5,
      height: props.height ? props.height : 50,
      color: props.inputColor ? colors.white : colors.gray300,
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : colors.black,
    },
    labelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label2: {
      color: props.color && props.color,
      fontSize: 14,
      fontFamily: FONTS.REGULAR,
      letterSpacing: 0.5,
    },
    rightText: {
      height: 50,
      position: 'absolute',
      end: 0,
      top: 5,
      bottom: 0,
      flexDirection: 'row',
      marginEnd: props.transform ? -10 : 10,
      alignItems: 'center',
    },
    leftText: {
      height: 50,
      position: 'absolute',
      start: 8,
      top: 5,
      bottom: 0,
      flexDirection: 'row',
      marginEnd: props.transform ? -10 : 10,
      alignItems: 'center',
    },
    rightImage: {
      width: 18,
      height: 20,
      resizeMode: 'contain',
      transform: props.transform && [{rotate: '90deg'}],
    },
    rightLabel: {
      color: colors.primary,
      fontSize: 18,
      marginBottom: 2,
    },
    descriptionWarningText: {
      color: colors.primaryLight,
      fontSize: 16,
      marginTop: 5,
      fontFamily: FONTS.BOLD,
    },
    descriptionWarning: {
      color: colors.primaryLight,
      fontSize: 16,
      marginVertical: 5,
      fontFamily: FONTS.REGULAR,
    },
    warningText: {
      color: props?.warningTextColor
        ? props?.warningTextColor
        : colors.primaryLight,
      fontSize: 14,
      marginTop: 5,
    },
    guideText: {
      color: colors.gray300,
      fontSize: 14,
      marginVertical: 10,
      fontFamily: FONTS.REGULAR,
    },
  });

export default makeStyle;
