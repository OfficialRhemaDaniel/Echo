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

const UploadProfileScreen = () => {
  const navigation = useNavigation<any>();
  const [image, setImage] = useState<string | null>(null);

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
      <View style={styles.header}>
        {!image && (
          <TouchableOpacity onPress={() => navigation.navigate("MainAppBottomTabs")}>
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
          title="Continue"
          disabled={!image}
          onPress={() =>
            navigation.navigate("MainAppBottomTabs")
          }
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
