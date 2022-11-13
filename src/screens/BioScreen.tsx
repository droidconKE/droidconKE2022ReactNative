import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	Image,
	ScrollView,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/Colors";
import { fonts } from "../assets/fonts/fonts";
import TwitterIcon from "../assets/icons/TwitterIcon";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import AndroidIcon from "../assets/icons/AndroidIcon";
import { RootStackParamList } from "../types/Navigation";
import { getTwitterHandle } from "./SessionDetailsScreen";
import * as Linking from 'expo-linking';


export enum ScreenTitle {
	Speaker = "Speaker",
	Team = "Team",
}
export interface BioDetails {
	screenTitle: ScreenTitle;
	id?: string;
	title?: string; //Applicable where screenTitle === "Team"
	img: string;
	name: string;
	occupation?: string;
	skills: string[];
	content: string;
	twitterHandle: string;
}

//Mock bio to be replaced with data from the server
export const MOCK_BIO: BioDetails = {
	screenTitle: ScreenTitle.Speaker,
	id: "1",
	name: "Frank Tamre",
	img: require("../assets/img/john_doe.png"),
	occupation: "Kenya Partner Lead at doridcon Berlin",
	skills: ["Android", "Kotlin", "Flutter", "C++"],
	content:
		"Worked at Intel, co-Founded Moringa School, then started @earlycamp to train young children from 5-16 on how to solve problems with technology.Started @interactive to tell African stories with Games to a global audience.Community wise I organize Android & Kotlin developers every month for a meetUp to chat about technology.I Lead a cool team in organizing droidConKE the largest android developer focussed event in Sub Saharan Africa.I train people,mentor them, build things, am highly experimental, read alot and socialize vertically.",
	twitterHandle: "PriestTamzi",
};

const BioScreen = ({
	navigation,
	route,
}: NativeStackScreenProps<RootStackParamList, screen_names.BIO, undefined>) => {
	const { bioData } = route.params;

	//Loop through listed skills, format them ready for display and store them in a skills array
	const skills = []; //Stores speaker skills Ex: Android, Kotlin
	
	if(bioData.skills.length < 1) {

		skills.push(<Text>{''}</Text>);

	} else {

		for (let i = 0; i <= bioData.skills.length; i++) {
			skills.push(<Text key={i}>| {bioData.skills[i]}</Text>);
		}

	}

	const parragraphArray = bioData.content.split("."); //Create a new array by diving the speaker bio string. Fullstop denotes a new paragraph
	const textElements = []; //Array to hold the bio 'paragraphs' with line break added
	let j = 0;
	while (j < parragraphArray.length) {
		textElements.push(parragraphArray[j] + "\n\n");
		j++;
	}

    const goToSpeakersTwitterProfile = (profileUrl: string) => Linking.openURL(profileUrl)
	
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.header}>
					<ImageBackground
						style={styles.bgimage}
						source={require("../assets/img/bg_single_speaker.png")}
					>
						<View style={styles.backbutton}>
							<TouchableOpacity onPress={() => navigation.goBack()}>
								<ArrowLeftIcon color={colors.DROIDCONKE_PEARL} />
							</TouchableOpacity>
							<Text style={styles.speakerheadertext}>
								{bioData.screenTitle}
							</Text>
						</View>

						<Image style={styles.profilepic} source={{uri: bioData.img}} resizeMode="contain" resizeMethod="auto" />
					</ImageBackground>
				</View>
				<View style={styles.body}>
					<View style={styles.bioSummary}>
						<View style={styles.titleContainer}>
							{bioData.screenTitle === ScreenTitle.Speaker ? (
								<>
									<AndroidIcon
										width={27}
										height={27}
										color={colors.DROIDCONKE_BRICK_RED}
									/>
									<Text style={styles.title}>Speaker:</Text>
								</>
							) : (
								<Text style={styles.title}>{bioData.title}</Text>
							)}
						</View>
						<Text style={styles.name}>{bioData.name}</Text>
						<Text style={styles.descriptionText}>{bioData.occupation}</Text>
						<Text style={styles.descriptionText}>{skills}</Text>
					</View>
					<ScrollView>
						<View style={styles.bioDetailsContainer}>
							<Text style={styles.bioDetailsHeader}>Bio</Text>
							<Text style={styles.bioDetailsContent}>{bioData.content}</Text>
						</View>
					</ScrollView>
				</View>
				{bioData.twitterHandle !== null && bioData.twitterHandle.length > 0 ? <>
				<View style={styles.footer}>
					<Text style={styles.footerText}>Twitter Handle</Text>
					<TouchableOpacity
						onPress={() => goToSpeakersTwitterProfile(bioData.twitterHandle)}
					>
						<View style={styles.twitterHandleButton}>
							<TwitterIcon
								width={30}
								height={25}
								color={colors.DROIDCONKE_BLUE}
							/>
							<Text
								style={{
									...styles.footerText,
									color: colors.DROIDCONKE_BLUE,
								}}
							>
								{getTwitterHandle(bioData.twitterHandle)}
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				</>
				:
				<>
                {''}
				</>}
			</View>
		</SafeAreaView>
	);
};

export default BioScreen;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		display: "flex",
	},
	header: {
		flex: 2,
		position: "relative",
	},
	bgimage: {
		flex: 1,
	},
	body: {
		backgroundColor: colors.DROIDCONKE_WHITE,
		flex: 7,
	},
	footer: {
		marginTop: 1,
		backgroundColor: colors.DROIDCONKE_WHITE,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	footerText: {
		fontSize: 16,
		fontFamily: fonts.MONTSERRAT_REGULAR,
	},
	arrowleft: {
		backgroundColor: "red",
		width: 50,
		height: 50,
	},
	profilepic: {
		width: 100,
		height: 100,
		position: "absolute",
		left: "37%",
		top: "75%",
		zIndex: 1,
		borderRadius: 50,
		borderWidth: 3,
		borderColor: colors.DROIDCONKE_LIGHT_GREEN,
	},
	bioSummary: {
		alignItems: "center",
		paddingTop: 65,
	},
	title: {
		color: colors.DROIDCONKE_BRICK_RED,
		fontSize: 15,
		fontFamily: fonts.MONTSERRAT_REGULAR,
		marginBottom: 6,
	},
	name: {
		color: colors.DROIDCONKE_BLUE,
		fontSize: 20,
		marginBottom: 10,
		fontFamily: fonts.MONTSERRAT_BOLD,
		padding: 0,
		lineHeight: 20,
	},
	descriptionText: {
		fontWeight: "500",
		color: colors.DROIDCONKE_LIGHT_GREY,
		fontFamily: fonts.MONTSERRAT_REGULAR,
		width: Dimensions.get('screen').width - 60,
		textAlign: 'center'
	},
	bioDetailsContainer: {
		height: "100%",
		paddingHorizontal: 10,
	},
	bioDetailsHeader: {
		marginTop: 20,
		color: colors.DROIDCONKE_BLUE,
		fontSize: 20,
		fontWeight: "900",
		fontFamily: fonts.MONTSERRAT_BOLD,
	},
	bioDetailsContent: {
		color: colors.DROIDCONKE_BLACK,
		fontWeight: "400",
		fontFamily: fonts.MONTSERRAT_REGULAR,
	},
	twitterHandleButton: {
		borderWidth: 2,
		paddingHorizontal: 25,
		borderColor: colors.DROIDCONKE_BLUE,
		borderRadius: 7,
		color: colors.DROIDCONKE_BLUE,
		display: "flex",
		flexDirection: "row",
		paddingVertical: 5,
	},
	backbutton: {
		stydisplay: "flex",
		flexDirection: "row",
		width: 140,
		alignItems: "center",
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	titleContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 0,
		margin: 0,
	},
	speakerheadertext: {
		fontFamily: fonts.MONTSERRAT_REGULAR,
		color: colors.DROIDCONKE_PEARL,
		fontSize: 18,
		marginLeft: 20,
	},
});
