import React from 'react';
import { FlatList , SafeAreaView , StyleSheet } from 'react-native';
import SpeakerCard from '../components/cards/SpeakerCard';
import type { SpeakerCardProps } from '../components/cards/SpeakerCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { colors } from '../constants/Colors';

//Mock data ... to be removed when we add code to fetch the actual data
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
        <SafeAreaView style={styles.container}>
        <FlatList
          data={MOCK_DATA}
          renderItem={({item}) => <SpeakerCard SpeakersName={item.SpeakersName} id={item.id} ProfilePicture={item.ProfilePicture} Content={item.Content}/>}
          keyExtractor={(item: SpeakerCardProps) => item.id}
          numColumns = {2}
        />
        </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.DROIDCONKE_WHITE,
      padding: 5,
    }
  })

  export default SpeakersScreen