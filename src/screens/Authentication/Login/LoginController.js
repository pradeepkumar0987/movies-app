import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import LoginView from './LoginView';
import {getStorageData, storeStorageDate} from '../../../helper/services';
import {loginValidation} from '../../../constants/Validation';
import {showToast} from '../../../helper/methods';

const LoginController = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [warning, setWarning] = useState(false);
  const [borderColorVisible, setBorderColorVisible] = useState(false);
  const [warningText, setWarninText] = useState('');
  const [enableButton, setEnableButton] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassowrd] = useState('');
  const [userData, setUserData] = useState({});

  const handelPhoneNumberChange = (text, type) => {
    switch (type) {
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

      default:
        break;
    }
  };

  useEffect(() => {
    if (phoneNumber === '' && username) {
      setEnableButton(true);
    }
  }, [phoneNumber]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const data = await getStorageData('profile');
    setUserData(data);
  };
  const handleUserPhoneChange = text => {
    setPhoneNumber(text);
  };

  const onLoginPressed = async () => {
    const validation = loginValidation(
      username,
      userData?.username,
      password,
      userData?.password,
    );

    if (validation !== '') {
      showToast(validation, 'danger');
    } else {
      showToast('Login successfully', 'success');
      const newData = {...userData, login: true};
      await storeStorageDate('profile', newData);
      navigation.navigate('BottomTab');
    }
  };

  const onPressRegister = () => {
    navigation.navigate('Signup');
  };

  const handleButtonPress = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const onPasswordChange = text => {
    setPassowrd(text);
  };

  return (
    <LoginView
      username={username}
      usernameTextChange={text => {
        handelPhoneNumberChange(text, 'username');
      }}
      password={password}
      onPasswordChange={text => {
        handelPhoneNumberChange(text, 'password');
      }}
      onLoginPressed={onLoginPressed}
      borderWidth={warning}
      borderColor={borderColorVisible}
      warningText={warningText}
      buttonDisabled={enableButton}
      navigation={navigation}
      onPressRegister={onPressRegister}
      handleButtonPress={handleButtonPress}
      seePassword={showPassword}
      password={password}
      onPasswordChange={onPasswordChange}
    />
  );
};

export default LoginController;
