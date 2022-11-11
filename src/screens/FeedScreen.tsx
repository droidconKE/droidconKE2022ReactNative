import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, StyleSheet,   FlatList , Modal, View , TouchableOpacity } from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import MainHeader from "../components/layouts/MainHeader";
import { colors } from "../constants/Colors";
import FeedsCard from "../components/cards/FeedsCard";
import ShareIcon from "../assets/icons/ShareIcon";
import type { SocialMedia } from "../components/buttons/SocialButton";
import SocialButton from "../components/buttons/SocialButton";
import { fonts } from "../assets/fonts/fonts";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedRedux";
import { useGetFeedsQuery } from "../services/auth";
import { setFeeds } from "../state/feeds";

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

	// Redux dispatch.
	const dispatch = useAppDispatch();
	
  // State variables feeds and user from redux state.
  const { feeds, meta } = useAppSelector((state) => state.feeds);

  const { user } = useAppSelector((state) => state.user);

  const [page, setPage] = useState<string|Blob>('1');

  const { data: feedsData, error: feedsError, isLoading: feedsIsLoading, isSuccess: feedsIsSuccess, isError: feedsIsError } = useGetFeedsQuery({page: page},{skip: user === null})

  useEffect(() => {
    console.log({feedsData, feedsError, feedsIsLoading, feedsIsSuccess, feedsIsError})
    if(feedsIsSuccess && !feedsIsLoading && feedsData) {
      dispatch(setFeeds({ feeds: feedsData.data , meta: feedsData.meta}))
    }

  },[feedsData, feedsError, feedsIsLoading, feedsIsSuccess, feedsIsError])

  // Function to load more feeds when flatlist reaches the end of scroll.
  const loadMoreFeeds = () => {
    if (meta?.has_more_pages === true) {
      setPage(meta?.next_page)
    }
  }
  const [showmodal,setModalVisibility] = useState(false)

  const shareFeed = (item) => {
    toggleModalVisibility()
  }

  const toggleModalVisibility = () => setModalVisibility(!showmodal)
  return (
    <SafeAreaView style={[styles.container, styles.paddingVertical]}>
      <MainHeader />
      
        <FlatList
          style={styles.paddingHorizontal}
          data={feeds}
          renderItem={({ item }) => <FeedsCard {...item} 
          handleShare={shareFeed}/>}
          onEndReached={loadMoreFeeds}
          onEndReachedThreshold ={0.1}
        />
        <ShareFeedModal showModal={showmodal} setModalVisibility={toggleModalVisibility}/>
    </SafeAreaView>
  );
};

export type ShareModalProps = {
    showModal : boolean,
    setModalVisibility : Function
}

const ShareFeedModal = (props : ShareModalProps) : JSX.Element => {
    const visible = props.showModal
    const setvisibility = props.setModalVisibility
    return (
        <Modal transparent visible={visible}>
            <View style={styles.shareModalOverlay}>
                <View style={styles.shareModalContainer}>
                    <View style={styles.shareModalUpperRow}>
                    <ShareIcon color={colors.DROIDCONKE_BLACK} style={styles.shareIcon}/>
                    <Text style={styles.shareText}>Share</Text>
                     <TouchableOpacity style={styles.cancelButton} onPress={() => {setvisibility(false)}}>
                        <Text style={styles.cancelText}>
                            CANCEL
                        </Text>
                     </TouchableOpacity>
                    </View>
                    <DoubleSocialButtonRow leftSocialButton="Twitter" rightSocialButton="Facebook" />
                    <DoubleSocialButtonRow leftSocialButton="WhatsApp" rightSocialButton="Telegram" />
                    </View>
                </View>
        </Modal>
    )
}


export type DoubleSocialButtonRowProps = {
    leftSocialButton : SocialMedia
    rightSocialButton : SocialMedia
}

const DoubleSocialButtonRow = (props : DoubleSocialButtonRowProps) : JSX.Element => {
    return (
    <View style={styles.doubleSocialButtonRowContainer}>
        <SocialButton socialmedia={props.leftSocialButton}/>
        <SocialButton socialmedia={props.rightSocialButton}/>
    </View>
    )
}

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
    shareModalOverlay : {
        flex:1,
        backgroundColor : colors.DROIDCONKE_MODAL_OVERLAY , 
        flexDirection : "column-reverse"
    },
    shareModalContainer : {
        backgroundColor : colors.DROIDCONKE_SHARE_MODAL_BACKGROUND , 
        height : "30%" , 
        borderTopRightRadius : 14 , 
        borderTopLeftRadius : 14
    },
    shareModalUpperRow : {
        flexDirection : "row", 
        marginVertical : 35,
        alignItems : "center"
    },
    shareIcon : {
        marginLeft : 20,
        marginRight : 10
    },
    cancelButton : {
        position : "absolute" , 
        right : 20 ,
        marginTop : 5
    },
    shareText : {
        fontFamily : fonts.MONTSERRAT_BOLD,
        fontSize : 18,
        textAlign : "left",
        color : colors.DROIDCONKE_SHARE_TEXT
    },
    cancelText : {
        fontFamily : fonts.MONTSERRAT_LIGHT,
        fontSize : 13,
        color : colors.DROIDCONKE_CANCEL_TEXT
    },
    doubleSocialButtonRowContainer : {
        flexDirection : "row" , 
        marginBottom : 25 ,
        justifyContent : "space-around",
        height : "18%"
    }
});
