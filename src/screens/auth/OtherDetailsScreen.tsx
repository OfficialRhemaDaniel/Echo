import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import AppText from "../../components/texts/AppText";
import { AppColors } from "../../styles/colors";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import { useForm } from "react-hook-form";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { ScrollView } from "react-native-gesture-handler";
import { useOnboarding } from "../../contexts/OnboardingContext";

type OtherDetailsFormData = {
  username: string;
  password: string;
  email: string;
};

const OtherDetailsScreen = () => {
  const { data, createAccount } = useOnboarding();
  const navigation = useNavigation<any>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { control, handleSubmit } = useForm<OtherDetailsFormData>({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = async (formData: OtherDetailsFormData) => {
    try {
      setErrorMessage(null);
      await createAccount(formData.username, formData.email, formData.password);
      navigation.navigate("VerifyEmail");
    } catch (e: any) {
      console.log(
        "Full error:",
        e.response?.status,
        e.response?.data ?? e.message,
      );
      const message =
        e.response?.data?.message ?? "Something went wrong. Please try again.";
      setErrorMessage(message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.primary} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Image source={require("../../assets/Echo_Logo.png")} />

            <View style={styles.loginRow}>
              <AppText style={styles.loginText}>
                Already have an account?{" "}
              </AppText>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <AppText variant="bold" style={styles.loginText}>
                  Log In
                </AppText>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.panelShadow} />

          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <AppText variant="bold" style={styles.title}>
                Other Details
              </AppText>
              <AppText style={styles.subtitle}>
                Input Username and Password
              </AppText>
            </View>

            {errorMessage && (
              <AppText style={styles.errorText}>{errorMessage}</AppText>
            )}

            <View style={styles.inputGroup}>
              <AppText style={styles.label}>Username</AppText>
              <AppTextInputController
                control={control}
                name="username"
                placeholder="The_Logical_Creative"
                rules={{
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                }}
              />
            </View>

            <View style={styles.inputGroup}>
              <AppText style={styles.label}>Password</AppText>
              <AppTextInputController
                control={control}
                name="password"
                placeholder="Password"
                secureTextEntry
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
              />
            </View>

            <View style={styles.inputGroup}>
              <AppText style={styles.label}>Email</AppText>
              <AppTextInputController
                control={control}
                name="email"
                placeholder="example@example.com"
                keyboardType="email-address"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
              />
            </View>

            <AppButton title="Next" onPress={handleSubmit(onSubmit)} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtherDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    color: AppColors.white,
    fontSize: s(14),
  },
  panelShadow: {
    position: "absolute",
    top: vs(235),
    alignSelf: "center",
    width: "86%",
    height: vs(60),
    borderTopLeftRadius: s(24),
    borderTopRightRadius: s(24),
    backgroundColor: "rgba(255, 255, 255, 0.45)",
  },
  formContainer: {
    backgroundColor: AppColors.white,
    borderTopLeftRadius: s(28),
    borderTopRightRadius: s(28),
    paddingHorizontal: SharedPaddingHorizontal,
    paddingVertical: vs(20),
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: vs(28),
  },
  title: {
    fontSize: s(24),
    color: AppColors.black,
  },
  subtitle: {
    marginTop: vs(4),
    fontSize: s(14),
    color: AppColors.textGrey,
  },
  errorText: {
    color: "red",
    fontSize: s(13),
    textAlign: "center",
    marginBottom: vs(14),
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
});
