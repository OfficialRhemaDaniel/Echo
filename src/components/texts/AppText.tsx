import { StyleSheet, TextProps, StyleProp, TextStyle, Text, View } from 'react-native';
import React, { FC } from 'react'
import { s } from 'react-native-size-matters'

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  variant?: 'bold' | 'medium'; 
  style?: StyleProp<TextStyle>;           
}

const AppText: FC<AppTextProps> = ({ children, style, variant = "medium", ...rest}) => {
  return (
    <View>
      <Text {...rest} style={[styles[variant], style]}>{children}</Text>
    </View>
  )
}

export default AppText

const styles = StyleSheet.create({
    bold: {
        fontSize: s(16),
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
    },

    medium: {
    fontSize: s(16),
    fontFamily: 'Poppins-Regular',
    color: 'black',
  }
})
