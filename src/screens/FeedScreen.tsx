import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import MainHeader from "../components/layouts/MainHeader";
import { colors } from "../constants/Colors";

const FeedScreen = ({
	navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.FEED, undefined>) => {
	return (
		<SafeAreaView style={[styles.container, styles.paddingVertical]}>
			<MainHeader />
			<ScrollView style={styles.paddingHorizontal}>
				<Text>Feed screen</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

export default FeedScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.DROIDCONKE_WHITE,
		flex: 1,
	},
	paddingVertical: {
		paddingVertical: 20,
	},
	paddingHorizontal: {
		paddingHorizontal: 20,
	},
});
