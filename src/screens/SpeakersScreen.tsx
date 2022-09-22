import React from 'react';
import { View, FlatList, StyleSheet, Text} from 'react-native';
import SpeakerCard from '../components/cards/SpeakerCard';
import type { SpeakerCardProps } from '../components/cards/SpeakerCard';
import BackArrowIcon from '../assets/icons/BackArrowIcon';
import { colors } from "../constants/Colors";
import { fonts } from '../assets/fonts/fonts';

  const SpeakersScreen = (props : {SpeakersData : SpeakerCardProps[] }) => {
    return (
      <>
        <View style={styles.titleContainer}>
        <BackArrowIcon color={colors.DROIDCONKE_BLACK} />
        <Text style={styles.titleText}>
          SPEAKERS
        </Text>
        </View>
        <View style={styles.speakersContainer}>
        <FlatList
          data={props.SpeakersData}
          renderItem={({item}) => <SpeakerCard SpeakersName={item.SpeakersName} id={item.id} ProfilePicture={item.ProfilePicture} Content={item.Content}/>}
          keyExtractor={(item: SpeakerCardProps) => item.id}
          numColumns = {2}
        />
        </View>
      </>
    );
  };

  const styles = StyleSheet.create({
    titleContainer : {
      flexDirection : "row" ,
      alignContent : "center" ,
      flex : 2
    } ,
    titleText : {
      textAlign : "center",
      margin : 8 ,
      fontFamily : fonts.MONTSERRAT_REGULAR 
    } ,
    speakersContainer : {
      flex : 8
    }
  })

  export default SpeakersScreen