import React from "react";
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
import GoogleLogo from "../../assets/GoogleLogo";
import AppButton from "../../components/buttons/AppButton";
import AppText from "../../components/texts/AppText";
import { AppColors } from "../../styles/colors";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import { useForm } from "react-hook-form";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useOnboarding } from "../../contexts/OnboardingContext";
import { ScrollView } from "react-native-gesture-handler";

type SignUpFormData = {
  firstName: string;
  lastName: string;
};

const SignUpScreen = () => {
  const navigation = useNavigation<any>();
  const { setNameInfo } = useOnboarding();

  const { control, handleSubmit } = useForm<SignUpFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const signUp = (formData: SignUpFormData) => {
    setNameInfo(formData.firstName, formData.lastName);
    navigation.navigate("OtherDetails");
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
                Create an account
              </AppText>
              <AppText style={styles.subtitle}>Get started for free.</AppText>
            </View>

            <View style={styles.inputGroup}>
              <AppText style={styles.label}>First Name</AppText>
              <AppTextInputController
                control={control}
                name="firstName"
                placeholder="First  Name"
                rules={{
                  required: "First Name is required",
                  minLength: {
                    value: 3,
                    message: "First Name must be at least 3 characters",
                  },
                }}
              />
            </View>

            <View style={styles.inputGroup}>
              <AppText style={styles.label}>Last Name</AppText>
              <AppTextInputController
                control={control}
                name="lastName"
                placeholder="Last Name"
                rules={{
                  required: "Last Name is required",
                  minLength: {
                    value: 2,
                    message: "Password must be at least 2 characters",
                  },
                }}
              />
            </View>

            <AppText style={styles.dividerText}>Or Sign up with</AppText>

            <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
              <GoogleLogo />
            </TouchableOpacity>

            <AppButton title="Next" onPress={handleSubmit(signUp)} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
    top: vs(210),
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
  inputGroup: {
    marginBottom: vs(14),
    width: "100%",
  },
  label: {
    marginBottom: vs(10),
    fontSize: s(14),
    color: AppColors.black,
  },
  dividerText: {
    marginTop: vs(4),
    marginBottom: vs(18),
    textAlign: "center",
    fontSize: s(12),
    color: AppColors.textGrey,
  },
  googleButton: {
    height: vs(48),
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: s(8),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: vs(18),
  },
});
