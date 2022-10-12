import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import DateToggle from "../components/dateToggle/DateToggle";
import DateToggleList, {
  DateToggleListProps,
} from "../components/dateToggle/DateToggleList";
import SessionsVerticalList, {
  SessionsVerticalListProps,
} from "../components/cards/SessionsVerticalList";

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
  return (
    <View>
      <DateToggleList {...props.dates} />
      <SessionsVerticalList {...props.sessions} />
    </View>
  );
};

export default SessionsScreen;
