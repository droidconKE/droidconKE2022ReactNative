import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { screen_names } from "../constants/ScreenNames";
import { SafeAreaView } from "react-native";

type MockScreenStoryProps = {
    screen_name : screen_names,
    screen_component : any,
    options?: {}
}

const Stack = createNativeStackNavigator();

const StoriesMockNavigation = (prop : MockScreenStoryProps) => {
    return (
      <SafeAreaView>
      <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={prop.screen_name}>
        <Stack.Screen
          name={prop.screen_name}
          component={prop.screen_component}
          options={prop.options}
        />
      </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    );
  };


  export default StoriesMockNavigation