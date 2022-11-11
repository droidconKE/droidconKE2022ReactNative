import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import SpeakerCard from "../components/cards/SpeakerCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { colors } from "../constants/Colors";
import { useAppSelector } from "../hooks/useTypedRedux";
import Session from "../types/Session";
import Speaker from "../types/Speaker";
import { ScreenTitle } from "./BioScreen";

const SpeakersScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.SPEAKERS, undefined>) => {

  const { schedule } = useAppSelector((state) => state.schedule);
	const [sessions, setSessions] = useState<Session[]>();

  useEffect(() => {
    if(schedule?.data){
      const listOfSessions: Session[] = []
      Object.values(schedule?.data).forEach(daySessions => listOfSessions.push(...daySessions));
      setSessions(listOfSessions)
    }
  },[schedule?.data])

  console.log(sessions)
  const filteredSessions = sessions?.filter(session => session.speakers.length !== 0)

  const goToSessionScreen = (session : Session) => navigation.navigate(screen_names.SESSION_DETAILS,{sessionData: session})

  const goToSpeakerScreen = (speaker: Speaker) => {
    
    const ScreenBio = {
      screenTitle: ScreenTitle.Speaker,
      id: speaker.name,
      title: speaker.tagline,
      img: speaker.avatar,
      name: speaker.name,
      occupation: speaker.tagline,
      skills: [],
      content: speaker.biography,
      twitterHandle: speaker.twitter
    }
    navigation.navigate(screen_names.BIO, { bioData: ScreenBio})
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredSessions}
        renderItem={({item}: {item: Session}) => {
          if(item.speakers.length < 1) {
            return null
          }
          return (
            <>
            {item.speakers.map(speaker => (
              <SpeakerCard
                itemSpeaker={speaker}
                itemSession={item}
                SessionButtonOnPress={goToSessionScreen}
                SpeakerImageOnPress={goToSpeakerScreen}/>
            ))}
            </>
          )

        }}
        keyExtractor={(item: Session) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DROIDCONKE_WHITE,
    padding: 5,
  },
});

export default SpeakersScreen;
