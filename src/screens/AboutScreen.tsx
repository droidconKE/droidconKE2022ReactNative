import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
	FlatList,
	Image,
	ImageSourcePropType,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { colors } from "../constants/Colors";
import { layoutProperties } from "../constants/Properties";
import DroidconKeIcon from "../assets/icons/DroidconKeIcon";
import { fonts } from "../assets/fonts/fonts";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import Android254Icon from "../assets/icons/Android254Icon";
import AppsLabIcon from "../assets/icons/AppsLabIcon";
import TiskosIcon from "../assets/icons/TiskosIcon";

const introText = `Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps and products, and to learn and teach.

This three-day developer focused gathering will be held in Nairobi Kenya on August 16th to 18th 2022 and will be the largest of its kind in Africa.

It will have workshops and codelabs focused on the building of Android applications and will give participants an excellent chance to learn about the local Android development ecosystem, opportunities and services as well as meet the engineers and companies who work on them.`;

const profileImage: ImageSourcePropType = require("../assets/img/DummySpeakerProfilePicture.jpeg");

//Temporary function to make dummy data for the organizing team
const makeDummyData = (n = 17) => {
	let data = [];
	for (let i = 1; i <= n; i++) {
		data.push({
			id: i.toString(),
			name: `Member ${i}`,
			title: `Title ${i}`,
			image: profileImage,
		});
	}
	return data;
};

const MOCK_DATA_ORGANIZING_TEAM = makeDummyData();

const AboutScreen = ({
	navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.ABOUT, undefined>) => {
	return (
		<SafeAreaView style={[styles.container, styles.paddingVertical]}>
			<StatusBar
				backgroundColor={colors.DROIDCONKE_WHITE}
				barStyle="dark-content"
			/>
			<View
				style={[
					styles.header,
					styles.marginVerticalSeparator,
					styles.paddingHorizontal,
				]}
			>
				<DroidconKeIcon width={150} style={styles.droidconkeIcon} />
				<View
					style={[
						layoutProperties.flexRow,
						layoutProperties.justifyBetween,
						layoutProperties.itemsCenter,
					]}
				>
					<TouchableOpacity style={styles.buttonFeedback}>
						<Image
							resizeMode="contain"
							source={require("../assets/icons/SmileyIcon.png")}
							style={styles.buttonFeedbackContentMargin}
						/>
						<Text
							style={[
								styles.buttonFeedbackText,
								styles.buttonFeedbackContentMargin,
							]}
						>
							Feedback
						</Text>
						<Image
							resizeMode="contain"
							source={require("../assets/icons/SendIcon.png")}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconWrapper}>
						<Image
							resizeMode="contain"
							source={require("../assets/img/profilepicture.png")}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView nestedScrollEnabled={true}>
				<Image
					source={require("../assets/img/about.png")}
					resizeMode="contain"
					style={styles.heroImage}
				/>
				<View style={[styles.paddingHorizontal, styles.paddingVertical]}>
					<Text style={[styles.headingText, { marginBottom: 10 }]}>About</Text>
					<Text style={[styles.descriptionText, { marginBottom: 28 }]}>
						{introText}
					</Text>
					<Text style={[styles.headingText]}>Organizing Team</Text>
					<View style={[styles.teamContainer]}>
						<FlatList
							data={MOCK_DATA_ORGANIZING_TEAM}
							renderItem={({ item }) => (
								<TeamMemberCard
									name={item.name}
									profileImage={item.image}
									title={item.title}
								/>
							)}
							keyExtractor={(item) => item.id}
							numColumns={3}
						/>
					</View>
					<View
						style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}
					>
						<Text
							style={[
								styles.sponsorsContainerTitle,
								styles.marginVerticalSeparator,
							]}
						>
							Organized by :
						</Text>
						<View
							style={[
								styles.sponsorsIconsContainer,
								layoutProperties.justifyAround,
								styles.marginVerticalSeparator,
							]}
						>
							<Android254Icon />
							<Image
								resizeMode="contain"
								source={require("../assets/img/kotlin.png")}
							/>
							<Image
								resizeMode="contain"
								source={require("../assets/img/unnamed.png")}
							/>
						</View>
						<View
							style={[
								styles.sponsorsIconsContainer,
								layoutProperties.justifyAround,
								styles.marginVerticalSeparator,
							]}
						>
							<AppsLabIcon />
							<Image
								resizeMode="contain"
								source={require("../assets/img/Layer2-1.png")}
							/>
							<TiskosIcon />
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	marginVerticalSeparator2: {
		marginVertical: 18,
	},
	sponsorsContainer: {
		backgroundColor: colors.DROIDCONKE_PEARL,
		padding: 20,
		borderRadius: 10,
	},
	sponsorsContainerTitle: {
		fontFamily: fonts.MONTSERRAT_BOLD,
		fontSize: 18,
		lineHeight: 20,
		color: colors.DROIDCONKE_BLUE,
		textAlign: "center",
	},
	sponsorsIconsContainer: {
		...layoutProperties.flexRow,
		...layoutProperties.itemsCenter,
	},
	heroImage: {
		width: "100%",
		height: 235,
	},
	headingText: {
		fontFamily: fonts.MONTSERRAT_BOLD,
		fontSize: 21,
		color: colors.DROIDCONKE_BLUE,
	},
	teamContainer: {
		marginVertical: 40,
		// flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	descriptionText: {
		fontFamily: fonts.MONTSERRAT_REGULAR,
		fontSize: 16,
		color: colors.DROIDCONKE_BLACK,
		lineHeight: 20,
	},
	container: {
		backgroundColor: colors.DROIDCONKE_WHITE,
		flex: 1,
	},
	header: {
		...layoutProperties.flexRow,
		...layoutProperties.justifyAround,
		...layoutProperties.itemsCenter,
		marginHorizontal: 10,
	},
	marginVerticalSeparator: {
		marginVertical: 15,
	},
	paddingVertical: {
		paddingVertical: 20,
	},
	paddingHorizontal: {
		paddingHorizontal: 20,
	},
	droidconkeIcon: {
		marginVertical: -100,
		marginLeft: -10,
	},
	buttonFeedback: {
		backgroundColor: colors.DROIDCONKE_GREEN_TRANSLUCENT,
		padding: 12,
		borderRadius: 10,
		...layoutProperties.flexRow,
		...layoutProperties.itemsCenter,
		...layoutProperties.justifyEvenly,
		marginRight: 25,
	},
	buttonFeedbackText: {
		fontFamily: fonts.MONTSERRAT_REGULAR,
		fontSize: 12,
	},
	buttonFeedbackContentMargin: {
		marginRight: 8,
	},
	iconWrapper: {
		backgroundColor: colors.DROIDCONKE_GREEN,
		width: 29,
		height: 29,
		...layoutProperties.justifyCenter,
		...layoutProperties.itemsCenter,
		borderRadius: 14.45,
	},
});

export default AboutScreen;
