//main navigation
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";

// create stack
const Stack = createNativeStackNavigator();

// import screens
import ExampleScreen from "../screens/ExampleScreen";

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen_names.EXAMPLE}
                component={ExampleScreen}/>
        </Stack.Navigator>
    )
}

export default MainStackNavigator;