import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppText from '../../components/texts/AppText'
import AppButton from '../../components/buttons/AppButton'
import AppInputText from '../../components/inputs/AppInputText'
import { AppColors } from '../../styles/colors'

const homeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: AppColors.white, flex: 1}}>
      <AppText variant='medium'>Home Text</AppText>
      <AppText variant='bold'>Home Text</AppText>
      <AppButton title='Hello'/>
      <AppInputText placeholder="example@example.com"/>
    </SafeAreaView>
  )
}

export default homeScreen

const styles = StyleSheet.create({})