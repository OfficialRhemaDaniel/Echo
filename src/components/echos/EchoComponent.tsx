import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import Avatar from "../Avatar";
import AppText from "../texts/AppText";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { SharedPaddingHorizontal } from "../../styles/SharedStyles";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import { Echo } from "../../data/Echos";

type EchoComponentProps = {
  echo: Echo;
};

const EchoComponent = ({ echo }: EchoComponentProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Avatar />
          <View style={styles.userID}>
            <AppText style={{ fontSize: s(14) }} variant="bold">
              {echo.name}
            </AppText>
            <AppText
              style={{
                fontSize: s(12),
                color: AppColors.deepGrey,
                marginTop: vs(-3),
              }}
            >
              {echo.username}
            </AppText>
          </View>
        </View>
        <View style={styles.rightHeader}>
          <AppText
            style={{
              fontSize: s(12),
              color: AppColors.deepGrey,
              paddingRight: s(14),
            }}
          >
            {echo.timeAgo}
          </AppText>
          <SimpleLineIcons name="options-vertical" size={16} color="black" />
        </View>
      </View>

      <View style={styles.body}>
        <AppText style={styles.echo}>{echo.body}</AppText>

        {echo.image && (
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              source={echo.image}
              style={styles.echoImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.leftFooter}>
          <View style={styles.impressionContainer}>
            <Entypo
              name="heart-outlined"
              size={18}
              color={AppColors.deepGrey}
            />
            <AppText style={styles.impressionValue}>{echo.likes}</AppText>
          </View>
          <View style={styles.impressionContainer}>
            <FontAwesome5 name="comment" size={16} color={AppColors.deepGrey} />
            <AppText style={styles.impressionValue}>{echo.comments}</AppText>
          </View>
          <View style={styles.impressionContainer}>
            <Feather name="bookmark" size={16} color={AppColors.deepGrey} />
            <AppText style={styles.impressionValue}>{echo.bookmarks}</AppText>
          </View>
        </View>
        <Entypo name="share" size={16} color={AppColors.deepGrey} />
      </View>
    </TouchableOpacity>
  );
};

export default EchoComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SharedPaddingHorizontal,
    paddingVertical: vs(20),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftHeader: {
    flexDirection: "row",
  },
  userID: {
    marginLeft: s(14),
  },
  rightHeader: {
    flexDirection: "row",
    alignContent: "center",
  },
  body: {
    paddingVertical: vs(12),
  },
  echo: {
    fontSize: s(14),
  },
  imageContainer: {
    height: vs(200),
    backgroundColor: AppColors.redGrey,
    borderRadius: s(15),
    marginVertical: vs(14),
    overflow: 'hidden'
  },
  echoImage: {
    width: '100%',
    height: '100%',
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftFooter: {
    flexDirection: "row",
  },
  impressionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: s(16),
  },
  impressionValue: {
    paddingLeft: s(4),
    fontSize: s(12),
    color: AppColors.deepGrey,
  },
});
