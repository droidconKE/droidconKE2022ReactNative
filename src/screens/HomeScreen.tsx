import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
	Dimensions,
	FlatList,
	Image,
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
import { setUser, saveUser, removeUser} from "../state/user";
import SessionCard from "../components/cards/SessionCard";
import { MOCK_DATA_SPEAKERS } from "./SpeakersScreen";
import SpeakerImageCard from "../components/cards/SpeakerImageCard";
import { ResizeMode, Video } from "expo-av";
import { useRef } from "react";
import { useState } from "react";
import VolumeUp from "../assets/icons/VolumeUp";
import VolumeOff from "../assets/icons/VolumeOff";
import HomeScreenNotLoggedIn from "./HomeScreenNotLoggedIn";
import { layoutProperties } from "../constants/Properties";
import MainHeader from "../components/layouts/MainHeader";
import * as Google from 'expo-auth-session/providers/google';
import {GOOGLE_AUTH_CLIENT_ID} from '@env';
import DroidconOrganizers from "../components/layouts/DroidconOrganizers";
import { useGetScheduleQuery, useGoogleSocialAuthMutation } from "../services/auth";
import Session from "../types/Session";
import { setSchedule } from "../state/schedule";
import { DateToggleListProps } from "../components/dateToggle/DateToggleList";
import { setSpeakers } from "../state/speakers";


const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
	// Video ref.
	const video = useRef(null);

	// Mute status.
	const [isVideoMute, setIsVideoMute] = useState(true);

	// Redux dispatch.
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.user);

	const { schedule } = useAppSelector((state) => state.schedule);

	const [googleSocialAuth, { data, error, isLoading, isSuccess, isError,}] = useGoogleSocialAuthMutation();

	const { data: scheduleData, error: scheduleError, isLoading: scheduleIsLoading, isSuccess: scheduleIsSuccess, isError: scheduleIsError} = useGetScheduleQuery({skip: user === null})
	
	const [dates, setDates] =
	  useState<Pick<DateToggleListProps, "items"> | undefined>();
	const [sessions, setSessions] = useState<{ items: Session[] } | undefined>();
	const [selectedDate, setSelectedDate] = useState<string | undefined>();
	
	// Login helper function.
	const login = (token: string) => {
		googleSocialAuth({access_token: token})
	}

	// Following authentication guide from https://docs.expo.dev/guides/authentication/#google
	const [request, response, promptAsync] = Google.useAuthRequest({

		expoClientId: GOOGLE_AUTH_CLIENT_ID,
		iosClientId: GOOGLE_AUTH_CLIENT_ID,
		androidClientId: GOOGLE_AUTH_CLIENT_ID,
		webClientId: GOOGLE_AUTH_CLIENT_ID,		
	})

	useEffect(() => {
		if (response?.type === 'success') {
		  const { authentication } = response;
		  // Token.
		  login(authentication?.accessToken as string)
		} else {

			console.log(response)
		}
	  }, [response]);

	  useEffect(() => {
		//dispatch(removeUser())
		if (isSuccess && !isLoading && data) {
		  // user logged in successfully
		  const { token, user } = data;
		  dispatch(setUser({ user: user, token: token }));
		  dispatch(saveUser({ user: user, token: token }));
		  
		}
	
		if (isError && !isLoading && error) {
		  // show some error here
		  console.log({ error });
		  if (error?.status === 422) {
			// something is wrong with our data
			// eg. {"message":"The given data was invalid.","errors":{"access_token":["The access token field is required."]}}
			// show an error to the user and log the error
			console.log({ data: error?.data });
		  }
		}
		// something really bad or we do not know what happened. show some error
	  }, [data, error, isLoading, isSuccess, isError]);
	
	useEffect(() => {
		if(scheduleIsSuccess && !scheduleIsLoading && scheduleData) {
			dispatch(setSchedule(scheduleData))
		}

	},[scheduleData, scheduleError, scheduleIsLoading, scheduleIsSuccess, scheduleError, scheduleIsError])

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

	if (!user) {
		return <HomeScreenNotLoggedIn handleLogin={() => promptAsync()} />;
	}

	// Function to navigate to Speakers screen.
	const goToSpeakersScreen = () => navigation.navigate(screen_names.SPEAKERS);

	// function to toggle mute status
	const toggleMute = () => setIsVideoMute(!isVideoMute);

	// Function to navigate to Single Speaker screen.
	const goToSingleSpeakerScreen = () => navigation.navigate(screen_names.BIO);

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
						source={require("../assets/video/video_2022-09-29_22-16-14.mp4")}
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
						>
							<Text style={styles.link}>View All</Text>
							<View style={styles.tallyContainer}>
								<Text style={styles.tallyText}>+ {sessions?.items?.length - 1}</Text>
							</View>
						</TouchableOpacity>
					</View>
					<FlatList
						data={sessions?.items}
						renderItem={({item} : {item: Session}) => (
							<SessionCard
								item={item}
								onPress={() => console.log("pressed")}
							/>
						)}
						keyExtractor={(item: Session) => item?.slug}
						horizontal
						contentContainerStyle={styles.sessionFlatListContentContainerStyle}
					/>
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
						>
							<Text style={styles.link}>View All</Text>
							<View style={styles.tallyContainer}>
								<Text style={styles.tallyText}>+{sessions?.items?.length - 4}</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View
						style={[
							layoutProperties.flexRow,
							styles.paddingHorizontal,
							layoutProperties.justifyEvenly,
							styles.marginRowOffset
						]}
					>
						{sessions?.items.slice(0,4).map((item : Session) => {
							return(
								<>
								{item.speakers.map(speaker => (
									<SpeakerImageCard
										item={speaker}
										onPress={goToSingleSpeakerScreen}
									/>

								))}
								</>
							)
						})}
					</View>
				</View>
				<View style={styles.paddingHorizontal}>
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
	marginVerticalSeparator: {
		marginVertical: 15,
	},
	marginVerticalSeparator2: {
		marginVertical: 18,
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
	marginVerticalIcons: {
		marginVertical: 10,
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
		flexDirection: "row",
		...layoutProperties.itemsCenter,
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
	}
});

export default HomeScreen;
