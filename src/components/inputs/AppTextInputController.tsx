import { KeyboardTypeOptions, StyleSheet } from 'react-native'
import React from 'react'
import { Control, Controller, FieldValues, Path, RegisterOptions } from 'react-hook-form'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'
import AppText from '../texts/AppText'
import AppInputText from './AppInputText'

interface AppTextInputControllerProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const AppTextInputController = <TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
}: AppTextInputControllerProps<TFieldValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppInputText
            value={value}
            onChangeText={onChange}
            error={error}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />
          {error?.message ? (
            <AppText style={styles.errorText}>{error.message}</AppText>
          ) : null}
        </>
      )}
    />
  )
}

export default AppTextInputController

const styles = StyleSheet.create({
  errorText: {
    marginTop: vs(6),
    fontSize: s(12),
    color: AppColors.red,
  },
})
