import {
  StyleSheet,
  TextStyle,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'

interface AppInputTextProps extends Omit<TextInputProps, 'style' | 'value' | 'onChangeText'> {
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
}

const AppInputText = ({
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  ...textInputProps
}: AppInputTextProps) => {
  return (
    <TextInput
    value={value}
    onChangeText={onChangeText}
    {...textInputProps}
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
