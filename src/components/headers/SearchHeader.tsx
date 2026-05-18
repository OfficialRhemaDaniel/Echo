import React from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Avatar from "../Avatar";
import AppInputText from "../inputs/AppInputText";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";

interface SearchHeaderProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder?: string;
}

const SearchHeader = ({
  value,
  onChangeText,
  onSubmitEditing,
  placeholder = "Search echo",
}: SearchHeaderProps) => {
  return (
    <View style={styles.searchHeader}>
      <Avatar />
      <AppInputText
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        inputStyle={styles.searchInput}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
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
    marginHorizontal: s(10),
  },
});