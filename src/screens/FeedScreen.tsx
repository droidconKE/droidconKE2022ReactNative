import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import MainHeader from "../components/layouts/MainHeader";
import { colors } from "../constants/Colors";
import FeedsCard from "../components/cards/FeedsCard";

const FEED = [
  {
    id: 1,
    description:
      "Droidcon is a global conference series focused on the Android platform. It is organized by the Droidcon team, a group of Android enthusiasts from all over the world.",
    image:
      "https://droidconke.co.ke/wp-content/uploads/2020/09/IMG_20200919_120000.jpg",
    postedAt: "2 days ago",
  },
  {
    id: 2,
    description:
      "Droidcon is a global conference series focused on the Android platform. It is organized by the Droidcon team, a group of Android enthusiasts from all over the world.",
    image:
      "https://droidconke.co.ke/wp-content/uploads/2020/09/IMG_20200919_120000.jpg",
    postedAt: "2 days ago",
  },
  {
    id: 3,
    description:
      "Droidcon is a global conference series focused on the Android platform. It is organized by the Droidcon team, a group of Android enthusiasts from all over the world.",
    image:
      "https://droidconke.co.ke/wp-content/uploads/2020/09/IMG_20200919_120000.jpg",
    postedAt: "2 days ago",
  },
];

const FeedScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.FEED, undefined>) => {
  return (
    <SafeAreaView style={[styles.container, styles.paddingVertical]}>
      <MainHeader />
      <ScrollView style={styles.paddingHorizontal} nestedScrollEnabled = {true}>
        <FlatList
          data={FEED}
          renderItem={({ item }) => <FeedsCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DROIDCONKE_WHITE,
    flex: 1,
  },
  paddingVertical: {
    paddingVertical: 20,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
});
