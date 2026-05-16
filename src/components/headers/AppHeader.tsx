import { StyleSheet, View } from 'react-native'
import React from 'react'
import Avatar from '../Avatar'
import AppText from '../texts/AppText'
import { SharedPaddingHorizontal } from '../../styles/SharedStyles'
import { vs } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

type AppHeaderProps = {
  title?: string;
}

const AppHeader = ({ title = 'Welcome Back' }: AppHeaderProps) => {
  const navigation = useNavigation<any>()

  return (
    <View style={styles.container}>
        <AppText variant='bold'>{title}</AppText>
      <Avatar onPress={() => navigation.navigate('ProfileScreen')}/>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SharedPaddingHorizontal,
        paddingVertical: vs(8)
    }
})
