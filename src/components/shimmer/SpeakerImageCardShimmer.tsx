import React from "react"
import { View, StyleSheet } from "react-native"
import Shimmer from "."
import { layoutProperties } from "../../constants/Properties"

const SpeakerImageCardShimmer = () => {

    return (
        <View style={styles.speakerImageCardContainer}>
            <Shimmer
                wrapperStyle={styles.speakerImageShimmer}
            />
            <View style={styles.marginVerticalSeparator} />
            <Shimmer
                wrapperStyle={styles.contentShimmer}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    speakerImageCardContainer: { ...layoutProperties.itemsCenter },
    speakerImageShimmer: { height: 76, width: 76, borderRadius: 12 },
    marginVerticalSeparator:{ marginVertical: 10 },
    contentShimmer: { height: 20, width: 76, borderRadius: 12 },


})

export default SpeakerImageCardShimmer