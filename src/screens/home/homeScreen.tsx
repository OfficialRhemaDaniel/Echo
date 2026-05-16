import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppColors } from '../../styles/colors'
import AppHeader from '../../components/headers/AppHeader'
import EchoComponent from '../../components/echos/EchoComponent'
import { echos } from '../../data/Echos'
import NewEchoButton from '../../components/buttons/NewEchoButton'

const homeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader/>
      <FlatList
        data={echos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EchoComponent echo={item} />}
      />
      <NewEchoButton />
    </SafeAreaView>
  )
}

export default homeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    flex: 1,
  },
})
