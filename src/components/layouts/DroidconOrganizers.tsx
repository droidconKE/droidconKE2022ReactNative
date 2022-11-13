import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { layoutProperties } from "../../constants/Properties";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";
import BrandLogo from "./BrandLogo";
import { useLazyGetOrganizersQuery } from "../../services/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedRedux";
import { setOrganizers } from "../../state/organizers";
import { OrganizerType } from "../../types/Organizer";

const DroidconOrganizers = () => {

	// Redux dispatch.
	const dispatch = useAppDispatch();

	const { sponsors } = useAppSelector(state => state);

	const { data } = useAppSelector((state) => state.organizers);

	const [trigger, { data: organizersData, error: getOrganizersError, isLoading: getOrganizersIsLoading, isSuccess: getOrganizersIsSuccess, isError: getOrganizersIsError}] = useLazyGetOrganizersQuery()

	useEffect(() => {
		if(sponsors?.data?.length !== 0) {
			// Trigger fetch organizers query.
			trigger();
		}
	},[sponsors])

	useEffect(() => {
		//TODO: obtain data/response from the api service
		//set data
		console.log({ organizersData, getOrganizersError, getOrganizersIsLoading, getOrganizersIsSuccess, getOrganizersIsError })

		if(getOrganizersIsSuccess && !getOrganizersIsLoading && organizersData) {
			dispatch(setOrganizers(organizersData))
		}

	},[ organizersData, getOrganizersError, getOrganizersIsLoading, getOrganizersIsSuccess, getOrganizersIsError ])

	const companyOrganizers = data?.filter(organizerItem => organizerItem.type !== OrganizerType.individual)

	return (
		<View style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}>
			<Text
				style={[styles.sponsorsContainerTitle, styles.marginVerticalSeparator]}
			>
				Organized by :
			</Text>
			<View
				style={[styles.sponsorsIconsContainer, styles.marginVerticalSeparator]}
			>
				{companyOrganizers?.map((brand) => (
					<BrandLogo logoUri={brand.photo} key={brand.name} brandUri={brand.link}/>
				))}
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
		flexWrap: "wrap",
		justifyContent: "space-around",
	},
	marginVerticalSeparator: {
		marginVertical: 15,
	},
});

