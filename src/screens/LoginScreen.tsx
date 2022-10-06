import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { colors } from "../constants/Colors";
import { screen_names } from "../constants/ScreenNames";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedRedux";
import { setUser } from "../state/user";

type LoginScreenProps = NativeStackScreenProps<
  ParamListBase,
  screen_names.LOGIN,
  undefined
>;

export default function LoginScreen({
  navigation,
}: LoginScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  function toggleUser() {
    if (user) {
      dispatch(setUser(undefined));
    } else {
      dispatch(setUser({ name: "John Doe", id: 0 }));
    }
  }

  return (
    <View style={styles.container}>
      <Text> {user ? `Welcome back ${user.name}` : "Press to log in"}</Text>
      <Button title={user ? "Log out" : "Log in"} onPress={toggleUser} />
      <Button
        title="Go To Tabs"
        onPress={() => navigation.navigate("HomeTabs")}
      />
      <Button
        title="Single Speaker"
        onPress={() => navigation.navigate("SingleSpeakerScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_THEME_BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
