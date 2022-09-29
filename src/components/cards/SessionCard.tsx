import React from "react";
import {Image , View , TouchableOpacity , Text, StyleSheet, ImageSourcePropType, Dimensions} from "react-native"
import { colors } from "../../constants/Colors";
import { fonts } from '../../assets/fonts/fonts';

export interface SessionCardProps {
    id: string,
    poster: ImageSourcePropType,
    title: string,
    time: string,
    venue: string,
}

const SessionCard = (props: SessionCardProps) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={props.poster} resizeMode="contain" style={{width: Dimensions.get('screen').width - 140, marginBottom: -25}}/>
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>{props.title}</Text>
                <Text>@ {props.time} | {props.venue}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        marginRight: 20,
    },
    contentWrapper: {
        backgroundColor: colors.DROIDCONKE_PEARL,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width - 140,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    title: {
        fontFamily: fonts.MONTSERRAT_BOLD,
        fontSize: 14,
        lineHeight: 20,
        color: colors.DROIDCONKE_BLACK,
        width: '90%',
        marginBottom: 10,
    },
    timeAndVenue: {
        fontFamily: fonts.MONTSERRAT_REGULAR,
        fontSize: 11,
        color: colors.DROIDCONKE_DARK_GREY,
        lineHeight: 14,
    }
})

export default SessionCard;