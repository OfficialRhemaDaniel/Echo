import Feather from "@expo/vector-icons/Feather";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import AppText from "../texts/AppText";

const profileImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo_rYT0Ltw6rjKlCHa7EDY9ICpBTsRyVVmQ&s";
const coverImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80";

const ProfileHeaderComponent = () => {
  const insets = useSafeAreaInsets();

  return (
    <View>
      <ImageBackground source={{ uri: coverImage }} style={styles.coverImage}>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: "rgba(0, 0, 0, 0.4)" },
          ]}
        />
        <TouchableOpacity
          style={[styles.editCoverButton, { marginTop: insets.top + vs(10) }]}
        >
          <Feather name="edit-2" size={s(18)} color={AppColors.white} />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.profileInfo}>
        <Image source={{ uri: profileImage }} style={styles.profileAvatar} />

        <View style={styles.bioContainer}>
          <AppText variant="bold" style={styles.name}>
            Akintola Bruce
          </AppText>
          <AppText style={styles.username}>@akintola_bruce</AppText>

          <AppText style={styles.bio}>
            I'm your everyday developer who makes mobile apps and chills
          </AppText>

          <View style={styles.stats}>
            <View style={styles.statItem}>
              <AppText variant="bold" style={styles.statNumber}>
                300
              </AppText>
              <AppText style={styles.statLabel}>Following</AppText>
            </View>
            <View style={styles.statItem}>
              <AppText variant="bold" style={styles.statNumber}>
                1200
              </AppText>
              <AppText style={styles.statLabel}>Followers</AppText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeaderComponent;

const styles = StyleSheet.create({
  coverImage: {
    height: vs(130),
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  editCoverButton: {
    width: s(42),
    height: s(42),
    borderRadius: s(21),
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: vs(18),
    marginRight: s(18),
  },
  profileInfo: {
    borderBottomColor: AppColors.redGrey,
    borderBottomWidth: 1,
    paddingBottom: vs(22),
  },
  profileAvatar: {
    width: s(100),
    height: s(100),
    borderRadius: s(50),
    borderWidth: s(4),
    borderColor: AppColors.white,
    marginTop: vs(-50),
    marginLeft: SharedPaddingHorizontal,
  },
  bioContainer: {
    paddingHorizontal: SharedPaddingHorizontal,
    paddingTop: vs(20),
  },
  name: {
    fontSize: s(20),
  },
  username: {
    color: AppColors.deepGrey,
    fontSize: s(14),
    marginTop: vs(-5),
  },
  bio: {
    fontSize: s(14),
    marginTop: vs(16),
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: vs(16),
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: s(24),
  },
  statNumber: {
    fontSize: s(14),
  },
  statLabel: {
    fontSize: s(14),
    marginLeft: s(4),
  },
});
