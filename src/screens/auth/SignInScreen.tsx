import React, { useState } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs } from 'react-native-size-matters'
import AppButton from '../../components/buttons/AppButton'
import AuthInputField from '../../components/inputs/AuthInputField'
import AppText from '../../components/texts/AppText'
import { AppColors } from '../../styles/colors'
import { SharedPaddingHorizontal } from '../../styles/SharedStyles'
import GoogleLogo from '../../assets/GoogleLogo'

const SignInScreen = () => {
  const navigation = useNavigation<any>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.primary} />
      <View style={styles.header}>
       <Image source={require('../../assets/Echo_Logo.png')}/>

        <View style={styles.signUpRow}>
          <AppText style={styles.signUpText}>Don't have an account? </AppText>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <AppText variant="bold" style={styles.signUpText}>
            Sign up
          </AppText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.panelShadow} />

      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <AppText variant="bold" style={styles.title}>
            Welcome back
          </AppText>
          <AppText style={styles.subtitle}>Log in to your account</AppText>
        </View>

        <AuthInputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="example@example.com"
          keyboardType="email-address"
        />

        <AuthInputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="••••"
          secureTextEntry
        />

        <AppText style={styles.dividerText}>Or Log in with</AppText>

        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
            <GoogleLogo/>
        </TouchableOpacity>

        <AppButton
          title="Log In"
          onPress={() => navigation.navigate('MainAppBottomTabs')}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoText: {
    color: AppColors.white,
    fontSize: s(34),
    marginBottom: vs(20),
  },
  signUpRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    color: AppColors.white,
    fontSize: s(14),
  },
  panelShadow: {
    position: 'absolute',
    top: vs(190),
    alignSelf: 'center',
    width: '86%',
    height: vs(60),
    borderTopLeftRadius: s(24),
    borderTopRightRadius: s(24),
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
  },
  formContainer: {
    backgroundColor: AppColors.white,
    borderTopLeftRadius: s(28),
    borderTopRightRadius: s(28),
    paddingHorizontal: SharedPaddingHorizontal,
    paddingVertical: vs(40),
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: vs(28),
  },
  title: {
    fontSize: s(24),
    color: AppColors.black,
  },
  subtitle: {
    marginTop: vs(4),
    fontSize: s(14),
    color: AppColors.textGrey,
  },
  dividerText: {
    marginTop: vs(4),
    marginBottom: vs(18),
    textAlign: 'center',
    fontSize: s(12),
    color: AppColors.textGrey,
  },
  googleButton: {
    height: vs(48),
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: s(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: vs(18),
  },
})
