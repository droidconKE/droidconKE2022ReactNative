import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import MainHeader from "../components/layouts/MainHeader";
import { colors } from "../constants/Colors";
import FeedsCard from "../components/cards/FeedsCard";

const FEED = [
  {
    data: [
      {
        title: "Test",
        body: "Good one",
        topic: "droidconweb",
        url: "https://droidcon.co.ke",
        image: "https://rebrand.ly/5a6672",
        created_at: "2020-03-19 18:45:49",
      },
      {
        title: "niko fine",
        body: "this is a test",
        topic: "droidconweb",
        url: "https://droidcon.co.ke",
        image: "https://rebrand.ly/5a6672",
        created_at: "2020-03-19 18:43:38",
      },
      {
        title: "niko fine",
        body: "this is a test",
        topic: "droidconweb",
        url: "https://droidcon.co.ke",
        image: "https://rebrand.ly/5a6672",
        created_at: "2020-03-19 18:43:38",
      },
      {
        title: "niko fine",
        body: "this is a test",
        topic: "droidconweb",
        url: "https://droidcon.co.ke",
        image: "https://rebrand.ly/5a6672",
        created_at: "2020-03-19 18:43:38",
      },
      {
        title: "niko fine",
        body: "this is a test",
        topic: "droidconweb",
        url: "https://droidcon.co.ke",
        image: "https://rebrand.ly/5a6672",
        created_at: "2020-03-19 18:43:38",
      },
    ],
    meta: {
      paginator: {
        count: 2,
        per_page: "10",
        current_page: 1,
        next_page: null,
        has_more_pages: false,
        next_page_url: null,
        previous_page_url: null,
      },
    },
  },
];


const FeedScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.FEED, undefined>) => {
  return (
    <SafeAreaView style={[styles.container, styles.paddingVertical]}>
      <MainHeader />
      
        <FlatList
          style={styles.paddingHorizontal}
          data={FEED[0].data}
          renderItem={({ item }) => <FeedsCard {...item} />}
          // keyExtractor={({ id }, index) => id}
        />
      
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
