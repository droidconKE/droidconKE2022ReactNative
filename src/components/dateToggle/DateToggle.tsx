import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../../assets/fonts/fonts";
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
    backgroundColor: "rgba(125, 225, 195, 0.11)",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    padding: 12,
  },
  containerSelected: {
    backgroundColor: "rgba(255, 110, 77, 1)",
  },
  date: {
    fontSize: 18,
    fontFamily: fonts.MONTSERRAT_BOLD,
    color: "rgba(32, 32, 30, 1)",
    alignSelf: "flex-start",
  },
  day: {
    fontSize: 11,
    color: "rgba(112, 112, 112, 1)",
    fontFamily: fonts.MONTSERRAT_REGULAR,
    marginTop: 4,
    alignSelf: "flex-start",
  },
  textSelected: {
    color: "white",
  },
});
