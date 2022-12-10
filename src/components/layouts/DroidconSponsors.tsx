import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { layoutProperties } from "../../constants/Properties";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";
import { sponser_types } from "../../constants/SponsorTypes";
import BrandLogo from "./BrandLogo";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedRedux";
import { useLazyGetSponsorsQuery } from "../../services/auth";
import { setSponsors } from "../../state/sponsors";


const DroidconSponsors = () => {
	
	// Redux dispatch.
	const dispatch =  useAppDispatch();
	const { user } = useAppSelector((state) => state.user)
	const { schedule } = useAppSelector((state) => state.schedule);

	const { data } = useAppSelector((state) => state.sponsors)

	const [trigger, {data : sponsorsData, error: getSponsorsError, isLoading: getSponsorsIsLoading, isSuccess: getSponsorsIsSuccess, isError: getSponsorsIsError}] = useLazyGetSponsorsQuery()

	useEffect(() => {
		if( user === null) {
			trigger()
		} else {

			if(schedule !== undefined) {
				// Trigger fetch sponsors query.
				trigger();
			}

		}
	},[user, schedule])

	useEffect(() => {
		//TODO: obtain data from api service

		if(getSponsorsIsSuccess && !getSponsorsIsLoading && sponsorsData) {
			dispatch(setSponsors(sponsorsData))
		}

	},[data, getSponsorsError, getSponsorsIsLoading, getSponsorsIsSuccess, getSponsorsIsError])

	const platinumSponsors = data?.filter((s) => s.sponsor_type === sponser_types.PLATINUM);
	const goldSponsors = data?.filter((s) => s.sponsor_type === sponser_types.GOLD);
	const silverSponsors = data?.filter((s) => s.sponsor_type === sponser_types.SILVER);
	const bronzeSponsors = data?.filter((s) => s.sponsor_type === sponser_types.BRONZE)
	return (
		<View style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}>
			<Text
				style={[styles.sponsorsContainerTitle, styles.marginVerticalSeparator]}
			>
				Sponsors
			</Text>
			<View style={[styles.sponsorsIconsContainer]}>
				{platinumSponsors?.map((s) => (
					<BrandLogo
						logoUri={s.logo}
						key={s.name}
						imageStyles={styles.platinumLogo}
						imageContainerStyles={styles.logoContainer}
						brandUri={s.link}
					/>
				))}
			</View>
			<View style={[styles.sponsorsIconsContainer]}>
				{goldSponsors?.map((s) => (
					<BrandLogo
						logoUri={s.logo}
						key={s.name}
						imageStyles={styles.goldLogo}
						imageContainerStyles={styles.logoContainer}
						brandUri={s.link}
					/>
				))}
			</View>
			<View style={[styles.sponsorsIconsContainer]}>
				{silverSponsors?.map((s) => (
					<BrandLogo
						logoUri={s.logo}
						key={s.name}
						imageStyles={styles.silverLogo}
						imageContainerStyles={styles.logoContainer}
						brandUri={s.link}
					/>
				))}
			</View>
			<View style={[styles.sponsorsIconsContainer]}>
				{bronzeSponsors?.map((s) => (
					<BrandLogo
						logoUri={s.logo}
						key={s.name}
						imageStyles={styles.bronzeLogo}
						imageContainerStyles={styles.logoContainer}
						brandUri={s.link}
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
