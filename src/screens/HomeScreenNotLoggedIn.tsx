import React, { useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	Image,
	Modal,
	Dimensions,
} from "react-native";
import { fonts } from "../assets/fonts/fonts";
import GoogleIcon from "../assets/icons/GoogleIcon";
import PolygonIcon from "../assets/icons/PolygonIcon";
import DroidconOrganizers from "../components/layouts/DroidconOrganizers";
import MainHeader from "../components/layouts/MainHeader";
import { colors } from "../constants/Colors";
import { layoutProperties } from "../constants/Properties";

const HomeScreenNotLoggedIn = ({
	handleLogin,
}: {
	handleLogin: () => void;
}) => {
	const [modalVisible, setModalVisible] = useState(false);

	// Function to togle modal.
	const toggleModal = () => setModalVisible(!modalVisible);

	return (
		<SafeAreaView style={[styles.container, styles.paddingVertical]}>
			<StatusBar
				backgroundColor={
					modalVisible
						? colors.DROIDCONKE_MODAL_OVERLAY
						: colors.DROIDCONKE_WHITE
				}
				barStyle="dark-content"
			/>
			<MainHeader onPress={toggleModal} />
			<ScrollView
				showsVerticalScrollIndicator={false}
				// Show Sign In modal when scrolling momentum ends
				onMomentumScrollEnd={toggleModal}
				style={styles.paddingHorizontal}
			>
				<View style={[styles.marginVerticalSeparator]}>
					<Text style={styles.welcomeText}>
						Welcome to the largest Focused Android Developer community in
						Africa!
					</Text>
				</View>
				<View style={styles.marginVerticalSeparator}>
					<Image
						source={require("../assets/img/droidcon_ke_banner.png")}
						resizeMode="stretch"
						style={styles.droidcon_ke_banner}
					/>
				</View>
				<View style={[styles.cfpContainer, styles.marginVerticalSeparator2]}>
					<Image
						resizeMode="stretch"
						source={require("../assets/img/cloud_confetti.png")}
						style={styles.confetti}
					/>
					<View>
						<Text style={styles.cfpTitle}>Call for speakers</Text>
						<Text>Apply to be a speaker</Text>
					</View>
					<View>
						<PolygonIcon />
					</View>
				</View>
				<View
					style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}
				>
					<Text
						style={[
							styles.sponsorsContainerTitle,
							styles.marginVerticalSeparator,
						]}
					>
						Sponsors
					</Text>
					<View
						style={[
							styles.sponsorsIconsContainer,
							layoutProperties.justifyCenter,
						]}
					>
						<Image
							resizeMode="contain"
							source={require("../assets/img/google.png")}
							style={styles.marginVerticalIcons}
						/>
					</View>
					<View
						style={[
							styles.sponsorsIconsContainer,
							layoutProperties.justifyBetween,
							styles.marginVerticalSeparator,
						]}
					>
						<Image
							resizeMode="contain"
							source={require("../assets/img/andela_landscape_blue.png")}
						/>
						<Image
							resizeMode="contain"
							source={require("../assets/img/hover_logo.png")}
						/>
						<Image
							resizeMode="contain"
							source={require("../assets/img/jetbrains.png")}
						/>
					</View>
				</View>
				<DroidconOrganizers />
			</ScrollView>
			<Modal transparent visible={modalVisible}>
				<View style={styles.modalContainer}>
					<View style={styles.modalContentContainer}>
						<TouchableOpacity onPress={toggleModal}>
							<Text style={styles.textCancel}>CANCEL</Text>
						</TouchableOpacity>
						<View style={styles.googleBtnContainer}>
							<TouchableOpacity onPress={handleLogin} style={styles.googleBtn}>
								<GoogleIcon width={30} />
								<Text style={styles.googleBtnLabel}>Sign in with Google</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.DROIDCONKE_WHITE,
		flex: 1,
	},
	paddingVertical: {
		paddingVertical: 20,
	},
	paddingHorizontal: {
		paddingHorizontal: 20,
	},
	marginVerticalSeparator: {
		marginVertical: 15,
	},
	marginVerticalIcons: {
		marginVertical: 10,
	},
	droidcon_ke_banner: {
		width: Dimensions.get("screen").width - 40,
		height: 175,
	},
	confetti: {
		width: "35%",
		height: 65,
	},
	welcomeText: {
		fontFamily: fonts.MONTSERRAT_SEMIBOLD,
		fontSize: 16,
		lineHeight: 20,
		marginHorizontal: 3,
	},
	cfpContainer: {
		backgroundColor: colors.DROIDCONKE_GREEN,
		padding: 20,
		...layoutProperties.flexRow,
		...layoutProperties.justifyBetween,
		...layoutProperties.itemsCenter,
		borderRadius: 10,
	},
	marginBottomSeparator2: {
		marginBottom: 5,
	},
	marginVerticalSeparator2: {
		marginVertical: 18,
	},
	cfpTitle: {
		fontFamily: fonts.MONTSERRAT_BOLD,
		fontSize: 17,
		lineHeight: 20,
		color: colors.DROIDCONKE_WHITE,
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
	modalContainer: {
		flex: 1,
		backgroundColor: colors.DROIDCONKE_MODAL_OVERLAY,
		...layoutProperties.justifyCenter,
		...layoutProperties.itemsCenter,
	},
	modalContentContainer: {
		height: Dimensions.get("screen").height / 2.1,
		width: Dimensions.get("screen").width - 100,
		backgroundColor: colors.DROIDCONKE_WHITE,
		borderRadius: 14,
		elevation: 20,
		padding: 20,
	},
	textCancel: {
		fontFamily: fonts.MONTSERRAT_LIGHT,
		fontSize: 13,
		lineHeight: 16,
		color: colors.DROIDCONKE_DARK_GREY,
		textAlign: "right",
	},
	googleBtnContainer: {
		flex: 1,
		...layoutProperties.justifyCenter,
		...layoutProperties.itemsCenter,
	},
	googleBtn: {
		width: "75%",
		paddingHorizontal: 10,
		...layoutProperties.flexRow,
		...layoutProperties.itemsCenter,
		...layoutProperties.justifyEvenly,
		borderColor: colors.DROIDCONKE_BLACK_GOOGLESIGNIN_TRANSLUCENT,
		borderRadius: 7,
		borderWidth: 2,
	},
	googleBtnLabel: {
		fontFamily: fonts.ROBOTO_MEDIUM,
		fontSize: 14,
		lineHeight: 19,
		color: colors.DROIDCONKE_BLACK_GOOGLESIGNIN,
	},
});
export default HomeScreenNotLoggedIn;
