import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from '../texts/AppText'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'

const ProfileActionButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AppText variant='bold'>Follow</AppText>
    </TouchableOpacity>
  )
}

export default ProfileActionButton

const styles = StyleSheet.create({
    container: {
        height: vs(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: AppColors.primary,
        width: s(108)
    }
})