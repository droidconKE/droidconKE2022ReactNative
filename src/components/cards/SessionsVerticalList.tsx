import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { fonts } from "../../assets/fonts/fonts";
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
          <Text style={styles.title}>All Sessions</Text>
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
  title: {
    fontFamily: fonts.MONTSERRAT_BOLD,
    fontSize: 18,
    color: "rgba(0, 12, 235, 1)",
    marginTop: 20,
  },
  listHolder: {
    marginTop: 20,
  },
});
