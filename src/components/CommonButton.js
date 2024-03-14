//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {FONTS} from '../styles/theme';

const CommonButton = props => {
  const {colors} = useTheme();
  const styles = makestyles(props, colors);
  return (
    <TouchableOpacity
      style={[styles.signInButton]}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text
        style={[
          styles.signInText,
          !!props?.labelColor && {color: props.labelColor},
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const makestyles = (props, colors) =>
  StyleSheet.create({
    signInButton: {
      backgroundColor: !!props?.backgroundColor && props?.backgroundColor,
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5, // Adds a shadow effect
      marginVertical: 10,
      borderWidth: 1,
      borderColor: !!props?.borderColor ? props?.borderColor : colors.primary,
    },
    signInText: {
      color: colors.richBlack,
      fontSize: 16,
      fontFamily: FONTS.BOLD,
    },
  });

//make this component available to the app
export default CommonButton;
