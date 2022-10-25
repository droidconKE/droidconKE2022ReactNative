import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, StyleSheet, ScrollView, Button , Modal, View , TouchableOpacity } from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import MainHeader from "../components/layouts/MainHeader";
import { colors } from "../constants/Colors";
import ShareIcon from "../assets/icons/ShareIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import WhatsappIcon from "../assets/icons/WhatsAppIcon";
import TelegramIcon from "../assets/icons/TelegramIcon";

const FeedScreen = ({
	navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.FEED, undefined>) => {
	const [showmodal,setModalVisibility] = useState(false)
	return (
		<SafeAreaView style={[styles.container, styles.paddingVertical]}>
			<MainHeader />
			<ScrollView style={styles.paddingHorizontal}>
				<Button title="Show Modal" onPress={() => setModalVisibility(!showmodal)} />
				<ShareModal showModal={showmodal} setModalVisibility={setModalVisibility} />
			</ScrollView>
		</SafeAreaView>
	);
};

export type ShareModalProps = {
    showModal : boolean,
    setModalVisibility : Function
}

const ShareModal = (props : ShareModalProps) : JSX.Element => {
    const visible = props.showModal
    const setvisibility = props.setModalVisibility
    return (
        <Modal visible={visible}>
            <View style={{flex:1, backgroundColor : colors.DROIDCONKE_MODAL_OVERLAY , flexDirection : "column-reverse"}}>
                <View style={{backgroundColor : colors.DROIDCONKE_WHITE , height : "30%" , borderTopRightRadius : 14 , borderTopLeftRadius : 14}}>
                    <View style={{flexDirection : "row" , marginVertical : 35}}>
                    <ShareIcon color={colors.DROIDCONKE_BLACK} style={{marginHorizontal : 20}}/>
                    <Text>SHARE</Text>
                     <TouchableOpacity style={{position : "absolute" , right : 20 }} onPress={() => {setvisibility(false)}}>
                        <Text>
                            CANCEL
                        </Text>
                     </TouchableOpacity>
                    </View>
                    <View style={{flexDirection : "row" , marginBottom : 25 , justifyContent : "space-around"}}>
                        <View style={{height : 43 , width : 172 , borderWidth :1 , borderColor : "#7DE1C3" , borderRadius : 10, flexDirection : "row",alignItems : "center"}} >
                            <TwitterIcon height={14.26} width={17.58} color={colors.DROIDCONKE_BLACK} style={{marginLeft : 40 , marginRight : 25}} />
                            <Text>
                                Twitter
                            </Text>
                        </View>
                        <View style={{height : 43 , width : 172 , borderWidth :1 , borderColor : "#7DE1C3" , borderRadius : 10 ,  flexDirection : "row",alignItems : "center"}} >
                            <Text style={{marginLeft : 40 , marginRight : 25, fontWeight: 'bold' , fontSize : 17.58}}>
                                f
                            </Text>
                            <Text>
                                Facebook
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection : "row" , marginBottom : 25 , justifyContent : "space-around"}}>
                        <View style={{height : 43 , width : 172 , borderWidth :1 , borderColor : "#7DE1C3" , borderRadius : 10 ,flexDirection : "row",alignItems : "center" }} >
                            <WhatsappIcon color={colors.DROIDCONKE_BLACK} style={{marginLeft : 40 , marginRight : 25}} />
                            <Text>
                                WhatsApp
                            </Text>
                        </View>
                        <View style={{height : 43 , width : 172 , borderWidth :1 , borderColor : "#7DE1C3" , borderRadius : 10,flexDirection : "row",alignItems : "center"  }} >
                            <TelegramIcon color={colors.DROIDCONKE_BLACK} style={{marginLeft : 40 , marginRight : 25}} />
                            <Text>
                                Telegram
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
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
});
