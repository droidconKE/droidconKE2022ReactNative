import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { layoutProperties } from "../../constants/Properties";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";
import { sponser_types } from "../../constants/SponsorTypes";
import BrandLogo from "./BrandLogo";

const MOCK_DATA = {
	data: [
		{
			name: "Google",
			tagline: "just google",
			link: "https://www.google.com/",
			sponsor_type: "platinum",
			logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
			created_at: "2022-10-17 13:37:26",
		},
		{
			name: "Andela - 1",
			tagline: "Discover brilliant talent around the world",
			link: "https://andela.com/",
			sponsor_type: "gold",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq94i4KUPtkBIbK5wbGadB-rOyNlZpseLH7HhqKEaMri1-XK8UAKQPPcuPpffTcE4gww&usqp=CAU",
			created_at: "2022-10-17 13:37:26",
		},
		{
			name: "Andela - 2",
			tagline: "Discover brilliant talent around the world",
			link: "https://andela.com/",
			sponsor_type: "gold",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq94i4KUPtkBIbK5wbGadB-rOyNlZpseLH7HhqKEaMri1-XK8UAKQPPcuPpffTcE4gww&usqp=CAU",
			created_at: "2022-10-17 13:37:26",
		},
		{
			name: "JetBrains - 1",
			tagline: "Essential tools for software developers and teams",
			link: "https://www.jetbrains.com/",
			sponsor_type: "silver",
			logo: "https://download.logo.wine/logo/JetBrains/JetBrains-Logo.wine.png",
			created_at: "2022-10-17 13:37:26",
		},
		{
			name: "JetBrains - 2",
			tagline: "Essential tools for software developers and teams",
			link: "https://www.jetbrains.com/",
			sponsor_type: "silver",
			logo: "https://download.logo.wine/logo/JetBrains/JetBrains-Logo.wine.png",
			created_at: "2022-10-17 13:37:26",
		},
		{
			name: "JetBrains - 3",
			tagline: "Essential tools for software developers and teams",
			link: "https://www.jetbrains.com/",
			sponsor_type: "silver",
			logo: "https://download.logo.wine/logo/JetBrains/JetBrains-Logo.wine.png",
			created_at: "2022-10-17 13:37:26",
		},
		{
			name: "Hover - 1",
			tagline: "USSD for android devs",
			link: "https://www.usehover.com/",
			sponsor_type: "bronze",
			logo: "https://remoteworker-live-superbrnds.s3.amazonaws.com/uploads/company/logo/3625/logo.png",
			created_at: "2022-10-17 13:37:26",
		},
		{
			name: "Hover - 2",
			tagline: "USSD for android devs",
			link: "https://www.usehover.com/",
			sponsor_type: "bronze",
			logo: "https://remoteworker-live-superbrnds.s3.amazonaws.com/uploads/company/logo/3625/logo.png",
			created_at: "2022-10-17 13:37:26",
		},
		{
			name: "Hover - 3",
			tagline: "USSD for android devs",
			link: "https://www.usehover.com/",
			sponsor_type: "bronze",
			logo: "https://remoteworker-live-superbrnds.s3.amazonaws.com/uploads/company/logo/3625/logo.png",
			created_at: "2022-10-17 13:37:26",
		},
		{
			name: "Hover - 4",
			tagline: "USSD for android devs",
			link: "https://www.usehover.com/",
			sponsor_type: "bronze",
			logo: "https://remoteworker-live-superbrnds.s3.amazonaws.com/uploads/company/logo/3625/logo.png",
			created_at: "2022-10-17 13:37:26",
		},
	],
};

interface SponsorsData {
	name: string;
	tagline?: string;
	link?: string;
	sponsor_type: string;
	logo: string;
	created_at?: string;
}

const DroidconSponsors = () => {
	const [platinumSponsors, setPlatinumSponsors] = useState<SponsorsData[]>([]);
	const [goldSponsors, setGoldSponsors] = useState<SponsorsData[]>([]);
	const [silverSponsors, setSilverSponsors] = useState<SponsorsData[]>([]);
	const [bronzeSponsors, setBronzeSponsors] = useState<SponsorsData[]>([]);

	const loadSponsorsData = async () => {
		//TODO: obtain data from api service
		const data = MOCK_DATA.data;

		setPlatinumSponsors(
			data.filter((s) => s.sponsor_type === sponser_types.PLATINUM)
		);
		setGoldSponsors(data.filter((s) => s.sponsor_type === sponser_types.GOLD));
		setSilverSponsors(
			data.filter((s) => s.sponsor_type === sponser_types.SILVER)
		);
		setBronzeSponsors(
			data.filter((s) => s.sponsor_type === sponser_types.BRONZE)
		);
	};

	useEffect(() => {
		loadSponsorsData();
	}, []);

	return (
		<View style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}>
			<Text
				style={[styles.sponsorsContainerTitle, styles.marginVerticalSeparator]}
			>
				Sponsors
			</Text>
			<View style={[styles.sponsorsIconsContainer]}>
				{platinumSponsors.map((s) => (
					<BrandLogo
						logoUri={s.logo}
						key={s.name}
						imageStyles={styles.platinumLogo}
						imageContainerStyles={styles.logoContainer}
					/>
				))}
			</View>
			<View style={[styles.sponsorsIconsContainer]}>
				{goldSponsors.map((s) => (
					<BrandLogo
						logoUri={s.logo}
						key={s.name}
						imageStyles={styles.goldLogo}
						imageContainerStyles={styles.logoContainer}
					/>
				))}
			</View>
			<View style={[styles.sponsorsIconsContainer]}>
				{silverSponsors.map((s) => (
					<BrandLogo
						logoUri={s.logo}
						key={s.name}
						imageStyles={styles.silverLogo}
						imageContainerStyles={styles.logoContainer}
					/>
				))}
			</View>
			<View style={[styles.sponsorsIconsContainer]}>
				{bronzeSponsors.map((s) => (
					<BrandLogo
						logoUri={s.logo}
						key={s.name}
						imageStyles={styles.bronzeLogo}
						imageContainerStyles={styles.logoContainer}
					/>
				))}
			</View>
		</View>
	);
};

export default DroidconSponsors;

const styles = StyleSheet.create({
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
		...layoutProperties.justifyAround,
		flexWrap: "wrap",
	},
	marginVerticalSeparator2: {
		marginVertical: 18,
	},
	marginVerticalSeparator: {
		marginVertical: 15,
	},
	marginVerticalIcons: {
		marginVertical: 10,
	},
	platinumLogo: {
		width: 200,
		height: 100,
	},
	logoContainer: {
		marginVertical: 5,
	},
	goldLogo: {
		width: 125,
		height: 75,
	},
	silverLogo: {
		width: 90,
		height: 75,
	},
	bronzeLogo: {
		width: 60,
		height: 50,
	},
});
