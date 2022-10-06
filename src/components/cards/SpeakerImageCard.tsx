import React from "react";
import {Image , TouchableOpacity , Text, StyleSheet, ImageSourcePropType} from "react-native"
import { colors } from "../../constants/Colors";
import { fonts } from '../../assets/fonts/fonts';
import { layoutProperties } from "../../constants/Properties";

export interface SpeakerImageCardProps {
    id: string;
    ProfilePicture : ImageSourcePropType;
    SpeakersName : String ;
}
interface SpeakerImageCardPropsWithOnPress extends SpeakerImageCardProps {
    onPress: () => void;
}

const SpeakerImageCard = (props : SpeakerImageCardPropsWithOnPress) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image source={props.ProfilePicture} style={styles.image} />
            <Text style={styles.name}>{props.SpeakersName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        ...layoutProperties.itemsCenter,
        borderRadius : 10,
        marginLeft: -20,
        marginRight: 5,
    },
    image : {
        borderColor : colors.DROIDCONKE_GREEN,
        borderWidth : 2,
        height : 76,
        width : 76,
        borderRadius : 7
    },
    name : {
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