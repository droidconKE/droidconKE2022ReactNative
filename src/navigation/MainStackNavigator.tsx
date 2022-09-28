// Main navigation.
import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";

// Create stack navigator.
const Stack = createNativeStackNavigator();

// Import screens.
import BottomTabsNavigator from "./BottomTabsNavigator";
import LoginScreen from "../screens/LoginScreen";
import SpeakersScreen from "../screens/SpeakersScreen";

import { fonts } from "../assets/fonts/fonts";
import { TouchableOpacity, StyleSheet } from "react-native";
import BackArrowIcon from "../assets/icons/BackArrowIcon";
import { colors } from "../constants/Colors";

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
        options={({navigation}: {navigation : any}) => ({
          headerShadowVisible : false ,
          headerTitleAlign : "left" ,
          headerTitleStyle : {
            fontFamily : fonts.MONTSERRAT_REGULAR
          } ,
          headerLeft : () => (
          <TouchableOpacity style={styles.speakersbackbutton} onPress= {() => navigation.goBack()}>
            <BackArrowIcon color={colors.DROIDCONKE_BLACK} />
          </TouchableOpacity>
          )
        }) }
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  speakersbackbutton : {
    marginRight : 8 ,
    marginBottom : 8 
  }
})

export default MainStackNavigator;
