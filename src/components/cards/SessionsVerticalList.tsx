import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SessionListSeparator from "../../assets/icons/SessionListSeparator";
import SessionsVerticalListCard, {
  SessionsVerticalListCardProps,
} from "./SessionsVerticalListCard";

export type SessionsVerticalListProps = {
  items: SessionsVerticalListCardProps[];
};

export default function SessionsVerticalList(props: SessionsVerticalListProps) {
  return (
    <View style={styles.listContainer}>
      <ScrollView>
        <View>
          <View style={styles.listHolder}>
            {props.items.map((item, index) => (
              <>
                <SessionsVerticalListCard {...item} />
                {index < props.items.length - 1 && (
                  <View style={styles.cardContainer}>
                    <SessionListSeparator
                      color={
                        index % 2 !== 0 ? "rgba(255, 110, 77, 1)" : "#7de1c3"
                      }
                    />
                  </View>
                )}
              </>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: { padding: 16 },
  cardContainer: { marginLeft: 50, marginVertical: 6 },
  listHolder: {
    marginTop: 20,
  },
});
