import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import DroidconKeIcon from "../../assets/icons/DroidconKeIcon";
import { layoutProperties } from "../../constants/Properties";
import { fonts } from "../../assets/fonts/fonts";
import { colors } from "../../constants/Colors";
import { useAppSelector } from "../../hooks/useTypedRedux";
import LockIcon from "../../assets/icons/LockIcon";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import { screen_names } from "../../constants/ScreenNames";

interface MainHeaderProps {
	onPress?: () => void; //allow consumer of this component to handle the press event differently in the not-signed-in state.
}

const MainHeader = (props: MainHeaderProps) => {
	const { user } = useAppSelector((state) => state.user);

	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();


	const goToFeedbackScreen = () => navigation.navigate(screen_names.FEEDBACK, {sessionSlug: undefined});

	
	if (!user)
		return (
			<View style={[styles.signedOutHeader, styles.marginBottomSeparator]}>
				<DroidconKeIcon width={150} style={styles.droidconkeIcon} />
				<TouchableOpacity
					style={styles.iconWrapper}
					onPress={props.onPress}
				>
					<LockIcon />
				</TouchableOpacity>
			</View>
		);

	return (
		<View
			style={[
				styles.signedInHeader,
				styles.marginVerticalSeparator,
				styles.paddingHorizontal,
			]}
		>
			<DroidconKeIcon width={150} style={styles.droidconkeIcon} />
			<View
				style={[
					layoutProperties.flexRow,
					layoutProperties.justifyBetween,
					layoutProperties.itemsCenter,
				]}
			>
				<TouchableOpacity
					style={styles.buttonFeedback}
					onPress={goToFeedbackScreen}
				>
					<Image
						resizeMode="contain"
						source={require("../../assets/icons/SmileyIcon.png")}
						style={styles.buttonFeedbackContentMargin}
					/>
					<Text
						style={[
							styles.buttonFeedbackText,
							styles.buttonFeedbackContentMargin,
						]}
					>
						Feedback
					</Text>
					<Image
						resizeMode="contain"
						source={require("../../assets/icons/SendIcon.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconWrapper}>
					<Image
						resizeMode="contain"
						source={{uri: user.avatar as string}}
						style={styles.avatar}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MainHeader;

const styles = StyleSheet.create({
	signedOutHeader: {
		...layoutProperties.flexRow,
		...layoutProperties.justifyBetween,
		...layoutProperties.itemsCenter,
		marginRight: 3,
		paddingHorizontal: 20,
	},
	signedInHeader: {
		...layoutProperties.flexRow,
		...layoutProperties.justifyAround,
		...layoutProperties.itemsCenter,
		marginRight: 20,
		marginLeft: 10,
	},
	marginVerticalSeparator: {
		marginVertical: 15,
	},
	paddingVertical: {
		paddingVertical: 20,
	},
	paddingHorizontal: {
		paddingHorizontal: 20,
	},
	droidconkeIcon: {
		marginVertical: -100,
	},
	buttonFeedback: {
		backgroundColor: colors.DROIDCONKE_GREEN_TRANSLUCENT,
		padding: 12,
		borderRadius: 10,
		...layoutProperties.flexRow,
		...layoutProperties.itemsCenter,
		...layoutProperties.justifyEvenly,
		marginRight: 25,
	},
	buttonFeedbackText: {
		fontFamily: fonts.MONTSERRAT_REGULAR,
		fontSize: 12,
	},
	buttonFeedbackContentMargin: {
		marginRight: 8,
	},
	iconWrapper: {
		backgroundColor: colors.DROIDCONKE_GREEN,
		width: 29,
		height: 29,
		...layoutProperties.justifyCenter,
		...layoutProperties.itemsCenter,
		borderRadius: 14.45,
	},
	marginBottomSeparator: {
		marginBottom: 10,
	},
	avatar: {width: 45, height: 45, borderRadius: 22.5}
});
