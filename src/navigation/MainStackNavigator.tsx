// Main navigation.
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";

// Create stack navigator.
const Stack = createNativeStackNavigator();

// Import screens.
import BottomTabsNavigator from "./BottomTabsNavigator";
import LoginScreen from "../screens/LoginScreen";
import SpeakersScreen from "../screens/SpeakersScreen";
import { fonts } from "../assets/fonts/fonts";
import { SpeakersBackButton } from "../screens/SpeakersScreen";

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
      <Stack.Screen
        name={screen_names.SPEAKERS}
        component={SpeakersScreen}
        options={{
          headerTitleAlign : "left" ,
          headerTitleStyle : {
            fontFamily : fonts.MONTSERRAT_REGULAR
          } ,
          headerLeft : SpeakersBackButton ,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
