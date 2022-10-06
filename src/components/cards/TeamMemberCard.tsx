import {
	Image,
	ImageSourcePropType,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";

interface TeamMemberCardProps {
	name: string;
	title: string;
	profileImage: ImageSourcePropType;
}

const TeamMemberCard = (props: TeamMemberCardProps) => {
	return (
		<View style={styles.container}>
			<Image
				source={props.profileImage}
				resizeMode="cover"
				style={styles.image}
			/>
			<Text style={[styles.name, styles.textCommon]}>{props.name}</Text>
			<Text style={[styles.title, styles.textCommon]}>{props.title}</Text>
		</View>
	);
};

export default TeamMemberCard;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: "33%",
		marginBottom: 10,
	},
	image: {
		width: 99,
		height: 99,
		borderRadius: 8,
		borderWidth: 2,
		borderColor: colors.DROIDCONKE_GREEN,
	},
	name: {
		fontSize: 14,
		color: colors.DROIDCONKE_BLACK_GOOGLESIGNIN,
		lineHeight: 20,
	},
	title: {
		fontSize: 11,
		color: colors.DROIDCONKE_DARK_GREY,
		lineHeight: 16,
	},
	textCommon: {
		fontFamily: fonts.MONTSERRAT_REGULAR,
		textAlign: "center",
	},
});
