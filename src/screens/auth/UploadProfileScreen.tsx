import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/texts/AppText";
import { vs, s } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useOnboarding } from "../../contexts/OnboardingContext";
import { useAuth } from "../../contexts/AuthContext";

const UploadProfileScreen = () => {
  const navigation = useNavigation<any>();
  const { setProfilePicture, submitOnboarding } = useOnboarding();
  const { login } = useAuth(); // ADDED
  const [image, setImage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const finishOnboarding = async () => {
    setSubmitting(true);
    try {
      setProfilePicture(image);
      const res = await submitOnboarding();
      await login(res.user, res.token);
      navigation.navigate("MainAppBottomTabs");
    } catch (err: any) {
      console.log(
        "Onboarding submit failed:",
        err?.response?.data || err.message,
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
      <View style={styles.header}>
        {!image && (
          <TouchableOpacity onPress={finishOnboarding}>
            {" "}
            <AppText style={styles.skip}>Skip</AppText>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <View style={styles.imageContainer}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <FontAwesome name="camera" size={s(60)} color={AppColors.white} />
            )}
          </View>
          <AppText style={styles.uploadProfileText} variant="bold">
            {image ? "Edit Profile Picture" : "Upload Profile Picture"}
          </AppText>
        </TouchableOpacity>

        <AppButton
          title={submitting ? "Submitting..." : "Continue"}
          disabled={!image || submitting}
          onPress={finishOnboarding}
        />
      </View>
    </SafeAreaView>
  );
};

export default UploadProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: SharedPaddingHorizontal,
    marginTop: vs(60),
  },
  header: {
    paddingVertical: 14,
    paddingHorizontal: s(24),
    alignItems: "flex-end",
    height: vs(40),
  },
  skip: {
    fontSize: s(16),
  },
  uploadButton: {
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: AppColors.redGrey,
    width: s(180),
    height: s(180),
    borderRadius: s(90),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  uploadProfileText: {
    color: AppColors.primary,
    paddingTop: vs(24),
    paddingBottom: vs(60),
    textAlign: "center",
  },
});
