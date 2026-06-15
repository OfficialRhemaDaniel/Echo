import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/texts/AppText";
import { AppColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import SearchHeader from "../../components/headers/SearchHeader";
import UserCardComponent from "../../components/cards/UserCardComponent";
import { users } from "../../data/Users";
import { echos } from "../../data/Echos";
import EchoComponent from "../../components/echos/EchoComponent";

const SearchResults = ({ route }: any) => {
  const [search, setSearch] = useState(route?.params?.query ?? "");

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader value={search} onChangeText={setSearch} />

      <ScrollView style={styles.contentScrollView} contentContainerStyle={styles.scrollViewContent}>
        <AppText
          variant="bold"
          style={{ paddingLeft: s(20), marginVertical: vs(12) }}
        >
          People
        </AppText>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.peopleFlatList}
          contentContainerStyle={styles.peopleList}
          renderItem={({ item }) => (
            <UserCardComponent
              name={item.name}
              username={item.username}
              bio={item.bio}
              avatarUri={item.avatarUri}
              coverUri={item.coverUri}
            />
          )}
        />

        <AppText
          variant="bold"
          style={{ paddingLeft: s(20), marginVertical: vs(12) }}
        >
          Echos
        </AppText>
        {echos.map((item) => (
          <EchoComponent key={item.id} echo={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  peopleList: {
    alignItems: "flex-start",
},
 peopleFlatList: {
    flexGrow: 0,
    height: vs(270),
  },
  contentScrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: vs(20),
  },
});
