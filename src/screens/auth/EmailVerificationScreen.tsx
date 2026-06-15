import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import AppInputText from "../../components/inputs/AppInputText";
import AppText from "../../components/texts/AppText";
import { AppColors } from "../../styles/colors";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import { useNavigation } from "@react-navigation/native";

const EmailVerificationScreen = () => {
  const navigation = useNavigation<any>()
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/illustrations/verifyEmailIllustration.png")}
          resizeMode="contain"
        />

        <AppText variant="bold" style={styles.title}>
          Verify Email
        </AppText>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <AppText style={styles.label}>Input your Email</AppText>
            <AppInputText
              value={email}
              onChangeText={setEmail}
              placeholder="example@example.com"
              keyboardType="email-address"
              inputStyle={styles.Input}
            />
          </View>

          <AppButton title="Verify your Email" onPress={() => navigation.navigate("EmailVerified")}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: AppColors.white,
    paddingTop: vs(100),
  },
  title: {
    marginTop: vs(22),
    marginBottom: vs(34),
    fontSize: s(24),
    color: AppColors.black,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: SharedPaddingHorizontal,
  },
  inputGroup: {
    marginBottom: vs(14),
    width: "100%",
  },
  label: {
    marginBottom: vs(10),
    fontSize: s(14),
    color: AppColors.black,
  },
  Input: {
    marginBottom: vs(50)
  }
});
