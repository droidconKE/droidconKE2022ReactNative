import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import SpeakerCard from "../components/cards/SpeakerCard";
import type { SpeakerCardProps } from "../components/cards/SpeakerCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { colors } from "../constants/Colors";
import { useAppSelector } from "../hooks/useTypedRedux";
import Session from "../types/Session";

//Mock data ... to be removed when we add code to fetch the actual data
const placeholder: ImageSourcePropType = require("../assets/img/john_doe.png");
export const MOCK_DATA_SPEAKERS = [
  {
    id: "1",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
  {
    id: "2",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
  {
    id: "3",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
  {
    id: "4",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
  {
    id: "5",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
  {
    id: "6",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
  {
    id: "7",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
  {
    id: "8",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
  {
    id: "9",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
  {
    id: "10",
    ProfilePicture: placeholder,
    SpeakersName: "Harun Wangereka",
    Content:
      "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++",
  },
];

const SpeakersScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.SPEAKERS, undefined>) => {

  const { schedule } = useAppSelector((state) => state.schedule);
	const [sessions, setSessions] = useState<{ items: Session[] } | undefined>();

  useEffect(() => {
    const keys = Object.keys(schedule?.data);
    console.log(keys)
    keys.map(key => {
      //setSessions({items: schedule?.data[key]})
      setSessions({ items: schedule?.data[key]})
    })
    // keys.map(key => {
    //   let items = sessions?.items

    //   setSessions({items: [...items, schedule?.data[key]]})
    // })

    console.log(sessions)
  },[schedule?.data])
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sessions?.items}
        renderItem={renderSpeaker}
        keyExtractor={(item: Session) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const renderSpeaker  = ({item} : {item: Session}) => {
  return (
    <>
    {item.speakers.map(speaker => (
      <SpeakerCard
        item={speaker}
        onPress={() => goToSession(item)}/>
    ))}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DROIDCONKE_WHITE,
    padding: 6,
  },
});

export default SpeakersScreen;
function goToSession(item: Session): void {
  throw new Error("Function not implemented.");
}

