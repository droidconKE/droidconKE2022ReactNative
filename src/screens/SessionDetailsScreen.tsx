import React  from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, StyleSheet, ScrollView, Button , Modal, View , TouchableOpacity, Image, ImageSourcePropType} from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { colors } from "../constants/Colors";
import { fonts } from "../assets/fonts/fonts";
import { RootStackParamList } from "../types/Navigation";
import AndroidIcon from "../assets/icons/AndroidIcon";
import Star from "../assets/icons/Star";
import ShareIcon from "../assets/icons/ShareIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import { layoutProperties } from "../constants/Properties";

  const getTwitterHandle = (profileLink : string) => {
    const twitterHandle = profileLink.split("/")[3]
    return twitterHandle
  }

  const placeholder : ImageSourcePropType = require("../assets/img/droidconkeplaceholder.png")

const SessionDetailsScreen = ({
    navigation,
    route
}: NativeStackScreenProps<RootStackParamList, screen_names.SESSION_DETAILS, undefined>) => { 

    const {sessionData} = route.params
    const room = sessionData.rooms[0].title

    const get12hourformat = (timeString : string) : string => {
        const [hourString, minute, seconds ] = timeString.split(":")
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
    }

    const starttime = get12hourformat(sessionData.start_time)
    const endtime = get12hourformat(sessionData.end_time)

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.scrollableContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.rowContainer}>
                <AndroidIcon color={colors.DROIDCONKE_BRICK_RED} height={25} width={25} style={styles.androidIcon}/>
                <Text style={styles.speakerTitle}>
                    {sessionData.speakers.length > 1 ? 'Speakers' : 'Speaker'}
                </Text>
            </View>
            <View style={[styles.rowContainer, layoutProperties.itemsCenter]}>
                <View style={layoutProperties.flexColumn}>
                {sessionData.speakers.map((speaker,index )=>
                    <>
                        <Text style={styles.speakerName}>
                            {speaker.name}
                        </Text>
                        {index!== sessionData.speakers.length - 1 &&
                        <Text style={styles.speakerName}>&</Text>
                        }
                    </>
                )}
                </View> 
                <Star color={colors.DROIDCONKE_BLUE} style={styles.starIcon} />
            </View>
            <Text style={styles.titleText}>
            {sessionData.title}
            </Text>
            <Text style={styles.contentText}>
            {sessionData.description}
            </Text>
            {sessionData.session_image === null ?
            <>
                <Image source={placeholder} style={styles.sessionImage} resizeMode="contain"/>
            </>:
            <>
                <Image source={{ uri: sessionData.session_image}} style={styles.sessionImage} resizeMode="contain"/>
            </>}
            <Text style={styles.timeAndroomText}>
                {starttime} - {endtime}  |  {room}
            </Text>
            <View style={styles.sessionLevelContainer}>
                <Text style={styles.sessionLevelText}>
                #{sessionData.session_level}
                </Text>
            </View>
            {sessionData.speakers.map(speaker => 
            <>
            {speaker?.twitter?.length > 0 ? 
                <>
                <View style={styles.twitterRowContainer}>
                    <Text style={styles.twitterText}>Twitter Handle</Text>
                        <TouchableOpacity onPress={() => {alert("Twitter handle pressed")}} style={styles.twitterHandleButton}>
                            <TwitterIcon
                                width={30}
                                height={25}
                                color={colors.DROIDCONKE_BLUE}
                            />
                            <Text
                                style={{
                                    ...styles.twitterText,
                                    color: colors.DROIDCONKE_BLUE,
                                }}
                            >
                                {getTwitterHandle(speaker?.twitter)}
                            </Text>
                    </TouchableOpacity>
                </View>
                </>
                : 
                <>
                {''}
                </>
            }
            </>            
            )}
            </ScrollView>
            </View>
            <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.ShareIconContainer}>
                <ShareIcon color={colors.DROIDCONKE_WHITE}/>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
);
};

const styles = StyleSheet.create({
    scrollableContainer : {
      height : "85%"
    },
    footerContainer : {
      height : "15%"
    },
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
        fontSize : 20,
        textAlign: 'center',
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
        color : colors.DROIDCONKE_DARK_GREY,
        marginTop : 15
    },
    sessionImage : {
        borderColor : colors.DROIDCONKE_MEDIUM_AQUAMARINE,
        borderRadius : 10,
        borderWidth : 1,
        width : "100%",
        height: 190,
        marginTop : 10,
        marginBottom : 30
    },
    timeAndroomText : {
        fontFamily : fonts.MONTSERRAT_REGULAR,
        color: colors.DROIDCONKE_DARK_GREY,
        fontSize : 12,
        textAlign : "left"
    },
    sessionLevelContainer: {
        backgroundColor : colors.DROIDCONKE_DARK_BLACK,
        paddingHorizontal: 9,
        flexWrap: 'wrap',
        marginTop : 15,
        marginBottom : 30,
        alignSelf: 'flex-start',
        borderRadius : 5,
    },
    sessionLevelText : {
        color : colors.DROIDCONKE_WHITE,
        fontSize : 13,
        fontFamily : fonts.MONTSERRAT_REGULAR,
    },
    twitterText : {
        fontFamily : fonts.MONTSERRAT_REGULAR,
        fontSize : 16,
        color : colors.DROIDCONKE_BLACK,
        textAlign : "left"
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
		borderWidth: 1,
		paddingHorizontal: 25,
		borderColor: colors.DROIDCONKE_BLUE,
		borderRadius: 10,
		color: colors.DROIDCONKE_BLUE,
		display: "flex",
		flexDirection: "row",
		paddingVertical: 5,
        position : "absolute",
        right : 0
	},
    twitterRowContainer : {
        flexDirection : "row",
        marginBottom : 20,
        alignItems: 'center',
    }
})

export default SessionDetailsScreen
