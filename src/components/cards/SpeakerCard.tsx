import React from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";
import Speaker from "../../types/Speaker";
import Session from "../../types/Session";

export interface SpeakerCardProps {
  item : Speaker,
  onPress: (item: Session) => void,
}

export default function (props: SpeakerCardProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.item.avatar}} style={styles.image} />
      <Text style={styles.title}>{props.item.name}</Text>
      <Text style={styles.content} numberOfLines={3}>{props.item.tagline}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>SESSION</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: colors.DROIDCONKE_PEARL,
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  image: {
    borderColor: colors.DROIDCONKE_GREEN,
    borderWidth: 2,
    height: 109,
    width: 109,
    margin: 20,
    borderRadius: 7,
  },
  title: {
    color: colors.DROIDCONKE_BLUE,
    marginBottom: 10,
    fontFamily: fonts.MONTSERRAT_BOLD,
    width: 93,
    fontSize: 14,
    textAlign: "center",
  },
  content: {
    textAlign: "center",
    marginBottom: 10,
    fontFamily: fonts.MONTSERRAT_REGULAR,
    fontSize: 11,
    width: "80%",
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
    marginBottom: 10,
  },
  buttontext: {
    color: colors.DROIDCONKE_LIGHT_GREEN,
    textAlign: "center",
    fontFamily: fonts.MONTSERRAT_SEMIBOLD,
    fontSize: 14,
  },
});
