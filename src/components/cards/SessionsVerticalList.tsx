import React from "react";
import { StyleSheet, View } from "react-native";
import SessionListSeparator from "../../assets/icons/SessionListSeparator";
import { colors } from "../../constants/Colors";
import Session from "../../types/Session";
import SessionsVerticalListCard from "./SessionsVerticalListCard";

export type SessionsVerticalListProps = {
  items: Session[];
};

export default function SessionsVerticalList(props: SessionsVerticalListProps) {
  return (
    <View style={styles.listContainer}>
      <View>
        <View style={styles.listHolder}>
          {props.items.map((item, index) => (
            <>
              <SessionsVerticalListCard {...item} />
              {index < props.items.length - 1 && (
                <View style={styles.cardContainer}>
                  <SessionListSeparator
                    color={
                      index % 2 !== 0
                        ? colors.DROIDCONKE_BRICK_RED
                        : colors.DROIDCONKE_LIGHT_GREEN
                    }
                  />
                </View>
              )}
            </>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: { paddingBottom: 80 },
  cardContainer: { marginLeft: 50, marginVertical: 6 },
  listHolder: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
