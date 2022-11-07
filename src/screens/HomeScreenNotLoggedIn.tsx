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
import DroidconSponsors from "../components/layouts/DroidconSponsors";
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
	const openModal = () => setModalVisible(true);
	const closeModal = () => setModalVisible(false);

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
			<MainHeader onPress={openModal} />
			<ScrollView
				showsVerticalScrollIndicator={false}
				// Show Sign In modal when scrolling momentum ends
				onMomentumScrollEnd={openModal}
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
				<DroidconSponsors />
				<DroidconOrganizers />
			</ScrollView>
			<Modal transparent visible={modalVisible}>
				<View style={styles.modalContainer}>
					<View style={styles.modalContentContainer}>
						<TouchableOpacity onPress={closeModal}>
							<Text style={styles.textCancel}>CANCEL</Text>
						</TouchableOpacity>
						<View style={styles.googleBtnContainer}>
							<TouchableOpacity onPress={handleLogin} style={styles.googleBtn}>
								<GoogleIcon width={25} />
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
		width: 208,
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
		color: colors.DROIDCONKE_BLACK_TEXT_AND_LABEL,
		marginHorizontal: 5,
	},
});
export default HomeScreenNotLoggedIn;
