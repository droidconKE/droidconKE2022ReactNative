import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
            <View>
                <Text style={styles.welcomeText}>Welcome to the largest Focused Android Developer community in Africa!</Text>
            </View>

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
        alignItems: 'center'
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
    }
})

export default HomeScreen;