import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {useState} from 'react';
import {useTheme} from 'react-native-paper';
import makeStyles from './style';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../components/CommonButton';

const LogoutModelView = ({modalisvisible, onCancelPressed, onPressLogout}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = makeStyles(colors);

  return (
    <>
      <View style={styles.modalOverlay} />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.submodalview}>
            <Text style={[styles.titletext1, {color: colors.white}]}>
              Logout
            </Text>
          </View>
          <Text style={[styles.titletext1, {color: colors.white}]}>
            Are you sure you want to logout? This will erase your current
            settings.{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingHorizontal: 10,
            }}>
            <View style={{flex: 1}}>
              <CommonButton
                label={'Cancel'}
                onPress={onCancelPressed}
                twoButton={true}
                backgroundColor={colors.primary}
                labelColor={colors.black}
              />
            </View>
            <View style={{flex: 1}}>
              <CommonButton
                label={'Logout'}
                onPress={onPressLogout}
                backgroundColor={colors.primary}
                labelColor={colors.black}
                twoButton={true}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default LogoutModelView;
