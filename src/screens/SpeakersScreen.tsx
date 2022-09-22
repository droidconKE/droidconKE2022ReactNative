import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import SpeakerCard from '../components/cards/SpeakerCard';
import type { SpeakerCardProps } from '../components/cards/SpeakerCard';

  const SpeakersScreen = (props : {SpeakersData : SpeakerCardProps[] }) => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={props.SpeakersData}
          renderItem={({item}) => <SpeakerCard SpeakersName={item.SpeakersName} id={item.id} ProfilePicture={item.ProfilePicture} Content={item.Content}/>}
          keyExtractor={(item: SpeakerCardProps) => item.id}
          numColumns = {2}
        />
      </View>
    );
  };

  export default SpeakersScreen