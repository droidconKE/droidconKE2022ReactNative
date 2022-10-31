import React from "react";
import { View, Text, TouchableOpacity , StyleSheet, Alert, GestureResponderEvent} from "react-native";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import WhatsappIcon from "../../assets/icons/WhatsAppIcon";
import TelegramIcon from "../../assets/icons/TelegramIcon";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";
import FacebookIcon from "../../assets/icons/FacebookIcon";

export type SocialMedia = "WhatsApp" | "Facebook" | "Telegram" | "Twitter"

const getSocialMediaIcon = (socialmedia : SocialMedia) : JSX.Element => {
    switch(socialmedia) {
        case "Twitter" : 
            return (<TwitterIcon height={20} width={20} color={colors.DROIDCONKE_BLACK}  />)
        case "Telegram":
            return (<TelegramIcon color={colors.DROIDCONKE_BLACK}  />)
        case "WhatsApp":
            return (<WhatsappIcon color={colors.DROIDCONKE_BLACK}  />)
        case "Facebook":
            return (<FacebookIcon />)
        default:
            throw new Error("Social Media Icon not yet implemented")
    }
}

const getOnclickAction = (socialmedia : SocialMedia) : ((event : GestureResponderEvent) => void )=> {
    const twitteronclick = () => {Alert.alert("Twitter clicked")}
    const telegramonclick = () => {Alert.alert("Telegram clicked")}
    const whatsapponclick = () => {Alert.alert("Whatsapp clicked")}
    const facebookonclick = () => {Alert.alert("Facebook clicked")}
    switch(socialmedia){
        case "Twitter":
            return twitteronclick
        case "Telegram":
            return telegramonclick
        case "WhatsApp":
            return whatsapponclick
        case "Facebook":
            return facebookonclick
        default:
            throw new Error("Social media on click action not yet implemented")
    }
}

export default function SocialButton(props : {socialmedia : SocialMedia}): JSX.Element {
    const SocialMediaIcon = getSocialMediaIcon(props.socialmedia)
    return(
    <TouchableOpacity style={styles.socialButtonContainer} onPress={getOnclickAction(props.socialmedia)}>
        <View  style={styles.mediaIconContainer}>
        {SocialMediaIcon}
        </View>
        <Text style={styles.socialMediaName}>
            {props.socialmedia}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	socialButtonContainer: {
        height : "100%" ,
        width : "42%" , 
        borderWidth :1 , 
        borderColor : colors.DROIDCONKE_LIGHT_GREEN, 
        borderRadius : 10 ,  
        flexDirection : "row",
        alignItems : "center"
	},
    mediaIconContainer : {
        marginLeft : "20%" , 
        marginRight : "10%"
    },
    socialMediaName : {
        fontFamily : fonts.MONTSERRAT_REGULAR,
        fontSize : 16,
        textAlign : "left",
        color : colors.DROIDCONKE_BLACK_TEXT_AND_LABEL
    }
});
