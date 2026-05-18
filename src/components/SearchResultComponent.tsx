import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SharedPaddingHorizontal } from '../styles/SharedStyles'
import { s, vs } from 'react-native-size-matters'
import AppText from './texts/AppText'
import Feather from '@expo/vector-icons/Feather';
import { AppColors } from '../styles/colors'

const SearchResultComponent = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Uniport Exams</AppText>
      <Feather name="arrow-up-left" size={s(16)} color={AppColors.textGrey} />
    </View>
  )
}

export default SearchResultComponent

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SharedPaddingHorizontal,
        paddingVertical: vs(6),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: s(14)
    }
})