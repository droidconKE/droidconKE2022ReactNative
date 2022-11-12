import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { layoutProperties } from "../../constants/Properties";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";
import BrandLogo from "./BrandLogo";
import { useGetOrganizersQuery } from "../../services/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedRedux";
import { setOrganizers } from "../../state/organizers";
import { OrganizerType } from "../../types/Organizer";

const MOCK_DATA = {
	data: [
		{
			id: 1,
			name: "android 254",
			email: "droidconke@gmail.com",
			description: "droidcon Ke",
			facebook: "droidconke",
			twitter: "droidcon.co.ke",
			instagram: "droidcon.co.ke",
			logo: "https://secure.meetupstatic.com/photos/event/b/c/1/1/clean_482388145.jpeg",
			slug: "droidcon-ke-645",
			status: "active",
			created_at: "2021-09-10 16:26:32",
			upcoming_events_count: 1,
			total_events_count: 1,
		},
		{
			id: 2,
			name: "kotlin kenya",
			email: "droidconke@gmail.com",
			description: "droidcon Ke",
			facebook: "droidconke",
			twitter: "droidcon.co.ke",
			instagram: "droidcon.co.ke",
			logo: "https://res.cloudinary.com/droidconke/image/upload/v1631955399/prod/upload/org_team/dpkitydnkbbih6n9ktoz.png",
			slug: "droidcon-ke-645",
			status: "active",
			created_at: "2021-09-10 16:26:32",
			upcoming_events_count: 1,
			total_events_count: 1,
		},
		{
			id: 3,
			name: "flutter kenya",
			email: "droidconke@gmail.com",
			description: "droidcon Ke",
			facebook: "droidconke",
			twitter: "droidcon.co.ke",
			instagram: "droidcon.co.ke",
			logo: "https://secure.meetupstatic.com/photos/event/8/d/7/4/clean_489516212.jpeg",
			slug: "droidcon-ke-645",
			status: "active",
			created_at: "2021-09-10 16:26:32",
			upcoming_events_count: 1,
			total_events_count: 1,
		},
		{
			id: 4,
			name: "app labs",
			email: "droidconke@gmail.com",
			description: "droidcon Ke",
			facebook: "droidconke",
			twitter: "droidcon.co.ke",
			instagram: "droidcon.co.ke",
			logo: "https://appslab.co.ke/assets/img/logo.png",
			slug: "droidcon-ke-645",
			status: "active",
			created_at: "2021-09-10 16:26:32",
			upcoming_events_count: 1,
			total_events_count: 1,
		},
		{
			id: 5,
			name: "early camp",
			email: "droidconke@gmail.com",
			description: "droidcon Ke",
			facebook: "droidconke",
			twitter: "droidcon.co.ke",
			instagram: "droidcon.co.ke",
			logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFbXBKf5A1wxQ/company-logo_200_200/0/1533933103212?e=2147483647&v=beta&t=BIObWjP27BUIyzN5H9finiwLhwSlrlKc5fEcvTiki4s",
			slug: "droidcon-ke-645",
			status: "active",
			created_at: "2021-09-10 16:26:32",
			upcoming_events_count: 1,
			total_events_count: 1,
		},
		{
			id: 6,
			name: "tiskos kenya",
			email: "droidconke@gmail.com",
			description: "droidcon Ke",
			facebook: "droidconke",
			twitter: "droidcon.co.ke",
			instagram: "droidcon.co.ke",
			logo: "https://pbs.twimg.com/profile_images/1297998197630087169/zvpGWoVq_400x400.jpg",
			slug: "droidcon-ke-645",
			status: "active",
			created_at: "2021-09-10 16:26:32",
			upcoming_events_count: 1,
			total_events_count: 1,
		},
	],
};

interface OrganizersData {
	id: number;
	name: string;
	email?: string;
	description?: string;
	facebook?: string;
	twitter?: string;
	instagram?: string;
	logo: string;
	slug?: string;
	status?: string;
	created_at?: string;
	upcoming_events_count?: number;
	total_events_count?: number;
}

const DroidconOrganizers = () => {

	// Redux dispatch.
	const dispatch = useAppDispatch();

	const { schedule } = useAppSelector((state) => state.schedule);

	const { data } = useAppSelector((state) => state.organizers);
	
	const { data: organizersData, error: getOrganizersError, isLoading: getOrganizersIsLoading, isSuccess: getOrganizersIsSuccess, isError: getOrganizersIsError} = useGetOrganizersQuery({skip: schedule !== undefined})

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
					<BrandLogo logoUri={brand.photo} key={brand.name} />
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

