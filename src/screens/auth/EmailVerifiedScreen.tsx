import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../../components/buttons/AppButton";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import { vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const EmailVerifiedScreen = () => {
    const navigation = useNavigation<any>()
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/illustrations/emailVerifiedIllustration.png")}
          style={{ marginBottom: vs(60) }}
        />
        <AppButton title="Continue" onPress={() => navigation.navigate("UploadProfilePic")}/>
      </View>
    </SafeAreaView>
  );
};

export default EmailVerifiedScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    paddingHorizontal: SharedPaddingHorizontal,
    alignItems: "center",
  },
});
