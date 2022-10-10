import React , { useState } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Text , StyleSheet , View , TextInput , TouchableOpacity , Modal , Pressable ,Keyboard, Dimensions , Image , ScrollView , StyleProp, ViewStyle} from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { fonts } from '../assets/fonts/fonts';
import { colors } from '../constants/Colors';

const FeedBackScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.FEEDBACK, undefined>) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = React.useState("");
    const [selection, setSelection] = useState("");
    const GreatEmoji = { emoji : "😊" , text : "Great" }
    const OkayEmoji = { emoji : "😐" , text : "Okay" }
    const BadEmoji =  { emoji : "😔" , text : "Bad"}
    return (
      <ScrollView>
        <View style={styles.maincontainer}>
            <Text style={styles.feedbacktext}>Your feedback helps us improve</Text>
            <View style={styles.responsecontainer}>
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
             onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.modalView}>
            <Image source={require("../assets/confetti.png")} style={styles.modalImage}/>
            <Text style={styles.modalText}>Thank you for your feedback</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalbuttontext}>OKAY</Text>
            </Pressable>
          </View>
      </Modal>
            <TouchableOpacity style={styles.button} disabled={text == "" || selection == ""} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.buttontext}>
                    SUBMIT FEEDBACK
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
};

type EmojiProp = {
  emojitype  : {emoji : string , text : string},
  containerstyle : any
}

const Emojis = (props : EmojiProp) => {
  const text : string = props.emojitype.text
  const emoji : string = props.emojitype.emoji
  return (
    <View style={props.containerstyle}>
      <Text style={styles.emoji_image}> {emoji} </Text>
      <Text style={styles.emojitext}>{text}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    maincontainer : {
        flex : 1 ,
        alignItems : "center",
        backgroundColor : colors.DROIDCONKE_WHITE
    },
    feedbacktext : {
        textAlign : "center",
        color : colors.DROIDCONKE_BLUE ,
        width : "80%",
        margin : 30,
        fontSize : 18,
        fontFamily : fonts.MONTSERRAT_BOLD
    },
    responsecontainer : {
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
        padding : 5
    },
    button : {
        backgroundColor : colors.DROIDCONKE_BLUE,
        alignItems : "center",
        justifyContent : "center",
        width : "90%",
        borderRadius : 10,
        height : 45
    } ,
    buttontext : {
        fontSize : 16,
        fontFamily : fonts.MONTSERRAT_SEMIBOLD,
        color : colors.DROIDCONKE_WHITE,
        textAlign : "center"
    },
      modalView: {
        backgroundColor: colors.DROIDCONKE_WHITE,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 5,
        justifyContent: "center",
        alignSelf : "center",
        marginTop : Dimensions.get("screen").height / 5.5
      },
      modalButton: {
        justifyContent : "center",
        alignContent : "center",
        width : 160,
        backgroundColor : colors.DROIDCONKE_BLUE,
        height : 45,
        borderRadius : 10,
        marginTop : 25
      },
      modalbuttontext: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        textAlign : "center",
        color : colors.DROIDCONKE_BLACK,
        fontFamily : fonts.MONTSERRAT_BOLD,
        fontSize : 18,
        flexWrap : "wrap",
        width : 160
      },
      modalImage: {
        height : 160,
        width : 160
      },
      emojitext: {
        textAlign : "center", 
        fontFamily : fonts.MONTSERRAT_SEMIBOLD, 
        fontSize : 12
      },
      emoji_image : {
        textAlign : "center", 
        fontFamily : fonts.MONTSERRAT_REGULAR , 
        fontSize : 18
      }
})
export default FeedBackScreen;