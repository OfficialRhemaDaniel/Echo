import React from 'react';
import { Image, StyleSheet, View, FlatList } from 'react-native'; // Correct FlatList import
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs } from 'react-native-size-matters'
import AppHeader from '../../components/headers/AppHeader'
import AppText from '../../components/texts/AppText'
import { AppColors } from '../../styles/colors'
import NotificationCardComponent from '../../components/cards/NotificationCardComponent'
import { notifications as notificationsData } from '../../data/Notifications'; 
import { NotificationType } from '../../data/Notifications'; 

const notificationIllustration = require('../../assets/illustrations/emptyNotificationIllustration.png')

const NotificationsScreen = () => { 
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Notification" />

      {/* <View style={styles.emptyState}>
        <Image
          source={notificationIllustration}
          style={styles.illustration}
          resizeMode="contain"
        />
        <AppText variant="bold" style={styles.emptyTitle}>
          No notifications yet
        </AppText>
      </View>
    */}

    <FlatList
      data={notificationsData} 
      keyExtractor={(item: NotificationType) => item.id.toString()}
      renderItem={({ item }: { item: NotificationType }) => (
        <NotificationCardComponent
          name={item.name} 
          avatarUrl={item.avatarUrl}
          type={item.type} />
      )}
    />
      
    </SafeAreaView>
  )
}

export default NotificationsScreen; 

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
