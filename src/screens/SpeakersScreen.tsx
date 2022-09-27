import React from 'react';
import { View, FlatList, StyleSheet, Text} from 'react-native';
import SpeakerCard from '../components/cards/SpeakerCard';
import type { SpeakerCardProps } from '../components/cards/SpeakerCard';
import BackArrowIcon from '../assets/icons/BackArrowIcon';
import { colors } from "../constants/Colors";
import { fonts } from '../assets/fonts/fonts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';

const placeholder = require("../assets/img/DummySpeakerProfilePicture.jpeg")
  const MOCK_DATA = [
    {
      id: '1',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '2',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '3',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '4',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '5',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '6',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '7',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '8',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '9',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '10',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
  ];

  const SpeakersScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.SPEAKERS, undefined>) => {
    return (
        <View>
        <FlatList
          data={MOCK_DATA}
          renderItem={({item}) => <SpeakerCard SpeakersName={item.SpeakersName} id={item.id} ProfilePicture={item.ProfilePicture} Content={item.Content}/>}
          keyExtractor={(item: SpeakerCardProps) => item.id}
          numColumns = {2}
        />
        </View>
    );
  };

  export default SpeakersScreen