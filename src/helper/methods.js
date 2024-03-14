import {Dimensions, PermissionsAndroid, Platform} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

// show success and failure toast message
export const showToast = (message, type) =>
  showMessage({
    message: `${message}`,
    type: type,
    icon: 'auto',
  });

// set path for android and ios
export const getImagePath = filePath => {
  return Platform.OS === 'ios' ? filePath.replace('file://', '') : filePath;
};
