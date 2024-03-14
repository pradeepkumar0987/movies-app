import {useNavigation} from '@react-navigation/native';
import ProfileView from './ProfileView';
import {useEffect, useState} from 'react';
import {getStorageData} from '../../../helper/services';

const ProfileController = () => {
  const navigation = useNavigation();
  const [userDate, setUserData] = useState({});

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const data = await getStorageData('profile');
    setUserData(data);
  };

  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  const onPressRegister = () => {
    navigation.navigate('Signup');
  };
  return (
    <ProfileView
      userDate={userDate}
      onPressLogin={onPressLogin}
      onPressRegister={onPressRegister}
    />
  );
};

export default ProfileController;
