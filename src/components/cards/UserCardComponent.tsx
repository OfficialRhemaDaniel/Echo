import { Image, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import ProfileActionButton from "../buttons/ProfileActionButton";
import { commonStyles } from "../../styles/SharedStyles";

interface UserCardComponentProps {
  name?: string;
  username?: string;
  bio?: string;
  avatarUri?: string;
  coverUri?: string;
  onFollowPress?: () => void;
}

const randomAvatarUri =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80";
const randomCoverUri =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80";

const UserCardComponent: FC<UserCardComponentProps> = ({
  name = "Lincoln Sage",
  username = "@lincoln_sage",
  bio = "A very rugged programmer from abagagana",
  avatarUri = randomAvatarUri,
  coverUri = randomCoverUri,
  onFollowPress = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: coverUri }} style={styles.coverImage} />

      <View style={styles.content}>
          <ProfileActionButton
            title="Following"
            onPress={onFollowPress}
            variant="outline"
            style={styles.followButton}
            textStyle={styles.followButtonText}
          />
        <View style={styles.topRow}>
          <Image source={{ uri: avatarUri }} style={styles.avatar} />
        </View>

        <AppText variant="bold" style={styles.name}>
          {name}
        </AppText>
        <AppText style={styles.username}>{username}</AppText>
        <AppText style={styles.bio}>{bio}</AppText>
      </View>
    </View>
  );
};

export default UserCardComponent;

const styles = StyleSheet.create({
  container: {
    width: s(300), 
    backgroundColor: AppColors.white,
    borderWidth: 1,
    borderColor: AppColors.redGrey,
    borderRadius: s(10),
    marginLeft: s(20),
    overflow: "hidden",
    ...commonStyles.shadow
  },
  coverImage: {
    width: "100%",
    height: vs(105),
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: s(14),
    paddingTop: vs(34),
    paddingBottom: vs(24),
  },
  topRow: {
    position: "absolute",
    top: vs(-36),
    left: s(14),
    right: s(14),
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  avatar: {
    width: s(72),
    height: s(72),
    borderRadius: s(36),
    borderWidth: s(3),
    borderColor: AppColors.white,
  },
  followButton: {
    position: 'absolute',
    right: s(14),
    top: vs(12)
  },
  followButtonText: {
    fontSize: s(15),
  },
  name: {
    fontSize: s(16),
  },
  username: {
    color: AppColors.deepGrey,
    fontSize: s(14),
    marginTop: vs(-5),
  },
  bio: {
    fontSize: s(14),
    marginTop: vs(18),
  },
});
