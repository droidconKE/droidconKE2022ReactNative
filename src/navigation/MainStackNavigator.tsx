// Main navigation.
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";

// Import screens.
import BottomTabsNavigator from "./BottomTabsNavigator";
import LoginScreen from "../screens/LoginScreen";
import SpeakersScreen from "../screens/SpeakersScreen";

import { fonts } from "../assets/fonts/fonts";
import { TouchableOpacity, StyleSheet } from "react-native";
import BackArrowIcon from "../assets/icons/BackArrowIcon";
import { colors } from "../constants/Colors";
import SingleSpeakerScreen from "../screens/SingleSpeakerScreen";
import { RootStackParamList } from "../types/Navigation";

// Create stack navigator.
const Stack = createNativeStackNavigator<RootStackParamList>();

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
				options={({ navigation }: { navigation: any }) => ({
					headerShadowVisible: false,
					headerTitleAlign: "left",
					headerTitleStyle: {
						fontFamily: fonts.MONTSERRAT_REGULAR,
						fontSize: 18,
					},
					headerLeft: () => (
						<TouchableOpacity
							style={styles.speakersbackbutton}
							onPress={() => navigation.goBack()}
						>
							<BackArrowIcon color={colors.DROIDCONKE_BLACK} />
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen
				name={screen_names.SINGLESPEAKER}
				component={SingleSpeakerScreen}
				initialParams={{ title: "Speaker" }}
				options={({ navigation }: { navigation: any }) => ({
					headerShown: false,
				})}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	speakersbackbutton: {
		marginRight: 8,
		marginBottom: 8,
	},
});

export default MainStackNavigator;
