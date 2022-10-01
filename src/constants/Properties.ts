// includes globally reusable CSS properties like border-radius, box-shadows e.t.c
import { StyleSheet } from "react-native"
enum properties {
    BORDER_RADIUS = 8,
    BORDER_RADIUS_MAX = 50,
    BOX_SHADOW = "",
}

// Layout properties.
export const layoutProperties = StyleSheet.create({
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    justifyEvenly: {
        justifyContent: 'space-evenly',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    flexRow: {
        flexDirection: 'row',
    },
    itemsCenter: {
        alignItems: 'center', 
    },

})