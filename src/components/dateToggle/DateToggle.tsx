import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../../assets/fonts/fonts";
import { colors } from "../../constants/Colors";
import useCachedResources from "../../hooks/useCachedResources";

export type DateToggleProps = {
  selected: boolean;
  date: string;
  day: string;
  fullDate: string;
};

export default function DateToggle({
  selected,
  day,
  date,
}: DateToggleProps): JSX.Element | null {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }

  return (
    <View style={[styles.container, selected && styles.containerSelected]}>
      <Text style={[styles.date, selected && styles.textSelected]}>{date}</Text>
      <Text style={[styles.day, selected && styles.textSelected]}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DROIDCONKE_GREEN_TRANSLUCENT,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    padding: 12,
  },
  containerSelected: {
    backgroundColor: colors.DROIDCONKE_BRICK_RED,
  },
  date: {
    fontSize: 18,
    fontFamily: fonts.MONTSERRAT_BOLD,
    color: colors.DROIDCONKE_BLACK,
    alignSelf: "flex-start",
  },
  day: {
    fontSize: 11,
    color: colors.DROIDCONKE_BLACK,
    fontFamily: fonts.MONTSERRAT_REGULAR,
    marginTop: 4,
    alignSelf: "flex-start",
  },
  textSelected: {
    color: "white",
  },
});
