import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const SignInScreen = () => {

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView>
      <Text>SignInScreen</Text>
      <Button 
  title="Log In" 
  onPress={() => navigation.navigate('MainAppBottomTabs')} 
/>
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})