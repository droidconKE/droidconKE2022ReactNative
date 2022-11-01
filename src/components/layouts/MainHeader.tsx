import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../../assets/fonts/fonts";
import DroidconKeIcon from "../../assets/icons/DroidconKeIcon";
import LockIcon from "../../assets/icons/LockIcon";
import { colors } from "../../constants/Colors";
import { layoutProperties } from "../../constants/Properties";
import { screen_names } from "../../constants/ScreenNames";
import { useAppSelector } from "../../hooks/useTypedRedux";
import { UserState } from "../../state/user";
import { RootStackParamList } from "../../types/Navigation";

interface MainHeaderProps {
  onPress?: () => void; //allow consumer of this component to handle the press event differently in the not-signed-in state.
}

const MainHeader = (props: MainHeaderProps) => {
  const { user } = useAppSelector((state) => state.user as UserState);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //Temporary/experimental navigation to sign-in/sign-out screen from the profile picture icon
  const goToLoginScreen = () => navigation.navigate(screen_names.LOGIN);

  const goToFeedbackScreen = () => navigation.navigate(screen_names.FEEDBACK);

  if (!user)
    return (
      <View style={[styles.signedOutHeader, styles.marginBottomSeparator]}>
        <DroidconKeIcon width={150} style={styles.droidconkeIcon} />
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={props.onPress ?? goToLoginScreen}
        >
          <LockIcon />
        </TouchableOpacity>
      </View>
    );

  return (
    <View
      style={[
        styles.signedInHeader,
        styles.marginVerticalSeparator,
        styles.paddingHorizontal,
      ]}
    >
      <DroidconKeIcon width={150} style={styles.droidconkeIcon} />
      <View
        style={[
          layoutProperties.flexRow,
          layoutProperties.justifyBetween,
          layoutProperties.itemsCenter,
        ]}
      >
        <TouchableOpacity
          style={styles.buttonFeedback}
          onPress={goToFeedbackScreen}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/icons/SmileyIcon.png")}
            style={styles.smileyIcon}
          />
          <Text style={styles.buttonFeedbackText}>Feedback</Text>
          <Image
            resizeMode="contain"
            source={require("../../assets/icons/SendIcon.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: user.avatar ?? `https://robohash.org/${user.email}`,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  signedOutHeader: {
    ...layoutProperties.flexRow,
    ...layoutProperties.justifyBetween,
    ...layoutProperties.itemsCenter,
    marginRight: 3,
    paddingHorizontal: 20,
  },
  signedInHeader: {
    ...layoutProperties.flexRow,
    ...layoutProperties.justifyBetween,
    ...layoutProperties.itemsCenter,
  },
  marginVerticalSeparator: {
    marginVertical: 15,
  },
  paddingVertical: {
    paddingVertical: 20,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  droidconkeIcon: {
    marginVertical: -100,
  },
  buttonFeedback: {
    backgroundColor: colors.DROIDCONKE_GREEN_TRANSLUCENT,
    padding: 8,
    borderRadius: 10,
    ...layoutProperties.flexRow,
    ...layoutProperties.itemsCenter,
    ...layoutProperties.justifyEvenly,
    marginRight: 15,
  },
  buttonFeedbackText: {
    fontFamily: fonts.MONTSERRAT_REGULAR,
    fontSize: 12,
    lineHeight: 15,
    marginLeft: 8,
  },
  buttonFeedbackContentMargin: {
    marginRight: 8,
  },
  iconWrapper: {
    backgroundColor: colors.DROIDCONKE_GREEN,
    width: 29,
    height: 29,
    ...layoutProperties.justifyCenter,
    ...layoutProperties.itemsCenter,
    borderRadius: 14.45,
  },
  marginBottomSeparator: {
    marginBottom: 10,
  },
  profilePicture: { width: 30, height: 30, borderRadius: 15 },
  smileyIcon: {
    width: 12,
    height: 12,
  },
  sendIcon: {
    width: 12,
    height: 12,
    marginLeft: 10,
  },
});
