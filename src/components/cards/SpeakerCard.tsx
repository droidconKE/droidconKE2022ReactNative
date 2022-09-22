import React from "react";
import {Image , View , TouchableOpacity , Text, StyleSheet, ImageSourcePropType} from "react-native"


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
        backgroundColor : "#F5F5F5",
        alignItems : "center",
        borderRadius : 15,
        margin : 5
    },
    image : {
        borderColor : "#00E2C3",
        borderWidth : 2,
        height : 109,
        width : 109,
        margin : 20,
        borderRadius : 10
    } ,
    title : {
        color : "#000CEB",
        marginBottom : 10,
        fontFamily : "Montserrat",
        fontWeight : "bold",
        fontSize : 14
    } ,
    content : {
        textAlign : "center",
        marginBottom : 10 ,
        fontFamily : "Montserrat",
        fontSize : 11
    } ,
    button : {
        width : "80%",
        height : 45,
        borderColor : "#7DE1C3",
        borderRadius : 5 ,
        borderWidth : 2 ,
        alignContent : "center",
        justifyContent : "center",
        marginBottom : 10
    } ,
    buttontext : {
        color : "#7DE1C3",
        textAlign : "center",
        fontFamily : "Montserrat",
        fontWeight : "bold",
        fontSize : 14
    }
})