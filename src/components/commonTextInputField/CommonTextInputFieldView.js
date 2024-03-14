import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import makeStyle from './style';
import {useTheme} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CommonTextInputFieldView = props => {
  const {colors} = useTheme();
  const styles = makeStyle(colors, props);
  return (
    <View style={props?.styles}>
      <View style={{marginVertical: 5}}>
        {props.label && <Text style={styles.label}>{props.label}</Text>}
        {props.descriptionWarningText && (
          <View style={{marginTop: 5}}>
            {props.warning && (
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <AntDesign
                  name={'exclamationcircle'}
                  size={20}
                  color={colors.primaryLight}
                />
              </View>
            )}
            <Text style={styles.descriptionWarning}>
              {props.descriptionWarningText}
            </Text>
          </View>
        )}
        <Pressable onPress={!props.editable && props.onInputBoxPressed}>
          <TextInput
            ref={props.inputRef}
            style={[styles.textInputStyle]}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            editable={props.editable}
            keyboardType={props.keyboardType}
            maxLength={props.maxLength}
            multiline={props.multiline}
            onFocus={props.onFocus}
          />
          {props.leftIcon && (
            <TouchableOpacity
              style={styles.leftText}
              onPress={props.handleButtonPress}>
              <AntDesign name={'search1'} size={30} color={colors.gray500} />
            </TouchableOpacity>
          )}
          {props.rightOption && (
            <TouchableOpacity
              style={styles.rightText}
              onPress={props.handleButtonPress}>
              {props.rightLabel && (
                <Text style={styles.rightLabel}>{props.rightLabel}</Text>
              )}
              <View style={{opacity: 0.8}}>
                <Ionicons
                  name={props.seePassword ? 'eye' : 'eye-off'}
                  size={30}
                  color={colors.gray300}
                />
              </View>
            </TouchableOpacity>
          )}
        </Pressable>

        {props.warningText && (
          <Text style={styles.warningText}>{props.warningText}</Text>
        )}

        {props.customWarningText && (
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <AntDesign
              name={'exclamationcircle'}
              size={24}
              color={colors.primaryLight}
            />
            <Text style={styles.descriptionWarning}>
              {props.customWarningText}
            </Text>
          </View>
        )}

        {props.guideText && (
          <Text style={styles.guideText}>{props.guideText}</Text>
        )}
      </View>
    </View>
  );
};

export default CommonTextInputFieldView;
