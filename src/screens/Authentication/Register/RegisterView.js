import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import makeStyles from './styles';
import CommonTextInputFieldView from '../../../components/commonTextInputField/CommonTextInputFieldView';
import CommonButton from '../../../components/CommonButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegisterView = ({
  phoneNumber,
  phoneNumberTextChange,
  email,
  emailTextChange,
  password,
  passwordTextChange,
  confirmPassword,
  confirmPasswordTextChange,
  username,
  usernameTextChange,
  borderColor,
  warningText,
  buttonDisabled,
  onPressRegister,
  onPressHaveAccount,
}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: colors.darkGray,
      }}
      behavior={'height'}
      keyboardVerticalOffset={10}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity onPress={onPressHaveAccount}>
            <Ionicons name={'arrow-back'} size={24} color={colors.white} />
          </TouchableOpacity>
          <View>
            <Image
              style={styles.logo}
              source={require('../../../../assets/Images/movies-app-icon.png')}
            />
            <Text style={[styles.headingText, {marginTop: -20}]}>
              Movies App
            </Text>
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headingText}>Register</Text>
            <View
              style={{
                marginTop: 10,
              }}>
              <CommonTextInputFieldView
                labelColor={colors.primary}
                label={'Username'}
                placeholderTextColor={colors.gray500}
                value={username}
                onChangeText={usernameTextChange}
                borderWidth={borderColor}
                borderColor={borderColor ? colors.primaryLight : false}
                warningText={warningText}
                paddingStart={10}
                width={'100%'}
              />

              <CommonTextInputFieldView
                labelColor={colors.primary}
                label={'Email'}
                placeholderTextColor={colors.gray500}
                value={email}
                onChangeText={emailTextChange}
                keyboardType={'email'}
                borderWidth={borderColor}
                borderColor={borderColor ? colors.primaryLight : false}
                warningText={warningText}
                paddingStart={10}
                width={'100%'}
              />

              <CommonTextInputFieldView
                labelColor={colors.primary}
                label={'Password'}
                placeholderTextColor={colors.gray500}
                value={password}
                onChangeText={passwordTextChange}
                borderWidth={borderColor}
                borderColor={borderColor ? colors.primaryLight : false}
                warningText={warningText}
                secureTextEntry={true}
                paddingStart={10}
                width={'100%'}
              />

              <CommonTextInputFieldView
                labelColor={colors.primary}
                label={'Confirm password'}
                placeholderTextColor={colors.gray500}
                value={confirmPassword}
                onChangeText={confirmPasswordTextChange}
                borderWidth={borderColor}
                borderColor={borderColor ? colors.primaryLight : false}
                warningText={warningText}
                secureTextEntry={true}
                paddingStart={10}
                width={'100%'}
              />

              <CommonTextInputFieldView
                labelColor={colors.primary}
                label={'Phone number'}
                placeholderTextColor={colors.gray500}
                value={phoneNumber}
                onChangeText={phoneNumberTextChange}
                keyboardType={'phone-pad'}
                maxLength={12}
                borderWidth={borderColor}
                borderColor={borderColor ? colors.primaryLight : false}
                warningText={warningText}
                paddingStart={10}
                width={'100%'}
              />

              <CommonButton
                label={'Register'}
                borderColor={buttonDisabled ? colors.gray500 : colors.primary}
                backgroundColor={
                  buttonDisabled ? colors.gray500 : colors.primary
                }
                labelColor={buttonDisabled ? colors.gray300 : colors.richBlack}
                onPress={onPressRegister}
                disabled={buttonDisabled}
              />
            </View>

            {/* <TouchableOpacity
              style={{marginVertical: 20, alignItems: 'center'}}
              onPress={onPressHaveAccount}>
              <Text>Already have account</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterView;
