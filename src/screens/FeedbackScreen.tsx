import React , { useState } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Text , StyleSheet , View , TextInput , TouchableOpacity , Modal , Pressable ,Keyboard, Dimensions , Image , ScrollView , TextStyle, ViewStyle , ImageStyle} from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { fonts } from '../assets/fonts/fonts';
import { colors } from '../constants/Colors';
import { RootStackParamList } from '../types/Navigation';

const FeedBackScreen = ({navigation}: NativeStackScreenProps<RootStackParamList, screen_names.FEEDBACK, undefined>)  => {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = React.useState("");
    const [selection, setSelection] = useState("");
    const GreatEmoji = { emoji : "😊" , text : "Great" }
    const OkayEmoji = { emoji : "😐" , text : "Okay" }
    const BadEmoji =  { emoji : "😔" , text : "Bad"}
    return (
      <ScrollView contentContainerStyle={styles.main_container}>
            <Text style={styles.feedback_text}>Your feedback helps us improve</Text>
            <View style={styles.response_container}>
                <Text style={styles.response_container_text}>
                How is/was the event
                </Text>
                <View style={styles.emojis_response_container}>
                  <TouchableOpacity onPress={() => setSelection(BadEmoji.text)} >
                    <Emojis emojitype={BadEmoji} containerstyle={ selection == BadEmoji.text ? [styles.emoji_container,styles.clicked_emoji_container] : styles.emoji_container}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSelection(OkayEmoji.text)} >
                    <Emojis emojitype={OkayEmoji} containerstyle={ selection == OkayEmoji.text ? [styles.emoji_container,styles.clicked_emoji_container] : styles.emoji_container}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSelection(GreatEmoji.text)} >
                    <Emojis emojitype={GreatEmoji} containerstyle={ selection == GreatEmoji.text ? [styles.emoji_container,styles.clicked_emoji_container] : styles.emoji_container}/>
                  </TouchableOpacity>
                </View>
            </View>
            <TextInput returnKeyType='done'  onSubmitEditing={() => {Keyboard.dismiss()}} style={styles.textinput_text} value={text} onChangeText={onChangeText} multiline={true} placeholder={"Type message here"}></TextInput>
            <Modal
             transparent
             statusBarTranslucent={false}
             visible={modalVisible}
             onRequestClose={() => { setModalVisible(!modalVisible); }}
      >
        <View style={styles.modal_overlay}>
          <View style={styles.modal_view}>
            <Image source={require("../assets/confetti.png")} style={styles.modal_image}/>
            <Text style={styles.modal_text}>Thank you for your feedback</Text>
            <Pressable
              style={styles.modal_button}
              onPress={() => navigation.navigate(screen_names.HOME)}
            >
              <Text style={styles.button_text}>OKAY</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            <TouchableOpacity style={styles.button} disabled={text == "" || selection == ""} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.button_text}>
                    SUBMIT FEEDBACK
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

type EmojiProp = {
  emojitype  : {emoji : string , text : string},
  containerstyle : ViewStyle | ViewStyle[]
}

const Emojis = (props : EmojiProp) => {
  const text : string = props.emojitype.text
  const emoji : string = props.emojitype.emoji
  return (
    <View style={props.containerstyle}>
      <Text style={styles.emoji_image}> {emoji} </Text>
      <Text style={styles.emoji_text}>{text}</Text>
    </View>
    )
}

type FeedbackStyle = {
  main_container : ViewStyle,
  feedback_text : TextStyle,
  response_container : ViewStyle,
  emoji_container : ViewStyle,
  clicked_emoji_container : ViewStyle,
  response_container_text : TextStyle,
  emojis_response_container : ViewStyle,
  textinput_text : TextStyle,
  button : ViewStyle,
  button_text : TextStyle,
  modal_view : ViewStyle,
  modal_button : ViewStyle,
  modal_text : TextStyle,
  modal_image : ImageStyle,
  emoji_text : TextStyle,
  emoji_image : TextStyle,
  modal_overlay : ViewStyle
}

const styles = StyleSheet.create<FeedbackStyle>({
    main_container : {
        flex : 1 ,
        alignItems : "center",
        backgroundColor : colors.DROIDCONKE_WHITE
    },
    feedback_text : {
        textAlign : "center",
        color : colors.DROIDCONKE_BLUE ,
        width : "80%",
        margin : 30,
        fontSize : 18,
        fontFamily : fonts.MONTSERRAT_BOLD
    },
    response_container : {
        alignItems : "center",
        marginBottom : 30,
        borderColor : "#F5F5F5",
        borderWidth : 1,
        borderRadius : 8,
        width : "90%"
    },
    emoji_container : {
        height : 67,
        width : 67,
        backgroundColor : colors.DROIDCONKE_PEARL,
        borderRadius : 4 ,
        margin : 30 ,
        justifyContent : "center",
        alignContent : "center",
    },
    clicked_emoji_container : {
      opacity : 0.2
    },
    response_container_text : {
        color : colors.DROIDCONKE_BLACK,
        fontSize : 14 ,
        fontFamily : fonts.MONTSERRAT_REGULAR,
        textAlign : "center",
        marginTop : 17,
    },
    emojis_response_container : {
        flexDirection : "row",
        justifyContent : "space-around"
    },
    textinput_text : {
        backgroundColor : colors.DROIDCONKE_PEARL,
        width : "90%",
        marginBottom : 30,
        height : 115,
        textAlign : "left",
        textAlignVertical : "top",
        padding : 5,
        borderRadius : 7,
        fontFamily : fonts.MONTSERRAT_LIGHT,
        fontSize : 14,
        color : "#C3C3C3"
    },
    button : {
        backgroundColor : colors.DROIDCONKE_BLUE,
        alignItems : "center",
        justifyContent : "center",
        width : "90%",
        borderRadius : 10,
        height : 45
    } ,
    button_text : {
        fontSize : 16,
        fontFamily : fonts.MONTSERRAT_SEMIBOLD,
        color : colors.DROIDCONKE_WHITE,
        textAlign : "center"
    },
    modal_view: {
        backgroundColor:colors.DROIDCONKE_WHITE,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 5,
        justifyContent: "center",
        alignSelf : "center",
        marginTop : Dimensions.get("screen").height / 4,
        width : "80%"
    },
    modal_overlay : {
      flex : 1 , 
      backgroundColor: colors.DROIDCONKE_MODAL_OVERLAY
    },
    modal_button: {
        justifyContent : "center",
        alignContent : "center",
        width : "80%",
        backgroundColor : colors.DROIDCONKE_BLUE,
        height : 45,
        borderRadius : 10,
        marginTop : 25
    },
    modal_text: {
        textAlign : "center",
        color : colors.DROIDCONKE_BLACK,
        fontFamily : fonts.MONTSERRAT_BOLD,
        fontSize : 18,
        flexWrap : "wrap",
        width : "80%"
    },
    modal_image: {
        height : 160,
        width : 160
    },
    emoji_text: {
        textAlign : "center", 
        fontFamily : fonts.MONTSERRAT_BOLD, 
        fontSize : 12
    },
    emoji_image : {
        textAlign : "center", 
        fontFamily : fonts.MONTSERRAT_REGULAR , 
        fontSize : 18
    }
})
export default FeedBackScreen;