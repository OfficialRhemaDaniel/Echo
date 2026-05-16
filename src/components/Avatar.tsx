import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

type AvatarProps = {
  onPress?: () => void;
};

const Avatar = ({ onPress }: AvatarProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo_rYT0Ltw6rjKlCHa7EDY9ICpBTsRyVVmQ&s'}}
      style={styles.image}
      />
    </TouchableOpacity>
  )
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        height: s(40),
        width: s(40),
        overflow: 'hidden',
        borderRadius: s(20)
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})
