import React from 'react'
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'
import AppText from '../texts/AppText'
import AppInputText from './AppInputText'

interface AuthInputFieldProps {
  label: string
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  secureTextEntry?: boolean
  keyboardType?: KeyboardTypeOptions
  containerStyle?: ViewStyle | ViewStyle[]
  inputStyle?: TextStyle | TextStyle[]
  returnKeyType?: ReturnKeyTypeOptions
  onSubmitEditing?: () => void
}

const AuthInputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  containerStyle,
  inputStyle,
  returnKeyType,
  onSubmitEditing,
}: AuthInputFieldProps) => {
  return (
    <View style={[styles.inputGroup, containerStyle]}>
      <AppText style={styles.label}>{label}</AppText>
      <AppInputText
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        inputStyle={inputStyle}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  )
}

export default AuthInputField

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: vs(14),
    width: "100%"
  },
  label: {
    marginBottom: vs(10),
    fontSize: s(14),
    color: AppColors.black,
  },
})
