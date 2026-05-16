import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs } from 'react-native-size-matters'
import AppHeader from '../../components/headers/AppHeader'
import AppText from '../../components/texts/AppText'
import { AppColors } from '../../styles/colors'

const notificationIllustration = require('../../assets/illustrations/emptyNotificationIllustration.png')

const notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Notification" />

      <View style={styles.emptyState}>
        <Image
          source={notificationIllustration}
          style={styles.illustration}
          resizeMode="contain"
        />
        <AppText variant="bold" style={styles.emptyTitle}>
          No notifications yet
        </AppText>
      </View>
    </SafeAreaView>
  )
}

export default notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: vs(120),
  },
  illustration: {
    width: s(200),
    height: vs(174),
  },
  emptyTitle: {
    fontSize: s(16),
    marginTop: vs(24),
  },
})
