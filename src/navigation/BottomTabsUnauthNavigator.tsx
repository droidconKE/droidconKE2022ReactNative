// Bottom tab navigation.
import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen_names } from "../constants/ScreenNames";

// Create Bottom Navigator.
const Tab = createBottomTabNavigator();

// Import screens.
import HomeScreen from "../screens/HomeScreen";
import FeedScreen from "../screens/FeedScreen";
import SessionsScreen from "../screens/SessionsScreen";
import AboutScreen from "../screens/AboutScreen";
import HomeIcon from "../assets/icons/HomeIcon";
import { colors } from "../constants/Colors";
import FeedIcon from "../assets/icons/FeedIcon";
import SessionsIcon from "../assets/icons/SessionsIcon";
import AboutIcon from "../assets/icons/AboutIcon";
import { fonts } from "../assets/fonts/fonts";
import AuthStorage from "../utils/authStorage";
import HomeScreenNotLoggedIn from "../screens/HomeScreenNotLoggedIn";

const BottomTabsUnauthNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.DROIDCONKE_BRICK_RED,
        tabBarInactiveTintColor: colors.DROIDCONKE_BLACK,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}
    >
      <Tab.Screen
        name={screen_names.HOMENOTLOGGEDIN}
        component={HomeScreenNotLoggedIn}
        options={{
          headerShown: false,
          tabBarIcon: (props: {
            focused: boolean;
            color: string;
            size: number;
          }) => (
            <HomeIcon
              color={
                props.focused ? colors.DROIDCONKE_BLUE : colors.DROIDCONKE_BLACK
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={screen_names.FEED}
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props: {
            focused: boolean;
            color: string;
            size: number;
          }) => (
            <FeedIcon
              color={
                props.focused ? colors.DROIDCONKE_BLUE : colors.DROIDCONKE_BLACK
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={screen_names.SESSIONS}
        component={SessionsScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props: {
            focused: boolean;
            color: string;
            size: number;
          }) => (
            <SessionsIcon
              color={
                props.focused ? colors.DROIDCONKE_BLUE : colors.DROIDCONKE_BLACK
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={screen_names.ABOUT}
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props: {
            focused: boolean;
            color: string;
            size: number;
          }) => (
            <AboutIcon
              color={
                props.focused ? colors.DROIDCONKE_BLUE : colors.DROIDCONKE_BLACK
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Tab bar Styles
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 65,
  },
  tabBarLabelStyle: {
    fontFamily: fonts.MONTSERRAT_LIGHT,
    marginTop: -10,
    marginBottom: 10,
  },
});
export default BottomTabsUnauthNavigator;
