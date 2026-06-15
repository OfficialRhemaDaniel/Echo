import {
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native"; // Added missing type imports
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";

interface ProfileActionButtonProps {
  title: string;
  onPress: () => void;
  variant?: "filled" | "outline";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const ProfileActionButton: FC<ProfileActionButtonProps> = ({
  onPress,
  title,
  variant = "filled",
  style,
  textStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        variant === "outline" ? styles.outlineButton : styles.filledButton,
        style,
      ]}
    >
      <AppText
        variant="bold"
        style={[
          variant === "outline"
            ? styles.outlineButtonText
            : styles.filledButtonText,
          textStyle,
        ]}
      >
        {title}
      </AppText>
    </Pressable>
  );
};

export default ProfileActionButton;

const styles = StyleSheet.create({
  filledButton: {
    backgroundColor: AppColors.primary,
    paddingVertical: vs(4),
    paddingHorizontal: SharedPaddingHorizontal,
    borderRadius: s(30),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: vs(8),
    alignSelf: "flex-start",
  },
  filledButtonText: {
    color: AppColors.white,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: AppColors.primary,
    alignSelf: "flex-start",
    paddingVertical: vs(2),
    paddingHorizontal: SharedPaddingHorizontal,
    borderRadius: s(30),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: vs(8),

  },
  outlineButtonText: {
    color: AppColors.primary,
  },
});
