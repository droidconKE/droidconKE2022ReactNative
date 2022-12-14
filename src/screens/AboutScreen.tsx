import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
	Image,
	ImageSourcePropType,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { colors } from "../constants/Colors";
import { fonts } from "../assets/fonts/fonts";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import { MOCK_BIO, ScreenTitle } from "./BioScreen";
import { RootStackParamList } from "../types/Navigation";
import MainHeader from "../components/layouts/MainHeader";
import DroidconOrganizers from "../components/layouts/DroidconOrganizers";

//Dummy About Text. Hardcoded for now, to change once data from server is available
const introText = `Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps and products, and to learn and teach.

This three-day developer focused gathering will be held in Nairobi Kenya on August 16th to 18th 2022 and will be the largest of its kind in Africa.

It will have workshops and codelabs focused on the building of Android applications and will give participants an excellent chance to learn about the local Android development ecosystem, opportunities and services as well as meet the engineers and companies who work on them.`;

const profileImage: ImageSourcePropType = require("../assets/img/john_doe.png");

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
}: NativeStackScreenProps<
	RootStackParamList,
	screen_names.ABOUT,
	undefined
>) => {
	return (
		<SafeAreaView style={[styles.container, styles.paddingVertical]}>
			<StatusBar
				backgroundColor={colors.DROIDCONKE_WHITE}
				barStyle="dark-content"
			/>
			<MainHeader />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Image
					source={require("../assets/img/about.png")}
					resizeMode="contain"
					style={styles.heroImage}
				/>
				<View style={[styles.paddingHorizontal, styles.paddingVertical]}>
					<Text style={[styles.headingText]}>About</Text>
					<Text style={[styles.descriptionText]}>{introText}</Text>
					<Text style={[styles.headingText]}>Organizing Team</Text>
					<View style={[styles.teamContainer]}>
						{MOCK_DATA_ORGANIZING_TEAM.map((member) => (
							<TeamMemberCard
								name={member.name}
								title={member.title}
								profileImage={member.image}
								onPress={() =>
									navigation.navigate(screen_names.BIO, {
										bioData: {
											...MOCK_BIO,
											screenTitle: ScreenTitle.Team,
											title: member.title,
											name: member.name,
											img: member.image,
										},
									})
								}
								key={member.id}
							/>
						))}
					</View>
					<DroidconOrganizers />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
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
		flexDirection: "row",
		flexWrap: "wrap",
		marginBottom: 20,
	},
	descriptionText: {
		fontFamily: fonts.MONTSERRAT_REGULAR,
		fontSize: 16,
		color: colors.DROIDCONKE_BLACK,
		lineHeight: 20,
		marginTop: 10,
		marginBottom: 28,
	},
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

export default AboutScreen;
