import React from "react";
import {Image , View , TouchableOpacity , Text, StyleSheet, ImageSourcePropType} from "react-native"
import { colors } from "../../constants/Colors";
import { fonts } from '../../assets/fonts/fonts';

export interface SpeakerCardProps {
    id: string;
    ProfilePicture : ImageSourcePropType;
    SpeakersName : String ;
    Content : String;
}

export default function (props : SpeakerCardProps) : JSX.Element {
    return (
        <View style={styles.container}>
            <Image source={props.ProfilePicture} style={styles.image} />
            <Text style={styles.title}>{props.SpeakersName}</Text>
            <Text style={styles.content}>{props.Content}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>
                    SESSION
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1 ,
        backgroundColor : colors.DROIDCONKE_PEARL,
        alignItems : "center",
        borderRadius : 10,
        margin : 5
    },
    image : {
        borderColor : colors.DROIDCONKE_GREEN,
        borderWidth : 2,
        height : 109,
        width : 109,
        margin : 20,
        borderRadius : 7
    } ,
    title : {
        color : colors.DROIDCONKE_BLUE,
        marginBottom : 10,
        fontFamily : fonts.MONTSERRAT_BOLD,
        width : "80%",
        fontSize : 14
    } ,
    content : {
        textAlign : "center",
        marginBottom : 10 ,
        fontFamily : fonts.MONTSERRAT_REGULAR ,
        fontSize : 11 ,
        width : "80%"
    } ,
    button : {
        width : "80%",
        height : 45,
        borderColor : colors.DROIDCONKE_LIGHT_GREEN,
        borderRadius : 10 ,
        borderWidth : 2 ,
        alignContent : "center",
        justifyContent : "center",
        marginBottom : 10
    } ,
    buttontext : {
        color : colors.DROIDCONKE_LIGHT_GREEN,
        textAlign : "center",
        fontFamily : fonts.MONTSERRAT_SEMIBOLD,
        fontSize : 14
    }
})