import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Button, Text } from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';

const ExampleScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.EXAMPLE, undefined>) => {
    return (
        <>
            <Text>Example screen</Text>
            <Button title='Go To Tabs' onPress={() => navigation.navigate('HomeTabs')}/>
        </>
    )
};

export default ExampleScreen;