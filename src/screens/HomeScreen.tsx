import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
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
import { setUser } from "../state/user";
import SessionCard, { SessionCardProps } from "../components/cards/SessionCard";
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
import DroidconOrganizers from "../components/layouts/DroidconOrganizers";
import { useGoogleSocialAuthMutation } from "../services/auth";

//Mock data ... to be removed when we add code to fetch the actual data
const placeholder: ImageSourcePropType = require("../assets/img/sessions.png");

const MOCK_DATA_SESSIONS = [
  {
    id: "1",
    poster: placeholder,
    title: "Transforming Famers Lives Using Android in Kenya",
    time: "10:30",
    venue: "Room 1",
  },
  {
    id: "2",
    poster: placeholder,
    title: "Compose Beyond Material Design",
    time: "10:30",
    venue: "Room 1",
  },
  {
    id: "3",
    poster: placeholder,
    title: "Transforming Famers Lives Using Android in Kenya",
    time: "10:30",
    venue: "Room 1",
  },
  {
    id: "4",
    poster: placeholder,
    title: "Compose Beyond Material Design",
    time: "10:30",
    venue: "Room 1",
  },
  {
    id: "5",
    poster: placeholder,
    title: "Transforming Famers Lives Using Android in Kenya",
    time: "10:30",
    venue: "Room 1",
  },
  {
    id: "6",
    poster: placeholder,
    title: "Compose Beyond Material Design",
    time: "10:30",
    venue: "Room 1",
  },
];

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
  const [googleSocialAuth, { data, error, isLoading, isSuccess, isError }] =
    useGoogleSocialAuthMutation();

  const login = () => {
    googleSocialAuth({
      access_token: "",
    });
  };

  useEffect(() => {
    console.log({ data, error, isLoading, isSuccess, isError });

    if (isSuccess && !isLoading && data) {
      // user logged in successfully
      const { token, user } = data;
      dispatch(setUser({ user: user, token: token }));
    }

    if (isError && !isLoading && error) {
      // show some error here
      console.log({ error });
      if (error.status === 422) {
        // something is wrong with our data
        // eg. {"message":"The given data was invalid.","errors":{"access_token":["The access token field is required."]}}
        // show an error to the user and log the error
        console.log({ data: error.data });
      }
    }
    // something really bad or we do not know what happened. show some error
  }, [data, error, isLoading, isSuccess, isError]);

  if (!user) {
    return (
      <HomeScreenNotLoggedIn handleLogin={login} isLoggingIn={isLoading} />
    );
  }

  // Function to navigate to Speakers screen.
  const goToSpeakersScreen = () => navigation.navigate(screen_names.SPEAKERS);

  // function to toggle mute status
  const toggleMute = () => setIsVideoMute(!isVideoMute);

  // Function to navigate to Single Speaker screen.
  const goToSingleSpeakerScreen = () => navigation.navigate(screen_names.BIO);

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
            >
              <Text style={styles.link}>View All</Text>
              <View style={styles.tallyContainer}>
                <Text style={styles.tallyText}>+45</Text>
              </View>
            </TouchableOpacity>
          </View>
          <FlatList
            data={MOCK_DATA_SESSIONS}
            renderItem={({ item }) => (
              <SessionCard
                id={item.id}
                poster={item.poster}
                title={item.title}
                time={item.time}
                venue={item.venue}
                onPress={() => console.log("pressed")}
              />
            )}
            keyExtractor={(item: SessionCardProps) => item.id}
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
                <Text style={styles.tallyText}>+45</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              layoutProperties.flexRow,
              styles.paddingHorizontal,
              layoutProperties.justifyStart,
            ]}
          >
            {MOCK_DATA_SPEAKERS.slice(0, 4).map((item) => (
              <SpeakerImageCard
                key={item.id}
                id={item.id}
                ProfilePicture={item.ProfilePicture}
                SpeakersName={item.SpeakersName}
                onPress={goToSingleSpeakerScreen}
              />
            ))}
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
});

export default HomeScreen;
