import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/texts/AppText";
import { AppColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import SearchHeader from "../../components/headers/SearchHeader";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import UserCardComponent from "../../components/cards/UserCardComponent";
import ProfileActionButton from "../../components/buttons/ProfileActionButton";

const SearchResults = ({ route }: any) => {
  const [search, setSearch] = useState(route?.params?.query ?? "");

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader value={search} onChangeText={setSearch} />

      <AppText
        variant="bold"
        style={{ paddingLeft: s(20), marginVertical: vs(12) }}
      >
        People
      </AppText>
      <UserCardComponent/>
      <ProfileActionButton/>
    </SafeAreaView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
});
