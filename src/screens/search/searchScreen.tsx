import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import { AppColors } from "../../styles/colors";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchResultComponent from "../../components/SearchResultComponent";
import SearchHeader from "../../components/headers/SearchHeader";
import { useNavigation } from "@react-navigation/native";

const searchIllustration = require("../../assets/illustrations/emptySearchIllustration.png");

const searchScreen = () => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={() =>
          navigation.navigate("SearchResults", { query: search })
        }
      />
      {/*

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
      </View> */}

      <View style={styles.recentsHeader}>
        <AppText variant="bold" style={{ fontSize: s(16)}}>
          Recents
        </AppText>
        <Ionicons name="close-circle" size={16} color={AppColors.deepGrey} />
      </View>

      <SearchResultComponent/>
      <SearchResultComponent/>
      <SearchResultComponent/>
      <SearchResultComponent/>

    </SafeAreaView>
  );
};

export default searchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
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
  recentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SharedPaddingHorizontal,
    marginTop: vs(20),
    marginBottom: vs(20),
  },
});
