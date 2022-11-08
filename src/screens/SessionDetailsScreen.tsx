import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, StyleSheet, ScrollView, Button , Modal, View , TouchableOpacity, Image} from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { colors } from "../constants/Colors";
import { fonts } from "../assets/fonts/fonts";
import { RootStackParamList } from "../types/Navigation";
import AndroidIcon from "../assets/icons/AndroidIcon";
import Star from "../assets/icons/Star";
import ShareIcon from "../assets/icons/ShareIcon";

//mock data 
import { placeholder } from "./HomeScreen";
import TwitterIcon from "../assets/icons/TwitterIcon";
export const Mock_Session =      {
	id: 16,
	title: "Software craftmanship - Becoming a better android developer",
	description:
	  "This talk is all about becoming a better software engineer/android engineer. It covers some of the basic skills/habits we overlook as we learn coding that might cost us in the long term in our journey to become a solid software engineer. This call will be about calling out mediocrity and finding ways to be better at our craft as software engineers. ",
	slug: "software-craftmanship-becoming-a-better-android-developer-1655727475",
	session_format: "Regular Session",
	session_level: "Beginner",
	session_image: null,
	backgroundColor: "#7F9337",
	borderColor: "#7F9337",
	is_serviceSession: false,
	is_keynote: false,
	is_bookmarked: false,
	start_date_time: "2022-11-10 10:00:00",
	start_time: "10:00:00",
	end_date_time: "2022-11-10 10:45:00",
	end_time: "10:45:00",
	speakers: [
	  {
		name: "Seth Kigen.",
		tagline: "Systems Architect @ Twigafoods. ",
		biography: "Coder, Maker & breaker of things.\r\n",
		avatar:
		  "https://sessionize.com/image/be82-400o400o2-1a-8b84-4c47-b0e6-1fcc5595ec6f.c213136b-8252-4310-a0ff-a2d30881049f.jpg",
		twitter: "http://twitter.com/kigen",
		facebook: null,
		linkedin: null,
		instagram: null,
		blog: "http://sekiki.wordpress.com/",
		company_website: null,
	  },
	],
	rooms: [
	  {
		title: "Room B",
		id: 2,
	  },
	],
  }

const SessionDetailsScreen = ({
    navigation,
    route
}: NativeStackScreenProps<RootStackParamList, screen_names.SESSION_DETAILS, undefined>) => { 
    const {sessionData} = route.params
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.rowContainer}>
                <AndroidIcon color={colors.DROIDCONKE_BRICK_RED} height={12.48} width={15.71} style={styles.androidIcon}/>
                <Text style={styles.speakerTitle}>
                    Speaker
                </Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.speakerName}>
                    FRANK TAMRE
                </Text>
                <Star color={colors.DROIDCONKE_BLUE} style={styles.starIcon} />
            </View>
            <Text style={styles.titleText}>
            Compose Beyond Material Design
            </Text>
            <Text style={styles.contentText}>
            Been in the tech industry for over 20 years. Am passionate about developer communities, motivating people and building successful
            </Text>
            <Image source={placeholder} style={styles.sessionImage} />
            <Text style={styles.timeAndroomText}>
                9.30AM - 10:15AM  |  ROOM 1
            </Text>
            <Text style={styles.sessionLevelText}>
            #BEGINNER
            </Text>
            <View style={styles.footer}>
					<Text style={styles.footerText}>Twitter Handle</Text>
					<TouchableOpacity
						onPress={() => {
							alert("Twitter handle pressed!");
						}}
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
								PriestTamzi
							</Text>
						</View>
					</TouchableOpacity>
				</View>
            <TouchableOpacity style={styles.ShareIconContainer}>
                <ShareIcon color={colors.DROIDCONKE_WHITE}/>
            </TouchableOpacity>
        </SafeAreaView>
);
};

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        backgroundColor : colors.DROIDCONKE_WHITE,
        padding : 20
    },
    rowContainer : {
        flexDirection : "row",
        alignItems : "center"
    },
    androidIcon : {
        marginRight : 8
    },
    speakerTitle : {
        fontFamily : fonts.MONTSERRAT_REGULAR,
        color : colors.DROIDCONKE_BRICK_RED,
        fontSize : 11
    },
    speakerName : {
        color : colors.DROIDCONKE_BLUE,
        fontFamily : fonts.MONTSERRAT_BOLD,
        fontSize : 20
    },
    starIcon : {
        position : "absolute",
        right : 10
    },
    titleText : {
        marginTop : 25,
        fontSize : 18,
        fontFamily : fonts.MONTSERRAT_BOLD,
        color : colors.DROIDCONKE_BLACK
    },
    contentText : {
        fontFamily : fonts.MONTSERRAT_REGULAR,
        fontSize : 16,
        textAlign : "left",
        color : "#707070",
        marginTop : 15
    },
    sessionImage : {
        borderColor : "#68DEA442",
        borderRadius : 10,
        borderWidth : 1,
        width : "100%",
        marginTop : 10,
        marginBottom : 30
    },
    timeAndroomText : {
        fontFamily : fonts.MONTSERRAT_REGULAR,
        color: "#707070",
        fontSize : 12,
        textAlign : "left"
    },
    sessionLevelText : {
        color : "#FFFFFF",
        fontSize : 13,
        fontFamily : fonts.MONTSERRAT_REGULAR,
        textAlign : "center",
        backgroundColor : "#191D1D",
        borderRadius : 5,
        width : 100,
        marginTop : 15,
        marginBottom : 30
    },
    twitterHandleText : {
        fontFamily : fonts.MONTSERRAT_REGULAR,
        fontSize : 16,
        color : "#20201E",
        textAlign : "left"
    },
    twitterButton : {
        position : "absolute",
        right : 0
    },
    ShareIconContainer : {
        position : "absolute",
        backgroundColor : colors.DROIDCONKE_BRICK_RED,
        height : 44,
        width : 44,
        right : 20,
        bottom : 30,
        borderRadius : 22,
        justifyContent : "center",
        alignItems : "center"
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
    footer: {
		marginTop: 1,
		backgroundColor: colors.DROIDCONKE_WHITE,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	footerText: {
		fontSize: 16,
		fontFamily: fonts.MONTSERRAT_REGULAR,
	}
})

export default SessionDetailsScreen
