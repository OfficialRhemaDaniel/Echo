import React, { useRef } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";

type OtpBoxProps = {
  digit?: string;
  variant: "empty" | "filled";
};

export const OtpBox = ({ digit, variant }: OtpBoxProps) => (
  <View
    style={[
      styles.box,
      variant === "filled" ? styles.boxFilled : styles.boxEmpty,
    ]}
  >
    {variant === "filled" && (
      <AppText variant="bold" style={styles.digit}>
        {digit}
      </AppText>
    )}
  </View>
);

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  onComplete?: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

const OtpInput = ({
  value,
  onChange,
  length = 4,
  onComplete,
  style,
}: OtpInputProps) => {
  const inputRef = useRef<TextInput>(null);

  const handleChange = (text: string) => {
    const clean = text.replace(/[^0-9]/g, "").slice(0, length);
    onChange(clean);
    if (clean.length === length) onComplete?.(clean);
  };

  return (
    <Pressable
      onPress={() => inputRef.current?.focus()}
      style={[styles.row, style]}
    >
      {Array.from({ length }).map((_, i) => (
        <OtpBox
          key={i}
          digit={value[i]}
          variant={value[i] ? "filled" : "empty"}
        />
      ))}

      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={length}
        textContentType="oneTimeCode"
        autoComplete="sms-otp"
        caretHidden
        style={styles.hiddenInput}
      />
    </Pressable>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: s(15),
  },
  box: {
    width: s(44),
    height: vs(52),
    borderRadius: s(12),
    justifyContent: "center",
    alignItems: "center",
  },
  boxEmpty: {
    backgroundColor: AppColors.redGrey,
  },
  boxFilled: {
    backgroundColor: AppColors.primary,
  },
  digit: {
    color: AppColors.white,
    fontSize: s(16),
  },
  hiddenInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
  },
});
