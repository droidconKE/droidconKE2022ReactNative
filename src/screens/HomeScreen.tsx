import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
	Dimensions,
	FlatList,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { colors } from "../constants/Colors";
import { fonts } from "../assets/fonts/fonts";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedRedux";
import SessionCard from "../components/cards/SessionCard";
import SpeakerImageCard from "../components/cards/SpeakerImageCard";
import { ResizeMode, Video } from "expo-av";
import { useRef } from "react";
import { useState } from "react";
import VolumeUp from "../assets/icons/VolumeUp";
import VolumeOff from "../assets/icons/VolumeOff";
import { layoutProperties } from "../constants/Properties";
import MainHeader from "../components/layouts/MainHeader";
import DroidconOrganizers from "../components/layouts/DroidconOrganizers";
import { useGetScheduleQuery } from "../services/auth";
import Session from "../types/Session";
import { setSchedule } from "../state/schedule";
import { DateToggleListProps } from "../components/dateToggle/DateToggleList";
import DroidconSponsors from "../components/layouts/DroidconSponsors";
import { ScreenTitle } from "./BioScreen";
import Speaker from "../types/Speaker";
import Shimmer from "../components/shimmer";
import SessionCardShimmer from "../components/shimmer/SessionCardShimmer";
import SpeakerImageCardShimmer from "../components/shimmer/SpeakerImageCardShimmer";

const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
	// Video ref.
	const video = useRef(null);

	// Mute status.
	const [isVideoMute, setIsVideoMute] = useState(true);

	// Redux dispatch.
	const dispatch = useAppDispatch();

	const { schedule } = useAppSelector((state) => state.schedule);

	const {
		data: scheduleData,
		error: scheduleError,
		isLoading: scheduleIsLoading,
		isSuccess: scheduleIsSuccess,
		isError: scheduleIsError,
	} = useGetScheduleQuery();

	const [dates, setDates] =
		useState<Pick<DateToggleListProps, "items"> | undefined>();
	const [sessions, setSessions] = useState<{ items: Session[] } | undefined>();
	const [selectedDate, setSelectedDate] = useState<string | undefined>();

	useEffect(() => {
		//dispatch(removeUser())
		if (scheduleIsSuccess && !scheduleIsLoading && scheduleData) {
			dispatch(setSchedule(scheduleData));
		}
	}, [
		scheduleData,
		scheduleError,
		scheduleIsLoading,
		scheduleIsSuccess,
		scheduleError,
		scheduleIsError,
	]);

	useEffect(() => {
		extractDatesFromSchedule();
	}, [schedule, selectedDate]);

	useEffect(() => {
		if (selectedDate && schedule) {
			setSessions({ items: schedule.data[selectedDate] });
		}
	}, [selectedDate]);

	function extractDatesFromSchedule() {
		if (schedule) {
			const keys = Object.keys(schedule.data);
			const dates = keys.map((key, index) => {
				return {
					date: `${new Date(key).getDate()}th`,
					day: `Day ${index + 1}`,
					fullDate: key,
					selected: key === selectedDate,
				};
			});
			setDates({ items: dates });
			if (!selectedDate) {
				setSelectedDate(keys[0]);
			}
		}
	}

	// Function to navigate to Speakers screen.
	const goToSpeakersScreen = () => navigation.navigate(screen_names.SPEAKERS);

	// function to toggle mute status
	const toggleMute = () => setIsVideoMute(!isVideoMute);

	// Function to navigate to Single Speaker screen.
	const goToSingleSpeakerScreen = (item: Speaker) => {
		const ScreenBio = {
			screenTitle: ScreenTitle.Speaker,
			id: item.name,
			title: item.tagline,
			img: item.avatar,
			name: item.name,
			occupation: item.tagline,
			skills: [],
			content: item.biography,
			twitterHandle: item.twitter,
		};
		navigation.navigate(screen_names.BIO, { bioData: ScreenBio });
	};

	// Function to navigate to Sessions screen
	const goToSessionsScreen = () => navigation.navigate(screen_names.SESSIONS);

	return (
		<SafeAreaView style={[styles.container, styles.paddingVertical]}>
			<StatusBar
				backgroundColor={colors.DROIDCONKE_WHITE}
				barStyle="dark-content"
			/>
			<MainHeader />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={[styles.paddingHorizontal]}>
					<Video
						ref={video}
						source={{
							uri: "https://droidcon.co.ke/video/DroidconKe_2019_Highlight_Reel_HD.mp4",
						}}
						isLooping
						resizeMode={ResizeMode.COVER}
						style={styles.droidconkeVideo}
						shouldPlay
						isMuted={isVideoMute}
					/>

					<TouchableOpacity onPress={toggleMute} style={styles.volumeControl}>
						{isVideoMute ? (
							<VolumeUp fill={colors.DROIDCONKE_WHITE} />
						) : (
							<VolumeOff fill={colors.DROIDCONKE_WHITE} />
						)}
					</TouchableOpacity>
				</View>
				<View>
					<View
						style={[
							layoutProperties.flexRow,
							layoutProperties.justifyBetween,
							layoutProperties.itemsCenter,
							styles.marginSessionRow,
							styles.paddingHorizontal,
						]}
					>
						<Text style={styles.sponsorsContainerTitle}>Sessions</Text>
						<TouchableOpacity
							style={[
								layoutProperties.flexRow,
								layoutProperties.justifyBetween,
								layoutProperties.itemsCenter,
							]}
							onPress={goToSessionsScreen}
							disabled={scheduleIsLoading === true}
						>
							<Text style={styles.link}>View All</Text>
							{scheduleIsLoading ? (
								<>
									<Shimmer wrapperStyle={styles.tallyContainerShimmering} />
								</>
							) : (
								<View style={styles.tallyContainer}>
									<Text style={styles.tallyText}>
										+{sessions?.items?.length - 4}
									</Text>
								</View>
							)}
						</TouchableOpacity>
					</View>
					{scheduleIsLoading ? (
						<>
							<FlatList
								data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
								renderItem={(item) => <SessionCardShimmer />}
								horizontal
								contentContainerStyle={
									styles.sessionFlatListContentContainerStyle
								}
							/>
						</>
					) : (
						<>
							<FlatList
								data={sessions?.items}
								renderItem={({ item }: { item: Session }) => (
									<SessionCard
										item={item}
										disabled={item.speakers.length < 1}
										onPress={() =>
											navigation.navigate(screen_names.SESSION_DETAILS, {
												sessionData: item,
											})
										}
									/>
								)}
								keyExtractor={(item: Session) => item?.slug}
								horizontal
								contentContainerStyle={
									styles.sessionFlatListContentContainerStyle
								}
							/>
						</>
					)}
				</View>
				<View>
					<View
						style={[
							layoutProperties.flexRow,
							layoutProperties.justifyBetween,
							layoutProperties.itemsCenter,
							styles.marginSpeakerRow,
							styles.paddingHorizontal,
						]}
					>
						<Text style={styles.sponsorsContainerTitle}>Speakers</Text>
						<TouchableOpacity
							style={[
								layoutProperties.flexRow,
								layoutProperties.justifyBetween,
								layoutProperties.itemsCenter,
							]}
							onPress={() => goToSpeakersScreen()}
							disabled={scheduleIsLoading === true}
						>
							<Text style={styles.link}>View All</Text>
							{scheduleIsLoading ? (
								<>
									<Shimmer wrapperStyle={styles.tallyContainerShimmering} />
								</>
							) : (
								<View style={styles.tallyContainer}>
									<Text style={styles.tallyText}>
										+{sessions?.items?.length - 4}
									</Text>
								</View>
							)}
						</TouchableOpacity>
					</View>
					<View
						style={[
							layoutProperties.flexRow,
							styles.paddingHorizontal,
							layoutProperties.justifyEvenly,
							styles.marginRowOffset,
						]}
					>
						{scheduleIsLoading ? (
							<>
								{[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },].map((item) => {
									return (
										<SpeakerImageCardShimmer/>
										)
								})}
							</>
						) : (
							<>
								{sessions?.items.slice(0, 4).map((item: Session) => {
									return (
										<>
											{item.speakers.map((speaker) => (
												<SpeakerImageCard
													item={speaker}
													onPress={goToSingleSpeakerScreen}
												/>
											))}
										</>
									);
								})}
							</>
						)}
					</View>
				</View>
				<View style={styles.paddingHorizontal}>
					<DroidconSponsors />
					<DroidconOrganizers />
				</View>
			</ScrollView>
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
	welcomeText: {
		fontFamily: fonts.MONTSERRAT_SEMIBOLD,
		fontSize: 16,
		lineHeight: 20,
	},
	marginVerticalVideo: {
		marginVertical: 15,
	},
	marginBottomSeparator: {
		marginBottom: 10,
	},
	marginBottomSeparator2: {
		marginBottom: 5,
	},
	droidconkeBanner: {
		width: Dimensions.get("screen").width - 40,
		height: 175,
	},
	cfpConfetti: {
		width: "35%",
		height: 65,
	},
	cfpContainer: {
		backgroundColor: colors.DROIDCONKE_GREEN,
		padding: 20,
		...layoutProperties.flexRow,
		...layoutProperties.justifyBetween,
		...layoutProperties.itemsCenter,
		borderRadius: 10,
	},
	cfpTitle: {
		fontFamily: fonts.MONTSERRAT_BOLD,
		fontSize: 17,
		lineHeight: 20,
		color: colors.DROIDCONKE_WHITE,
	},
	cfpContent: {
		fontFamily: fonts.MONTSERRAT_REGULAR,
		fontSize: 10,
		lineHeight: 20,
		color: colors.DROIDCONKE_BLACK,
	},
	sponsorsContainerTitle: {
		fontFamily: fonts.MONTSERRAT_BOLD,
		fontSize: 18,
		lineHeight: 20,
		color: colors.DROIDCONKE_BLUE,
		textAlign: "center",
	},
	link: {
		color: colors.DROIDCONKE_BLUE,
		fontFamily: fonts.MONTSERRAT_MEDIUM,
		fontSize: 12,
		marginRight: 10,
	},
	tallyContainer: {
		backgroundColor: colors.DROIDCONKE_BLUE_TRANSLUCENT,
		borderRadius: 11,
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	tallyContainerShimmering: {
		width: 40,
		height: 30,
		borderRadius: 11,
	},
	tallyText: {
		color: colors.DROIDCONKE_BLUE,
		fontFamily: fonts.MONTSERRAT_REGULAR,
		fontSize: 10,
	},
	droidconkeVideo: {
		width: Dimensions.get("screen").width - 40,
		height: Dimensions.get("screen").height / 4.5,
		marginVertical: 20,
		borderRadius: 10,
		backgroundColor: colors.DROIDCONKE_BLUE_TRANSLUCENT,
	},
	volumeControl: {
		position: "absolute",
		top: 44,
		right: 40,
		backgroundColor: colors.DROIDCONKE_BLACK_TRANSLUCENT,
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	marginSessionRow: {
		marginTop: 15,
		marginBottom: 35,
	},
	marginSpeakerRow: {
		marginTop: 35,
		marginBottom: 30,
	},
	sessionFlatListContentContainerStyle: {
		paddingLeft: 20,
	},
	marginRowOffset: {
		marginHorizontal: -20,
	},
});

export default HomeScreen;
