// login screen
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import { colors } from "../constants/Colors";
import { setUser } from "../state/user";
import { screen_names } from "../constants/ScreenNames";

type LoginScreenProps = NativeStackScreenProps<
  ParamListBase,
  screen_names.LOGIN,
  undefined
>;

export default function LoginScreen({
  navigation,
}: LoginScreenProps): JSX.Element {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);

  function toggleUser() {
    if (user) {
      dispatch(setUser(undefined));
    } else {
      dispatch(setUser({ username: "John Doe" }));
    }
  }

  return (
    <View style={styles.container}>
      <Text> {user ? `Welcome back ${user.username}` : "Press to log in"}</Text>
      <Button title={user ? "Log out" : "Log in"} onPress={toggleUser} />
      <Button
        title="Go To Tabs"
        onPress={() => navigation.navigate("HomeTabs")}
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
