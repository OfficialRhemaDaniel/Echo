import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewEchoButton from "../../components/buttons/NewEchoButton";
import EchoComponent from "../../components/echos/EchoComponent";
import ProfileHeaderComponent from "../../components/ProfileHeaderComponent";
import { echos } from "../../data/Echos";
import { AppColors } from "../../styles/colors";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <FlatList
        data={echos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EchoComponent echo={item} />}
        ListHeaderComponent={<ProfileHeaderComponent />}
      />
      <NewEchoButton />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
});
