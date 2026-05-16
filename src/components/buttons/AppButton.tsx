import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

interface AppButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  styleTitle?: TextStyle | TextStyle[];
  disabled?: boolean
}

const AppButton: FC<AppButtonProps> = ({
  title,
  onPress,
  textColor = AppColors.white,
  backgroundColor = AppColors.primary,
  styleTitle,
  disabled = false
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, { backgroundColor: backgroundColor }, disabled && styles.disabledContainer]}
    >
      <AppText variant="bold" style={[styles.textTitle, { color: textColor },disabled && styles.disabledText, styleTitle]}>
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
    width: '100%'
  },
  textTitle: {
    fontSize: s(16)
  },
  disabledContainer: {
    backgroundColor: AppColors.redGrey
  },
  disabledText: {
    color: AppColors.textGrey
  }
});
