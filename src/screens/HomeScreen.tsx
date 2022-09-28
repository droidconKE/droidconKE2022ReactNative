import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { colors } from '../constants/Colors';
import LockIcon from '../assets/icons/LockIcon';
import { fonts } from '../assets/fonts/fonts';
import Android254Icon from '../assets/icons/Android254Icon';
import AppsLabIcon from '../assets/icons/AppsLabIcon';
import TiskosIcon from '../assets/icons/TiskosIcon';

const HomeScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text>droidconke-icon</Text>
                <TouchableOpacity style={styles.iconWrapper}>
                    <LockIcon/>
                </TouchableOpacity>
            </View>
            <View style={styles.marginSeparator}>
                <Text style={styles.welcomeText}>Welcome to the largest Focused Android Developer community in Africa!</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.marginSeparator}>
                    <Image source={require('../assets/img/droidconkebanner.png')} resizeMode="contain" style={styles.droidconkeBanner}/>
                </View>
                <View style={[styles.cfpContainer, styles.marginSeparator2]}>
                    <Image resizeMode='contain' source={require('../assets/img/cfpconfetti.png')} style={styles.cfpConfetti}/>
                    <View>
                        <Text style={styles.cfpTitle}>Call for speakers</Text>
                        <Text>Apply to be a speaker</Text>
                    </View>
                    <View>
                        <Text>▶</Text>
                    </View>
                </View>
                <View style={[styles.sponsorsContainer, styles.marginSeparator2]}>
                    <Text style={[styles.sponsorsContainerTitle, styles.marginSeparator]}>Sponsors</Text>
                    <View style={[styles.sponsorsIconsContainer, styles.justifyCenter]}>
                        <Image resizeMode='contain' source={require('../assets/img/1920px-Google_2015_logo.svg.png')} style={{ marginVertical: 10}}/>
                    </View>
                    <View style={[styles.sponsorsIconsContainer, styles.justifyBetween, styles.marginSeparator]}>
                        <Image resizeMode='contain' source={require('../assets/img/Andela-logo-landscape-blue.png')}/>
                        <Image resizeMode='contain' source={require('../assets/img/hover_logo.png')}/>
                        <Image resizeMode='contain' source={require('../assets/img/jetbrains.png')}/>
                    </View>
                </View>
                <View style={[styles.sponsorsContainer, styles.marginSeparator2]}>
                    <Text style={[styles.sponsorsContainerTitle, styles.marginSeparator]}>Organized by :</Text>
                    <View style={[styles.sponsorsIconsContainer, styles.justifyAround, styles.marginSeparator]}>
                        <Android254Icon/>
                        <Image resizeMode='contain' source={require('../assets/img/kotlin.png')}/>
                        <Image resizeMode='contain' source={require('../assets/img/unnamed.png')}/>
                    </View>
                    <View style={[styles.sponsorsIconsContainer, styles.justifyAround, styles.marginSeparator]}>
                        <AppsLabIcon/>
                        <Image resizeMode='contain' source={require('../assets/img/Layer2-1.png')}/>
                        <TiskosIcon/>
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
        marginTop: StatusBar.currentHeight,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
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
    marginSeparator: {
        marginVertical: 15,
    },
    marginSeparator2: {
        marginVertical: 18,
    },
    droidconkeBanner: { 
        width: '100%', 
        marginVertical: -50,
    },
    cfpConfetti: {
        width: '35%', 
        marginVertical: -20
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
    }
})

export default HomeScreen;