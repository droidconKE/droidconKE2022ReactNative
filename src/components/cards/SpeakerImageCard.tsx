import React from "react";
import {Image , View , TouchableOpacity , Text, StyleSheet, ImageSourcePropType} from "react-native"
import { colors } from "../../constants/Colors";
import { fonts } from '../../assets/fonts/fonts';

export interface SpeakerImageCardProps {
    id: string;
    ProfilePicture : ImageSourcePropType;
    SpeakersName : String ;
}

const SpeakerImageCard = (props : SpeakerImageCardProps) => {
    return (
        <View style={styles.container}>
            <Image source={props.ProfilePicture} style={styles.image} />
            <Text style={styles.title}>{props.SpeakersName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems : "center",
        borderRadius : 10,
        marginLeft: -20,
    },
    image : {
        borderColor : colors.DROIDCONKE_GREEN,
        borderWidth : 2,
        height : 76,
        width : 76,
        borderRadius : 7
    } ,
    title : {
        color : colors.DROIDCONKE_BLACK,
        fontFamily : fonts.MONTSERRAT_MEDIUM,
        width : "80%",
        fontSize : 11 ,
        textAlign : "center",
        marginVertical: 10,
        lineHeight: 14,
    },
})

export default SpeakerImageCard;