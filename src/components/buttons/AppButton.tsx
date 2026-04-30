import { StyleSheet, Text, TouchableOpacity, TextStyle } from "react-native";
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

interface AppButtonProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  styleTitle?: TextStyle | TextStyle[];
}

const AppButton: FC<AppButtonProps> = ({
  title,
  textColor = AppColors.white,
  backgroundColor = AppColors.primary,
  styleTitle
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <AppText variant="bold" style={[styles.textTitle, { color: textColor }, styleTitle]}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    height: vs(45),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(10),
  },
  textTitle: {
    fontSize: s(16)
  },
});
