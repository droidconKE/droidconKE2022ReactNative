import React from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";
import Speaker from "../../types/Speaker";
import Session from "../../types/Session";

export interface SpeakerCardProps {
  itemSpeaker : Speaker,
  itemSession: Session,
  SessionButtonOnPress: (item: Session) => void,
  SpeakerImageOnPress: (item: Speaker) => void,
}

export const placeholder : ImageSourcePropType = require('../../assets/img/john_doe.png')

export default function (props: SpeakerCardProps): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.SpeakerImageOnPress(props.itemSpeaker)}>
        <Image source={{ uri: props.itemSpeaker.avatar?.length < 1 ? placeholder : props.itemSpeaker.avatar}} style={styles.image} resizeMode="contain" resizeMethod="auto"/>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{props.itemSpeaker.name}</Text>
        <Text style={styles.content} numberOfLines={3}>{props.itemSpeaker.tagline}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => props.SessionButtonOnPress(props.itemSession)}>
        <Text style={styles.buttontext}>SESSION</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2 - 15,
    backgroundColor: colors.DROIDCONKE_PEARL,
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    paddingVertical: 25,
    paddingHorizontal:15,
  },
  image: {
    borderColor: colors.DROIDCONKE_GREEN,
    borderWidth: 2,
    height: 109,
    width: 109,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: colors.DROIDCONKE_BLUE,
    marginBottom: 6,
    fontFamily: fonts.MONTSERRAT_BOLD,
    fontSize: 14,
    textAlign: "center",
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    textAlign: "center",
    marginBottom: 10,
    fontFamily: fonts.MONTSERRAT_REGULAR,
    fontSize: 11,
    color: colors.DROIDCONKE_DARK_GREY,
  },
  button: {
    width: "80%",
    height: 45,
    borderColor: colors.DROIDCONKE_LIGHT_GREEN,
    borderRadius: 10,
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
  },
  buttontext: {
    color: colors.DROIDCONKE_LIGHT_GREEN,
    textAlign: "center",
    fontFamily: fonts.MONTSERRAT_SEMIBOLD,
    fontSize: 14,
  },
});
