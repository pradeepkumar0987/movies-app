import {Alert} from 'react-native';
import LogoutModelView from './LogoutModalView';
import {useNavigation} from '@react-navigation/native';
import {removeMultiple, removeStorageData} from '../../helper/services';

const LogoutModalController = () => {
  const navigation = useNavigation();

  const onCancelPressed = () => {
    navigation.goBack();
  };

  const onLogoutPressed = () => {
    removeStorageData('profile');
    navigation.goBack();
  };

  return (
    <LogoutModelView
      onCancelPressed={onCancelPressed}
      onPressLogout={onLogoutPressed}
    />
  );
};

export default LogoutModalController;
