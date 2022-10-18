import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

interface FeedCardProps {
  id: number;
  description: string;
  image: string;
  postedAt: string;
}

const FeedsCard = ({ id, description, image, postedAt }: FeedCardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{description}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.post_details}>
        <Text>Share</Text>
        <Text>{postedAt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeedsCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  post_details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});
