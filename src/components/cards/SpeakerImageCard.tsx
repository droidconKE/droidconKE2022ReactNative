import React from "react";
import {Image , TouchableOpacity , Text, StyleSheet, ImageSourcePropType} from "react-native"
import { colors } from "../../constants/Colors";
import { fonts } from '../../assets/fonts/fonts';
import { layoutProperties } from "../../constants/Properties";
import Speaker from "../../types/Speaker";

interface SpeakerImageCardPropsWithOnPress {
    onPress: () => void;
    item: Speaker
}

const SpeakerImageCard = (props : SpeakerImageCardPropsWithOnPress) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image source={{ uri: props.item.avatar}} style={styles.image} resizeMode="center"/>
            <Text style={styles.name}>{props.item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        ...layoutProperties.itemsCenter,
        borderRadius : 10,
    },
    image : {
        borderColor : colors.DROIDCONKE_GREEN,
        borderWidth : 2,
        height : 76,
        width : 76,
        borderRadius : 12 
    },
    name : {
        color : colors.DROIDCONKE_BLACK,
        fontFamily : fonts.MONTSERRAT_MEDIUM,
        width : 76,
        fontSize : 11 ,
        textAlign : "center",
        marginVertical: 10,
        lineHeight: 14,
    },
})

export default SpeakerImageCard;