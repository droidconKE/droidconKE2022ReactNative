import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../../assets/fonts/fonts";
import AndroidIcon from "../../assets/icons/AndroidIcon";
import Star from "../../assets/icons/Star";
import useCachedResources from "../../hooks/useCachedResources";

export type SessionsVerticalListCardProps = {
  star: boolean;
  title: string;
  venue: string;
  startTime: string;
  endTime: string;
  presenter: string;
  programTitle: string;
};

export default function SessionsVerticalListCard(
  props: SessionsVerticalListCardProps
): JSX.Element | null {
  const isLoadingCompleted = useCachedResources();
  if (!isLoadingCompleted) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.timeDetailsContainer}>
        <View>
          <Text style={styles.startTime}>{props.startTime.split(" ")[0]}</Text>
          <Text style={styles.meridiem}>{props.startTime.split(" ")[1]}</Text>
        </View>
        <View style={styles.containerSessionDetails}>
          <Text style={styles.programTitle}>{props.programTitle}</Text>
          <Text style={styles.sessionTitle}>{props.title}</Text>
          <Text style={styles.durationAndVenue}>
            {props.startTime} - {props.endTime} |{" "}
            {props.venue.toLocaleUpperCase()}
          </Text>
          <View style={styles.speakerContainer}>
            <AndroidIcon width={17} color="rgba(0, 12, 235, 1)" />
            <Text style={styles.speakerName}>{props.presenter}</Text>
          </View>
        </View>
      </View>
      <Star />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
  },
  startTime: {
    fontFamily: fonts.MONTSERRAT_MEDIUM,
    fontSize: 18,
    color: "rgba(32, 32, 30, 1)",
  },
  meridiem: {
    fontFamily: fonts.MONTSERRAT_MEDIUM,
    fontSize: 15,
    textAlign: "right",
    color: "rgba(32, 32, 30, 1)",
  },
  programTitle: {
    fontFamily: fonts.MONTSERRAT_BOLD,
    fontSize: 18,
  },
  sessionTitle: {
    marginTop: 24,
    fontFamily: fonts.MONTSERRAT_REGULAR,
    fontSize: 16,
    color: "rgba(32, 32, 30, 1)",
  },
  durationAndVenue: {
    marginTop: 14,
    fontFamily: fonts.MONTSERRAT_REGULAR,
    color: "rgba(112, 112, 112, 1)",
  },
  speakerContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  speakerName: {
    fontSize: 14,
    marginLeft: 12,
    color: "rgba(0, 12, 235, 1)",
    fontFamily: fonts.MONTSERRAT_REGULAR,
  },
  containerSessionDetails: {
    marginStart: 24,
    flex: 1,
  },
  timeDetailsContainer: {
    flexDirection: "row",
    flex: 1,
  },
});
