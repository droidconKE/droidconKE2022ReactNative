import React from "react";
import {
  View,
  StyleSheet,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import DateToggle, { DateToggleProps } from "./DateToggle";

export type DateToggleListProps = {
  items: DateToggleProps[];
  onChange: (day: string) => void;
};

export default function DateToggleList({
  items,
  onChange,
}: DateToggleListProps): JSX.Element | null {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <TouchableWithoutFeedback onPress={() => onChange(item.fullDate)}>
          <View style={styles.dateToggle}>
            <DateToggle {...item} />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  dateToggle: { marginEnd: 20 },
});
