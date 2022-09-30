import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Dimensions, FlatList, Image, ImageSourcePropType, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { colors } from '../constants/Colors';
import LockIcon from '../assets/icons/LockIcon';
import { fonts } from '../assets/fonts/fonts';
import Android254Icon from '../assets/icons/Android254Icon';
import AppsLabIcon from '../assets/icons/AppsLabIcon';
import TiskosIcon from '../assets/icons/TiskosIcon';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedRedux';
import { setUser } from '../state/user';
import SessionCard, { SessionCardProps } from '../components/cards/SessionCard';
import { MOCK_DATA_SPEAKERS } from './SpeakersScreen';
import SpeakerImageCard from '../components/cards/SpeakerImageCard';
import DroidconKeIcon from '../assets/icons/DroidconKeIcon';
import { ResizeMode, Video } from 'expo-av';
import { useRef } from 'react';
import { useState } from 'react';
import VolumeUp from '../assets/icons/VolumeUp';
import VolumeOff from '../assets/icons/VolumeOff';

//Mock data ... to be removed when we add code to fetch the actual data
const placeholder : ImageSourcePropType = require("../assets/img/sessions.png")

    const MOCK_DATA_SESSIONS = [
        {
            id: '1',
            poster: placeholder,
            title: 'Transforming Famers Lives Using Android in Kenya',
            time: '10:30',
            venue: 'Room 1'
        },
        {
            id: '2',
            poster: placeholder,
            title: 'Compose Beyond Material Design',
            time: '10:30',
            venue: 'Room 1'
        },
        {
            id: '3',
            poster: placeholder,
            title: 'Transforming Famers Lives Using Android in Kenya',
            time: '10:30',
            venue: 'Room 1'
        },
        {
            id: '4',
            poster: placeholder,
            title: 'Compose Beyond Material Design',
            time: '10:30',
            venue: 'Room 1'
        },
        {
            id: '5',
            poster: placeholder,
            title: 'Transforming Famers Lives Using Android in Kenya',
            time: '10:30',
            venue: 'Room 1'
        },
        {
            id: '6',
            poster: placeholder,
            title: 'Compose Beyond Material Design',
            time: '10:30',
            venue: 'Room 1'
        },
    ]
const HomeNotLoggedIn = ({handleLogin} : {handleLogin: () => void}) => {
    return (
        <SafeAreaView style={[styles.container, styles.paddingVertical, styles.paddingHorizontal]}>
        <StatusBar backgroundColor={colors.DROIDCONKE_WHITE} barStyle='dark-content'/>
            <View style={[styles.header, styles.marginBottomSeparator]}>
                <DroidconKeIcon width={150} style={styles.droidconkeIcon}/>
                <TouchableOpacity style={styles.iconWrapper} onPress={handleLogin}>
                    <LockIcon/>
                </TouchableOpacity>
            </View>
            <View style={styles.marginVerticalSeparator}>
                <Text style={styles.welcomeText}>Welcome to the largest Focused Android Developer community in Africa!</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.marginVerticalSeparator}>
                    <Image source={require('../assets/img/droidconkebanner.png')} resizeMode="stretch" style={styles.droidconkeBanner}/>
                </View>
                <View style={[styles.cfpContainer, styles.marginVerticalSeparator2]}>
                    <Image resizeMode='stretch' source={require('../assets/img/cfpconfetti.png')} style={styles.cfpConfetti}/>
                    <View>
                        <Text style={styles.cfpTitle}>Call for speakers</Text>
                        <Text>Apply to be a speaker</Text>
                    </View>
                    <View>
                        <Text>▶</Text>
                    </View>
                </View>
                <View style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}>
                    <Text style={[styles.sponsorsContainerTitle, styles.marginVerticalSeparator]}>Sponsors</Text>
                    <View style={[styles.sponsorsIconsContainer, styles.justifyCenter]}>
                        <Image resizeMode='contain' source={require('../assets/img/1920px-Google_2015_logo.svg.png')} style={styles.marginVerticalIcons}/>
                    </View>
                    <View style={[styles.sponsorsIconsContainer, styles.justifyBetween, styles.marginVerticalSeparator]}>
                        <Image resizeMode='contain' source={require('../assets/img/Andela-logo-landscape-blue.png')}/>
                        <Image resizeMode='contain' source={require('../assets/img/hover_logo.png')}/>
                        <Image resizeMode='contain' source={require('../assets/img/jetbrains.png')}/>
                    </View>
                </View>
                <View style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}>
                    <Text style={[styles.sponsorsContainerTitle, styles.marginVerticalSeparator]}>Organized by :</Text>
                    <View style={[styles.sponsorsIconsContainer, styles.justifyAround, styles.marginVerticalSeparator]}>
                        <Android254Icon/>
                        <Image resizeMode='contain' source={require('../assets/img/kotlin.png')}/>
                        <Image resizeMode='contain' source={require('../assets/img/unnamed.png')}/>
                    </View>
                    <View style={[styles.sponsorsIconsContainer, styles.justifyAround, styles.marginVerticalSeparator]}>
                        <AppsLabIcon/>
                        <Image resizeMode='contain' source={require('../assets/img/Layer2-1.png')}/>
                        <TiskosIcon/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const HomeScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
    // Video ref.
    const video = useRef(null);
    // Mute status
    const [isVideoMute, setIsVideoMute] = useState(true)
    // redux dispatch
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);

    const login = () => {
        dispatch(setUser({name: 'John Doe', id: 0}))
    }

    if(!user){
        return <HomeNotLoggedIn handleLogin={() => login()}/>
    }

    // Function to navigate to Speakers screen
    const goToSpeakersScreen = () => navigation.navigate(screen_names.SPEAKERS);

    // function to toggle mute status
    const toggleMute = () => setIsVideoMute(!isVideoMute)
    return (
        <SafeAreaView style={[styles.container, styles.paddingVertical]}>
            <StatusBar backgroundColor={colors.DROIDCONKE_WHITE} barStyle='dark-content'/>
            <View style={[styles.header, styles.marginVerticalSeparator, styles.paddingHorizontal]}>
                <DroidconKeIcon width={150} style={styles.droidconkeIcon}/>
                <View style={[styles.row, styles.justifyBetween, styles.itemsCenter]}>
                    <TouchableOpacity style={styles.buttonFeedback}>
                        <Image resizeMode='contain' source={require('../assets/icons/SmileyIcon.png')} style={styles.buttonFeedbackContentMargin}/>
                        <Text style={[styles.buttonFeedbackText, styles.buttonFeedbackContentMargin]}>Feedback</Text>
                        <Image resizeMode='contain' source={require('../assets/icons/SendIcon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Image resizeMode='contain' source={require('../assets/img/profilepicture.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[ styles.paddingHorizontal]}>
                    <Video
                        ref={video}
                        source={require('../assets/video/video_2022-09-29_22-16-14.mp4')}
                        isLooping
                        resizeMode={ResizeMode.COVER}
                        style={styles.droidconkeVideo}
                        shouldPlay
                        isMuted={isVideoMute}/>

                    <TouchableOpacity onPress={toggleMute} style={styles.volumeControl}>
                        {isVideoMute ? <VolumeUp fill={colors.DROIDCONKE_WHITE}/> : <VolumeOff fill={colors.DROIDCONKE_WHITE}/>}
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={[styles.row, styles.justifyBetween, styles.itemsCenter,styles.marginSessionRow,styles.paddingHorizontal]}>
                        <Text style={styles.sponsorsContainerTitle}>Sessions</Text>
                        <TouchableOpacity style={[styles.row, styles.justifyBetween, styles.itemsCenter]}>
                            <Text style={styles.link}>View All</Text>
                            <View style={styles.tallyContainer}>
                                <Text style={styles.tallyText}>+45</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={MOCK_DATA_SESSIONS}
                        renderItem={({item}) => 
                            <SessionCard 
                                id={item.id} 
                                poster={item.poster} 
                                title={item.title} 
                                time={item.time} 
                                venue={item.venue}/>}
                        keyExtractor={(item: SessionCardProps) => item.id}
                        horizontal
                        contentContainerStyle={{ paddingLeft: 20}}
                        />
                </View>
                <View>
                    <View style={[styles.row, styles.justifyBetween, styles.itemsCenter, styles.marginSpeakerRow,styles.paddingHorizontal]}>
                        <Text style={styles.sponsorsContainerTitle}>Speakers</Text>
                        <TouchableOpacity style={[styles.row, styles.justifyBetween, styles.itemsCenter]} onPress={() => goToSpeakersScreen()}>
                            <Text style={styles.link}>View All</Text>
                            <View style={styles.tallyContainer}>
                                <Text style={styles.tallyText}>+45</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.row, styles.paddingHorizontal, styles.justifyStart]}>
                        {MOCK_DATA_SPEAKERS.slice(0,4).map(item =>
                            <SpeakerImageCard
                                key={item.id} 
                                id={item.id} 
                                ProfilePicture={item.ProfilePicture} 
                                SpeakersName={item.SpeakersName}
                                onPress={() => console.log("pressed")}/>
                            
                        )}
                    </View>
                </View>
                <View style={styles.paddingHorizontal}>
                    <View style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}>
                        <Text style={[styles.sponsorsContainerTitle, styles.marginVerticalSeparator]}>Sponsors</Text>
                        <View style={[styles.sponsorsIconsContainer, styles.justifyCenter]}>
                            <Image resizeMode='contain' source={require('../assets/img/1920px-Google_2015_logo.svg.png')} style={styles.marginVerticalIcons}/>
                        </View>
                        <View style={[styles.sponsorsIconsContainer, styles.justifyBetween, styles.marginVerticalSeparator]}>
                            <Image resizeMode='contain' source={require('../assets/img/Andela-logo-landscape-blue.png')}/>
                            <Image resizeMode='contain' source={require('../assets/img/hover_logo.png')}/>
                            <Image resizeMode='contain' source={require('../assets/img/jetbrains.png')}/>
                        </View>
                    </View>
                    <View style={[styles.sponsorsContainer, styles.marginVerticalSeparator2]}>
                        <Text style={[styles.sponsorsContainerTitle, styles.marginVerticalSeparator]}>Organized by :</Text>
                        <View style={[styles.sponsorsIconsContainer, styles.justifyAround, styles.marginVerticalSeparator]}>
                            <Android254Icon/>
                            <Image resizeMode='contain' source={require('../assets/img/kotlin.png')}/>
                            <Image resizeMode='contain' source={require('../assets/img/unnamed.png')}/>
                        </View>
                        <View style={[styles.sponsorsIconsContainer, styles.justifyAround, styles.marginVerticalSeparator]}>
                            <AppsLabIcon/>
                            <Image resizeMode='contain' source={require('../assets/img/Layer2-1.png')}/>
                            <TiskosIcon/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles= StyleSheet.create({
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    iconWrapper: {
        backgroundColor: colors.DROIDCONKE_GREEN,
        width: 29,
        height: 29,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14.45,
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
        marginVertical: 15
    },
    marginBottomSeparator: {
        marginBottom: 10
    },
    marginBottomSeparator2: {
        marginBottom: 5
    },
    marginVerticalIcons: {
        marginVertical: 10,
    },
    droidconkeBanner: { 
        width: Dimensions.get('screen').width - 40,
        height: 175,
    },
    cfpConfetti: {
        width: '35%', 
        height: 65, 
    },
    cfpContainer: {
        backgroundColor: colors.DROIDCONKE_GREEN,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
    },
    cfpTitle: {
        fontFamily: fonts.MONTSERRAT_BOLD,
        fontSize: 17,
        lineHeight: 20,
        color: colors.DROIDCONKE_WHITE
    },
    cfpContent: {
        fontFamily: fonts.MONTSERRAT_REGULAR,
        fontSize: 10,
        lineHeight: 20,
        color: colors.DROIDCONKE_BLACK,
    },
    sponsorsContainer : {
        backgroundColor: colors.DROIDCONKE_PEARL,
        padding: 20,
        borderRadius: 10,
    },
    sponsorsContainerTitle: {
        fontFamily: fonts.MONTSERRAT_BOLD,
        fontSize: 18,
        lineHeight: 20,
        color: colors.DROIDCONKE_BLUE,
        textAlign: 'center',
    },
    sponsorsIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    buttonFeedback: {
        backgroundColor: colors.DROIDCONKE_GREEN_TRANSLUCENT,
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        marginRight: 30,
    },
    buttonFeedbackText: {
        fontFamily: fonts.MONTSERRAT_REGULAR,
        fontSize: 12,
    },
    buttonFeedbackContentMargin: {
        marginRight: 8,
    },
    row: {
        flexDirection: 'row',
    },
    itemsCenter: {
        alignItems: 'center', 
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
        width: Dimensions.get('screen').width - 40, 
        height: Dimensions.get('screen').height / 4.5,
        marginVertical: 20,
        borderRadius: 10, 
        backgroundColor: colors.DROIDCONKE_BLUE_TRANSLUCENT,
    },
    droidconkeIcon: { 
        marginVertical: -100, 
        marginLeft: -10,
    },
    volumeControl: {
        position: 'absolute',
        top: 44, 
        right: 40, 
        backgroundColor: colors.DROIDCONKE_BLACK_TRANSLUCENT, 
        width: 50, 
        height: 50, 
        borderRadius: 50
    },
    marginSessionRow : {
        marginTop: 15, 
        marginBottom: 35
    },
    marginSpeakerRow: {
        marginTop: 35, 
        marginBottom: 30
    }
})

export default HomeScreen;