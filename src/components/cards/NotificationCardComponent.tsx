import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Avatar from '../Avatar'
import AppText from '../texts/AppText'
import { SharedPaddingHorizontal } from '../../styles/SharedStyles'
import { s, vs } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { AppColors } from '../../styles/colors'

interface NotificationCardProps {
  name: string;
  avatarUrl?: string;
  type: 'like' | 'comment' | 'follow';
  onPress?: () => void;
}

const NotificationCardComponent = ({ name, avatarUrl, type, onPress }: NotificationCardProps) => {
  
  const getNotificationDetails = () => {
    switch (type) {
      case 'comment':
        return {
          description: 'commented on your post',
          icon: <FontAwesome name="comment" size={s(18)} color={AppColors.black} />
        };
      case 'follow':
        return {
          description: 'started following you',
          icon: <FontAwesome name="user-plus" size={s(18)} color={AppColors.black} />
        };
      case 'like':
      default:
        return {
          description: 'liked your post',
          icon: <Entypo name="heart" size={s(18)} color={AppColors.primary} />
        };
    }
  };

  const { description, icon } = getNotificationDetails();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.Left}>
        <Avatar url={avatarUrl}/>

        <AppText style={styles.name} variant='bold'>
          {name}{' '}
        </AppText>

        <AppText style={styles.description}>
          {description}
        </AppText>
      </View>

      {icon}
    </TouchableOpacity>
  );
};

export default NotificationCardComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SharedPaddingHorizontal,
    justifyContent: 'space-between',
    paddingVertical: vs(10),
  },
  Left: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '85%',
    overflow: 'hidden',
  },
  name: {
    fontSize: s(14),
    marginLeft: s(12),
  },
  description: {
    fontSize: s(14),
  },
});