import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import TiskosIcon from "../../assets/icons/TiskosIcon";
import AppsLabIcon from "../../assets/icons/AppsLabIcon";
import Android254Icon from "../../assets/icons/Android254Icon";
import { layoutProperties } from "../../constants/Properties";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";

const DroidconOrganizers = () => {
	return (
		<View style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}>
			<Text
				style={[styles.sponsorsContainerTitle, styles.marginVerticalSeparator]}
			>
				Organized by :
			</Text>
			<View
				style={[
					styles.sponsorsIconsContainer,
					layoutProperties.justifyAround,
					styles.marginVerticalSeparator,
				]}
			>
				<Android254Icon />
				<Image
					resizeMode="contain"
					source={require("../../assets/img/kotlin.png")}
				/>
				<Image
					resizeMode="contain"
					source={require("../../assets/img/flutter_kenya.png")}
				/>
			</View>
			<View
				style={[
					styles.sponsorsIconsContainer,
					layoutProperties.justifyAround,
					styles.marginVerticalSeparator,
				]}
			>
				<AppsLabIcon />
				<Image
					resizeMode="contain"
					source={require("../../assets/img/early_camp.png")}
				/>
				<TiskosIcon />
			</View>
		</View>
	);
};

export default DroidconOrganizers;

const styles = StyleSheet.create({
	marginVerticalSeparator2: {
		marginVertical: 18,
	},
	sponsorsContainer: {
		backgroundColor: colors.DROIDCONKE_PEARL,
		padding: 20,
		borderRadius: 10,
	},
	sponsorsContainerTitle: {
		fontFamily: fonts.MONTSERRAT_BOLD,
		fontSize: 18,
		lineHeight: 20,
		color: colors.DROIDCONKE_BLUE,
		textAlign: "center",
	},
	sponsorsIconsContainer: {
		...layoutProperties.flexRow,
		...layoutProperties.itemsCenter,
	},
	marginVerticalSeparator: {
		marginVertical: 15,
	},
});
