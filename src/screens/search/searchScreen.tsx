import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import Avatar from "../../components/Avatar";
import AppInputText from "../../components/inputs/AppInputText";
import AppText from "../../components/texts/AppText";
import { AppColors } from "../../styles/colors";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";

const searchIllustration = require("../../assets/illustrations/emptySearchIllustration.png");

const searchScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchHeader}>
        <Avatar />
        <AppInputText
          value={search}
          onChangeText={setSearch}
          placeholder="Search echo"
          inputStyle={styles.searchInput}
        />
      </View>

      <AppText variant="bold" style={styles.recentsTitle}>
        Recents
      </AppText>

      <View style={styles.emptyState}>
        <Image
          source={searchIllustration}
          style={styles.illustration}
          resizeMode="contain"
        />
        <AppText variant="bold" style={styles.emptyTitle}>
          No recent Searches
        </AppText>
      </View>
    </SafeAreaView>
  );
};

export default searchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SharedPaddingHorizontal,
    paddingVertical: vs(10),
  },
  searchInput: {
    flex: 1,
    height: vs(40),
    borderRadius: s(20),
    paddingLeft: s(22),
    marginHorizontal: s(10)
  },
  recentsTitle: {
    fontSize: s(16),
    marginTop: vs(36),
    paddingHorizontal: SharedPaddingHorizontal,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: vs(100),
  },
  illustration: {
    width: s(190),
    height: vs(170),
  },
  emptyTitle: {
    fontSize: s(16),
    marginTop: vs(12),
  },
});
