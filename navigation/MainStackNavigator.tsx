//main navigation
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";

// create stack
const Stack = createNativeStackNavigator();

// import screens
import BottomTabsNavigator from "./BottomTabsNavigator";
import LoginScreen from "../screens/LoginScreen";

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen_names.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screen_names.HOMETABS}
        component={BottomTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
