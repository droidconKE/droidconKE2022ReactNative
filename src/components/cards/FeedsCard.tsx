import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";

interface FeedCardProps {
  id: number;
  description: string;
  image: string;
  postedAt: string;
}

const FeedsCard = ({ id, description, image, postedAt }: FeedCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.post_details}>
        <Text style={styles.share_btn}>Share</Text>
        <Text style={styles.time}>{postedAt}</Text>
      </View>
    </View>
  );
};

export default FeedsCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    padding: 5,
    
  },
  post_details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    fontSize: 16,
    alignItems: 'center'
  },
  text: {
    fontFamily: fonts.MONTSERRAT_REGULAR,
		fontSize: 16,
		color: colors.DROIDCONKE_BLACK,
  },
  image: {
    width: 100,
    height: 100,
  },
  share_btn: {
    color: colors.DROIDCONKE_BLUE,
    fontSize: 16,
    fontFamily: fonts.MONTSERRAT_BOLD,
  },
  time: {
    color: colors.DROIDCONKE_DARK_GREY,
    fontSize: 16,
    fontFamily: fonts.MONTSERRAT_BOLD,
  }
});
