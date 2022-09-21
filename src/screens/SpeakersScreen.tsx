import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import SpeakerCard from '../components/cards/SpeakerCard';
import type { SpeakerCardProps } from '../components/cards/SpeakerCard';

  const DATA = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4'
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
    },
    {
      id: '9',
    },
    {
      id: '10',
    },
  ];

  const SpeakersScreen = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <SpeakerCard data={item} />}
          keyExtractor={(item: SpeakerCardProps) => item.id}
          numColumns = {2}
        />
      </View>
    );
  };

  export default SpeakersScreen