import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import SpeakerCard from '../components/cards/SpeakerCard';
import type { SpeakerCardProps } from '../components/cards/SpeakerCard';
import BackArrowIcon from '../assets/icons/BackArrowIcon';
import { colors } from "../constants/Colors";

  const SpeakersScreen = (props : {SpeakersData : SpeakerCardProps[] }) => {
    return (
      <View style={{flex: 1 , justifyContent : "flex-start"}}>
        <View style={{flexDirection : "row", alignContent : "center" , flex : 2 }}>
        <BackArrowIcon color={colors.DROIDCONKE_BLACK}/>
        <Text style={{ textAlign : "center" , margin : 10}}>
          SPEAKERS
        </Text>
        </View>
        <View style={{flex : 8}}>
        <FlatList
          data={props.SpeakersData}
          renderItem={({item}) => <SpeakerCard SpeakersName={item.SpeakersName} id={item.id} ProfilePicture={item.ProfilePicture} Content={item.Content}/>}
          keyExtractor={(item: SpeakerCardProps) => item.id}
          numColumns = {2}
        />
        </View>
      </View>
    );
  };

  export default SpeakersScreen