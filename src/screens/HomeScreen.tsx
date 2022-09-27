import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { colors } from '../constants/Colors';
import LockIcon from '../assets/icons/LockIcon';
import { fonts } from '../assets/fonts/fonts';

const HomeScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text>droidconke</Text>
                <TouchableOpacity style={styles.iconWrapper}>
                    <LockIcon/>
                </TouchableOpacity>
            </View>
            <View style={styles.marginSeparator}>
                <Text style={styles.welcomeText}>Welcome to the largest Focused Android Developer community in Africa!</Text>
            </View>
            <ScrollView>
                <View style={styles.marginSeparator}>
                    <Image source={{uri: '../assets/droidconbanner.png'}}/>
                </View>
                <View style={[styles.cfpContainer, styles.marginSeparator]}>
                    <Image source={{uri: '../assets/cfpConfetti.png'}}/>
                    <View>
                        <Text style={styles.cfpTitle}>Call for speakers</Text>
                        <Text>Apply to be a speaker</Text>
                    </View>
                    <View>
                        <Text>▶</Text>
                    </View>
                </View>
                <View style={[styles.sponsorsContainer, styles.marginSeparator]}>
                    <Text style={styles.sponsorsContainerTitle}>Sponsors</Text>
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
    cfpContainer: {
        backgroundColor: colors.DROIDCONKE_GREEN,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    },
    sponsorsContainerTitle: {
        fontFamily: fonts.MONTSERRAT_BOLD,
        fontSize: 18,
        lineHeight: 20,
        color: colors.DROIDCONKE_BLUE,
        textAlign: 'center',
    }
})

export default HomeScreen;