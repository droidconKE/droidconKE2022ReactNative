import React from "react";
import { View, ActivityIndicator, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/Colors";
import { layoutProperties } from "../../constants/Properties";

const ActivityOverlay = () => {
	return (
		<View style={styles.ActivityOverlayIndicator}>
			<ActivityIndicator
				color={colors.DROIDCONKE_BLUE}
				animating
				size="large"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	ActivityOverlayIndicator: {
		...StyleSheet.absoluteFill,
        ...layoutProperties.justifyCenter,
        ...layoutProperties.itemsCenter,
        backgroundColor: colors.DROIDCONKE_MODAL_OVERLAY
	},
});
export default ActivityOverlay;
