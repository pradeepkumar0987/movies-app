import React from 'react';
import {Image, Text, View, TouchableOpacity, Linking} from 'react-native';
import {useTheme} from 'react-native-paper';
import makeStyles from './styles';
import CommonTextInputFieldView from '../../../components/commonTextInputField/CommonTextInputFieldView';
import CommonButton from '../../../components/CommonButton';

const LoginView = ({
  username,
  usernameTextChange,
  borderColor,
  warningText,
  buttonDisabled,
  onLoginPressed,
  onPressRegister,
  handleButtonPress,
  seePassword,
  password,
  onPasswordChange,
}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../../../assets/Images/movies-app-icon.png')}
        />
        <Text style={[styles.headingText, {marginTop: -20}]}>Movies App</Text>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headingText}>Login to movies app</Text>
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
            label={'Password'}
            placeholderTextColor={colors.gray500}
            value={password}
            onChangeText={onPasswordChange}
            borderWidth={borderColor}
            borderColor={borderColor ? colors.primaryLight : false}
            warningText={warningText}
            paddingStart={10}
            width={'100%'}
            rightOption={true}
            password={true}
            handleButtonPress={handleButtonPress}
            seePassword={seePassword}
            secureTextEntry={!seePassword}
          />
          <CommonButton
            label={'Login'}
            borderColor={buttonDisabled ? colors.gray500 : colors.primary}
            backgroundColor={buttonDisabled ? colors.gray500 : colors.primary}
            labelColor={buttonDisabled ? colors.gray300 : colors.richBlack}
            onPress={onLoginPressed}
            disabled={buttonDisabled}
          />

          <TouchableOpacity
            style={{marginTop: 20, alignItems: 'center'}}
            onPress={onPressRegister}
            disabled={true}>
            <Text style={{color: colors.primary}}>Don't have an account?</Text>
          </TouchableOpacity>

          <CommonButton
            label={'Create Account'}
            borderColor={colors.primary}
            labelColor={colors.gray300}
            backgroundColor={colors.charcoalGray}
            onPress={onPressRegister}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginView;
