import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../../assets/fonts/fonts";
import AndroidIcon from "../../assets/icons/AndroidIcon";
import Star from "../../assets/icons/Star";
import { colors } from "../../constants/Colors";
import useCachedResources from "../../hooks/useCachedResources";
import Session from "../../types/Session";

export default function SessionsVerticalListCard(
  props: Session
): JSX.Element | null {
  const isLoadingCompleted = useCachedResources();
  if (!isLoadingCompleted) {
    return null;
  }

  function formatTime(time: string, withMeridiem: boolean = false): string {
    const date = new Date();
    date.setTime(Date.parse(time));
    const dateWithMeridiem = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (withMeridiem) return dateWithMeridiem;
    return dateWithMeridiem.split(" ")[0];
  }

  function getMeridiem(time: string): string {
    const date = new Date();
    date.setTime(Date.parse(time));
    return date.toLocaleTimeString("en-US", { hour12: true }).split(" ")[1];
  }

  return (
    <View style={styles.container}>
      <View style={styles.timeDetailsContainer}>
        <View>
          <Text style={styles.startTime}>
            {formatTime(props.start_date_time)}
          </Text>
          <Text style={styles.meridiem}>
            {getMeridiem(props.start_date_time)}
          </Text>
        </View>
        <View style={styles.containerSessionDetails}>
          <Text style={styles.programTitle}>{props.title}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {props.description}
          </Text>
          {props.rooms.length > 0 && (
            <Text style={styles.durationAndVenue}>
              {`${formatTime(props.start_date_time, true)} - ${formatTime(
                props.end_date_time,
                true
              )} | ${props.rooms[0].title.toUpperCase()}`}
            </Text>
          )}
          {props.speakers.length > 0 && (
            <View style={styles.speakerContainer}>
              <AndroidIcon width={17} color={colors.DROIDCONKE_BLUE} />
              <Text style={styles.speakerName}>{props.speakers[0]?.name}</Text>
            </View>
          )}
        </View>
      </View>
      <Star color={colors.DROIDCONKE_BLUE} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    padding: 16,
  },
  startTime: {
    fontFamily: fonts.MONTSERRAT_MEDIUM,
    fontSize: 18,
    color: colors.DROIDCONKE_BLACK,
  },
  meridiem: {
    fontFamily: fonts.MONTSERRAT_MEDIUM,
    fontSize: 15,
    textAlign: "right",
    color: colors.DROIDCONKE_BLACK,
  },
  programTitle: {
    fontFamily: fonts.MONTSERRAT_BOLD,
    fontSize: 18,
  },
  description: {
    marginTop: 24,
    fontFamily: fonts.MONTSERRAT_REGULAR,
    fontSize: 16,
    color: colors.DROIDCONKE_DARK_GREY,
  },
  durationAndVenue: {
    marginTop: 14,
    fontFamily: fonts.MONTSERRAT_REGULAR,
    color: colors.DROIDCONKE_DARK_GREY,
  },
  speakerContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  speakerName: {
    fontSize: 14,
    marginLeft: 12,
    color: colors.DROIDCONKE_BLUE,
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
