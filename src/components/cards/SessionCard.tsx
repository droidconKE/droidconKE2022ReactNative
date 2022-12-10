import React from "react";
import {Image , View , TouchableOpacity , Text, StyleSheet, ImageSourcePropType, Dimensions} from "react-native"
import { colors } from "../../constants/Colors";
import { fonts } from '../../assets/fonts/fonts';
import Session from "../../types/Session";

interface SessionCardPropsWithOnPress {
    onPress: () => void;
    item: Session
    disabled?: boolean

}
const formatTime = (time: string): string => {

    const date = new Date(time)

    const formattedTime =  date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    return formattedTime;
}

const placeholder: ImageSourcePropType = require("../../assets/img/droidconkeplaceholder.png")

const SessionCard = (props: SessionCardPropsWithOnPress) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={props.onPress} disabled={props.disabled}>
            {props.item.session_image === null ? 
            <>
            <Image source={placeholder} resizeMode="stretch" style={styles.poster}/>
            </>
            :
            <>
            <Image source={{ uri : props.item.session_image}} resizeMode="stretch" style={styles.poster}/>
            </>
            }
            <View style={styles.contentWrapper}>
                <Text style={styles.title} numberOfLines={2}>{props.item.title}</Text>
                <Text style={styles.timeAndVenue}>@ {formatTime(props.item.start_date_time)} | {props.item.rooms[0].title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        marginRight: 20,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: colors.DROIDCONKE_PEARL,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width / 1.62,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    title: {
        fontFamily: fonts.MONTSERRAT_BOLD,
        fontSize: 14,
        lineHeight: 20,
        color: colors.DROIDCONKE_BLACK,
        marginBottom: 10,
    },
    timeAndVenue: {
        fontFamily: fonts.MONTSERRAT_REGULAR,
        fontSize: 11,
        color: colors.DROIDCONKE_DARK_GREY,
        lineHeight: 14,
    },
    poster: {
        width: Dimensions.get('screen').width / 1.62, 
        height: Dimensions.get('screen').height / 7.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})

export default SessionCard;