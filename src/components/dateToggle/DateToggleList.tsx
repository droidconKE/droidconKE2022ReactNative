import React from "react";
import { View, StyleSheet } from "react-native";
import DateToggle, { DateToggleProps } from "./DateToggle";

export type DateToggleListProps = {
  items: DateToggleProps[];
};

export default function DateToggleList({
  items,
}: DateToggleListProps): JSX.Element | null {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View style={styles.dateToggle}>
          <DateToggle {...item} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  dateToggle: { marginEnd: 20 },
});
