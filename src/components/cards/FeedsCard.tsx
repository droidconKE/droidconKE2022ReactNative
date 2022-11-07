import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";
import { fonts } from "../../assets/fonts/fonts";
import { formatDate } from "../../utils/formatTime";
import FeedIcon from "../../assets/icons/FeedIcon";
import ShareIcon from "../../assets/icons/ShareIcon";

interface FeedCardProps {
  body: string;
  image: string | null | undefined;
  created_at: string;
}

const FeedsCard = ({ body, image, created_at }: FeedCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{body}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.post_details}>
        <TouchableOpacity style={styles.flex_row}>
          <Text style={styles.share_btn}>Share</Text>
          <ShareIcon  style={styles.feed_icon}/>
        </TouchableOpacity>
        <Text style={styles.time}>{formatDate(created_at)}</Text>
      </View>
    </View>
  );
};

export default FeedsCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
    borderBottomColor: colors.DROIDCONKE_BORDER_BOTTOM,
    borderBottomWidth: 1,
    padding: 25,
  },
  post_details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    fontSize: 16,
    alignItems: "center",
  },
  text: {
    fontFamily: fonts.MONTSERRAT_REGULAR,
    fontSize: 16,
    color: colors.DROIDCONKE_BLACK,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  share_btn: {
    color: colors.DROIDCONKE_BLUE,
    fontSize: 16,
    fontFamily: fonts.MONTSERRAT_BOLD,
    marginRight: 10,
  },
  time: {
    color: colors.DROIDCONKE_DARK_GREY,
    fontSize: 12,
    fontFamily: fonts.MONTSERRAT_REGULAR,
  },
  feed_icon: {
    width: 20,
    height: 20,
    color: colors.DROIDCONKE_BLUE,
  },
  flex_row: {
    flexDirection: "row",
    alignItems: 'center',
  }
});
