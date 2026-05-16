import {
  KeyboardTypeOptions,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'
import { TextInput } from 'react-native-gesture-handler'

interface AppInputTextProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  containerStyle?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
}

const AppInputText = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  inputStyle,
}: AppInputTextProps) => {
  return (
    <TextInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    style={[styles.container, inputStyle]}
    placeholderTextColor={AppColors.textGrey}
    />
  )
}

export default AppInputText

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: AppColors.redGrey,
        height: vs(40),
        borderRadius: s(10),
        justifyContent: 'center',
        paddingLeft: s(20),
        fontSize: s(12),
    }
})
