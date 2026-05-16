import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

const NewEchoButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.container}>
      <Feather name="plus" size={s(32)} color={AppColors.white} />
    </TouchableOpacity>
  );
};

export default NewEchoButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: s(20),
    bottom: s(50),
    width: s(60),
    height: s(60),
    borderRadius: s(35),
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
});
