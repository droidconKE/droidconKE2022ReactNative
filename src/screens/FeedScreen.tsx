import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, StyleSheet, ScrollView, Button , Modal, View , TouchableOpacity } from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import MainHeader from "../components/layouts/MainHeader";
import { colors } from "../constants/Colors";
import ShareIcon from "../assets/icons/ShareIcon";
import type { SocialMedia } from "../components/buttons/SocialButton";
import SocialButton from "../components/buttons/SocialButton";
import { fonts } from "../assets/fonts/fonts";

const FeedScreen = ({
	navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.FEED, undefined>) => {
	const [showmodal,setModalVisibility] = useState(false)
	return (
		<SafeAreaView style={[styles.container, styles.paddingVertical]}>
			<MainHeader />
			<ScrollView style={styles.paddingHorizontal}>
				<Text>Feed screen</Text>
			</ScrollView>
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
        <Modal visible={visible}>
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
