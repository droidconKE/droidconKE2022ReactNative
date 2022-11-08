import {
	Image,
	ImageSourcePropType,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";

interface TeamMemberCardProps {
	name: string;
	title: string;
	profileImage: ImageSourcePropType;
	onPress: () => void;
}

const TeamMemberCard = (props: TeamMemberCardProps) => {
	return (
		<TouchableOpacity onPress={props.onPress} style={styles.container}>
			<View>
				<Image
					source={props.profileImage}
					resizeMode="cover"
					style={styles.image}
				/>
				<Text style={[styles.name, styles.textCommon]}>{props.name}</Text>
				<Text style={[styles.title, styles.textCommon]}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default TeamMemberCard;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: "33.3%",
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
		color: colors.DROIDCONKE_BLACK_TEXT_AND_LABEL,
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
