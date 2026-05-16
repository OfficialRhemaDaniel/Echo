import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs } from 'react-native-size-matters'
import GoogleLogo from '../../assets/GoogleLogo'
import AppButton from '../../components/buttons/AppButton'
import AuthInputField from '../../components/inputs/AuthInputField'
import AppText from '../../components/texts/AppText'
import { AppColors } from '../../styles/colors'
import { SharedPaddingHorizontal } from '../../styles/SharedStyles'

const SignUpScreen = () => {
  const navigation = useNavigation<any>()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.primary} />
      <View style={styles.header}>
        <Image source={require('../../assets/Echo_Logo.png')} />

        <View style={styles.loginRow}>
          <AppText style={styles.loginText}>Already have an account? </AppText>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <AppText variant="bold" style={styles.loginText}>
              Log In
            </AppText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.panelShadow} />

      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <AppText variant="bold" style={styles.title}>
            Create an account
          </AppText>
          <AppText style={styles.subtitle}>Get started for free.</AppText>
        </View>

        <AuthInputField
          label="Username"
          value={username}
          onChangeText={setUsername}
          placeholder="The_Logical_Creative"
        />

        <AuthInputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="****"
          secureTextEntry
        />

        <AppText style={styles.dividerText}>Or Log in with</AppText>

        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
          <GoogleLogo />
        </TouchableOpacity>

        <AppButton
          title="Create"
          onPress={() => navigation.navigate('EmailVerification')}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

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
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: AppColors.white,
    fontSize: s(14),
  },
  panelShadow: {
    position: 'absolute',
    top: vs(235),
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
    paddingVertical: vs(20),
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
