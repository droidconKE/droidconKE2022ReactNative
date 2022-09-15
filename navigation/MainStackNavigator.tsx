//main navigation
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";

// create stack
const Stack = createNativeStackNavigator();

// import screens
import ExampleScreen from "../screens/ExampleScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen_names.EXAMPLE}
                component={ExampleScreen}/>
            <Stack.Screen
                name={screen_names.HOMETABS} component={BottomTabsNavigator} options={{
                    headerShown: false
                }}/>
        </Stack.Navigator>
    )
}

export default MainStackNavigator;