import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Text } from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';

const AboutScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.ABOUT, undefined>) => {
    return (
        <>
            <Text>About screen</Text>
        </>
    )
};

export default AboutScreen;