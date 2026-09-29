import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/texts/AppText";
import { s, vs } from "react-native-size-matters";
import OtpInput from "../../components/inputs/OtpComponent";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import { useNavigation } from "@react-navigation/native";
import { useOnboarding } from "../../contexts/OnboardingContext";

const VerifyEmailScreen = () => {
  const [otp, setOtp] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(60);
  const navigation = useNavigation<any>();
  const { verifyEmail, resendOtp } = useOnboarding();

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setTimeout(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const handleResend = async () => {
    if (secondsLeft > 0) return;
    await resendOtp();
    setOtp("");
    setSecondsLeft(60);
  };

  const handleVerify = async () => {
    if (otp.length < 4) return;
    try {
      await verifyEmail(otp);
      navigation.navigate("EmailVerified");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppText variant="bold" style={styles.header}>
        Verify Email
      </AppText>

      <View style={styles.otpFields}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          onComplete={(code) => console.log(code)}
        />
      </View>

      {secondsLeft > 0 && (
        <AppText style={styles.resendText}>
          Resend in {secondsLeft} seconds.
        </AppText>
      )}

      <View style={styles.buttonContainer}>
        <AppButton
          title="Resend OTP"
          onPress={handleResend}
          disabled={secondsLeft > 0}
        />
        <AppButton
          title="Verify Email"
          style={{ marginTop: vs(14) }}
          disabled={otp.length < 4}
          onPress={handleVerify}
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: s(24),
    marginTop: vs(40),
    alignSelf: "center",
  },
  otpFields: {
    marginTop: vs(50),
  },
  resendText: {
    alignSelf: "center",
    marginTop: vs(20),
    fontSize: s(12),
    color: AppColors.black,
  },
  buttonContainer: {
    marginHorizontal: SharedPaddingHorizontal,
    justifyContent: "space-between",
    marginTop: vs(140),
  },
});
