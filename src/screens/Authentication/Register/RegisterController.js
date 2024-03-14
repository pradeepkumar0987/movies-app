import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import RegisterView from './RegisterView';
import {registerValidation} from '../../../constants/Validation';
import {showMessage} from 'react-native-flash-message';
import {showToast} from '../../../helper/methods';
import {storeStorageDate} from '../../../helper/services';

const RegisterController = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [warning, setWarning] = useState(false);
  const [borderColorVisible, setBorderColorVisible] = useState(false);
  const [warningText, setWarninText] = useState('');
  const [enableButton, setEnableButton] = useState(true);

  const handelPhoneNumberChange = (text, type) => {
    switch (type) {
      case 'phoneNumber':
        if (text !== '') {
          setWarning(false);
          setBorderColorVisible(false);
          setWarninText(null);
          handleUserPhoneChange(text);
          setEnableButton(false);
        } else {
          setPhoneNumber('');
          setEnableButton(true);
        }
        break;
      case 'email':
        if (text !== '') {
          setWarning(false);
          setBorderColorVisible(false);
          setWarninText(null);
          setEmail(text);
          setEnableButton(false);
        } else {
          setEmail('');
          setEnableButton(true);
        }
        break;

      case 'password':
        if (text !== '') {
          setWarning(false);
          setBorderColorVisible(false);
          setWarninText(null);
          setPassowrd(text);
          setEnableButton(false);
        } else {
          setPassowrd('');
          setEnableButton(true);
        }
        break;

      case 'confirmPassword':
        if (text !== '') {
          setWarning(false);
          setBorderColorVisible(false);
          setWarninText(null);
          setConfirmPassword(text);
          setEnableButton(false);
        } else {
          setConfirmPassword('');
          setEnableButton(true);
        }
        break;

      case 'username':
        if (text !== '') {
          setWarning(false);
          setBorderColorVisible(false);
          setWarninText(null);
          setUsername(text);
          setEnableButton(false);
        } else {
          setUsername('');
          setEnableButton(true);
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const validation = registerValidation(
      username,
      email,
      phoneNumber,
      password,
      confirmPassword,
    );
    if (validation === '') {
      setEnableButton(true);
    }
  }, []);

  const handleUserPhoneChange = text => {
    if (text[0] == '1' || (text[1] == '1' && text[0] === '+')) {
      if (text[0] === '+') text = text[0] + text.substr(2);
      else text = text.substr(1);
    }
    var onlyNumText = text.replace(/[^0-9]+/g, '').slice(0, 10);

    var cleaned = '';
    cleaned = onlyNumText.slice(0, 3);
    if (onlyNumText.length > 3) {
      cleaned = cleaned + '-' + onlyNumText.slice(3, 6);
    }
    if (onlyNumText.length > 6) {
      cleaned = cleaned + '-' + onlyNumText.slice(6, 10);
    }
    setPhoneNumber(cleaned);
  };

  const onPressRegister = async () => {
    const validation = registerValidation(
      username,
      email,
      phoneNumber,
      password,
      confirmPassword,
    );

    if (validation !== '') {
      showToast(validation, 'danger');
    } else {
      const userData = {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      };
      await storeStorageDate('profile', userData);
      showToast('You have been successfully registered', 'success');
      navigation.navigate('Login');
    }
  };

  const onPressHaveAccount = () => {
    navigation.goBack();
  };

  return (
    <RegisterView
      phoneNumber={phoneNumber}
      phoneNumberTextChange={text => {
        handelPhoneNumberChange(text, 'phoneNumber');
      }}
      email={email}
      emailTextChange={text => {
        handelPhoneNumberChange(text, 'email');
      }}
      password={password}
      passwordTextChange={text => {
        handelPhoneNumberChange(text, 'password');
      }}
      confirmPassword={confirmPassword}
      confirmPasswordTextChange={text => {
        handelPhoneNumberChange(text, 'confirmPassword');
      }}
      username={username}
      usernameTextChange={text => {
        handelPhoneNumberChange(text, 'username');
      }}
      borderWidth={warning}
      borderColor={borderColorVisible}
      warningText={warningText}
      buttonDisabled={enableButton}
      navigation={navigation}
      onPressRegister={onPressRegister}
      onPressHaveAccount={onPressHaveAccount}
    />
  );
};

export default RegisterController;
