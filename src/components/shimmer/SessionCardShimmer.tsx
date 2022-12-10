import React from "react"
import { Dimensions, View, StyleSheet } from "react-native"
import Shimmer from "."

const SessionCardShimmer = () => {

    return (
        <View style={styles.sessionCardShimmerContainer}>
            <Shimmer
                wrapperStyle={styles.sessionImageShimmer}
            />
            <View style={styles.sesionImageSeparator}/>
            <View style={styles.contentContainer}>
                <Shimmer
                    wrapperStyle={styles.titleShimmer}
                />
                <View style={styles.contentVerticalSeparator}/>
                <Shimmer
                    wrapperStyle={styles.contentShimmer}
                />
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    sessionCardShimmerContainer: {
        marginRight: 20,
    },
    sessionImageShimmer: {
        width: Dimensions.get("screen").width / 1.62,
        height: Dimensions.get("screen").height / 7.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    sesionImageSeparator: {
        marginVertical: 10
    },
    contentContainer: {marginHorizontal: 10},
    titleShimmer: {
        width: Dimensions.get("screen").width / 2,
        height: 30,
        borderRadius: 10
    },
    contentVerticalSeparator: {marginVertical: 6},
    contentShimmer: {
        width: Dimensions.get("screen").width / 3,
        height: 15,
        borderRadius: 10
    }

})
export default SessionCardShimmer;
