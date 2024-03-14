import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import makeStyles from './style';
import CommonButton from '../../../components/CommonButton';

const ProfileView = ({onPressLogin, onPressRegister, userDate}) => {
  let profile = '';
  const {colors} = useTheme();
  const style = makeStyles(colors);

  return (
    <View style={style.container}>
      <Text style={style.termsText}>Please login or register an account</Text>
      <CommonButton
        label={'Login'}
        borderColor={colors.primary}
        backgroundColor={colors.primary}
        labelColor={colors.richBlack}
        onPress={onPressLogin}
      />

      <CommonButton
        label={'Create Account'}
        borderColor={colors.primary}
        labelColor={colors.gray300}
        backgroundColor={colors.darkGray}
        onPress={onPressRegister}
      />
    </View>
  );
};

export default ProfileView;
