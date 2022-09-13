import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Text } from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';

const FeedScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.FEED, undefined>) => {
    return (
        <>
            <Text>Feed screen</Text>
        </>
    )
};

export default FeedScreen;