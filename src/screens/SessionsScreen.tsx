import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fonts } from "../assets/fonts/fonts";
import SessionsVerticalList, {
  SessionsVerticalListProps,
} from "../components/cards/SessionsVerticalList";
import DateToggleList, {
  DateToggleListProps,
} from "../components/dateToggle/DateToggleList";
import SwitchWithIcons from "../components/iconSwitch/IconSwitch";
import { screen_names } from "../constants/ScreenNames";

export type SessionsScreenProps = {
  navigation?: NativeStackScreenProps<
    ParamListBase,
    screen_names.SESSIONS,
    undefined
  >["navigation"];
  dates: DateToggleListProps;
  sessions: SessionsVerticalListProps;
};

const SessionsScreen = (props: SessionsScreenProps) => {
  function onValueChange(value: boolean) {
    console.log({ value });
  }

  return (
    <View>
      <View style={styles.belowHeader}>
        <DateToggleList {...props.dates} />
        <View style={styles.switchHolder}>
          <SwitchWithIcons
            value={false}
            onValueChange={onValueChange}
            trackColor={{ true: "#FF6E4D", false: "#20201E" }}
            thumbColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
            iconColors={{ true: "#20201E", false: "#FF6E4D" }}
          />
          <Text style={styles.belowSwitch}>My Sessions</Text>
        </View>
      </View>
      <Text style={styles.title}>All Sessions</Text>
      <SessionsVerticalList {...props.sessions} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.MONTSERRAT_BOLD,
    fontSize: 18,
    color: "rgba(0, 12, 235, 1)",
    marginTop: 20,
  },
  belowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  belowSwitch: {
    fontFamily: fonts.MONTSERRAT_LIGHT,
    fontSize: 9,
    marginTop: 10,
  },
  switchHolder: { justifyContent: "center", alignContent: "center" },
});

export default SessionsScreen;
