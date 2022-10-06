import React , { useState } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Text , StyleSheet , View , TextInput , TouchableOpacity , Modal , Pressable ,Keyboard, Dimensions , Image , ScrollView} from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { fonts } from '../assets/fonts/fonts';
import { colors } from '../constants/Colors';

const FeedBackScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.FEEDBACK, undefined>) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = React.useState("");
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.feedbacktext}>Your feedback helps us improve</Text>
            <View style={styles.responsecontainer}>
                <Text style={styles.responsetext}>
                How is/was the event
                </Text>
                <View style={styles.emojiscontainer}>
                    <Emojis emojitype={BadEmoji}/>
                    <Emojis emojitype={OkayEmoji} />
                    <Emojis emojitype={GreatEmoji}/>
                </View>
            </View>
            <TextInput returnKeyType='done'  onSubmitEditing={() => {Keyboard.dismiss()}} style={styles.textinput} value={text} onChangeText={onChangeText} multiline={true} placeholder={"Type message here"}></TextInput>
            <Modal
            statusBarTranslucent={false}
            visible={modalVisible}
            onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.modalView}>
            <View style={{ marginHorizontal : 75}}></View>
            <Image source={require("../assets/confetti.png")} style={styles.modalImage}/>
            <Text style={styles.modalText}>Thank you for your feedback</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OKAY</Text>
            </Pressable>
          </View>
      </Modal>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.buttontext}>
                    SUBMIT FEEDBACK
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
};

const GreatEmoji = { emoji : "😊" , text : "Great" }
const OkayEmoji = { emoji : "😐" , text : "Okay" }
const BadEmoji =  { emoji : "😔" , text : "Bad"}
type EmojiProp = {
  emojitype  : {emoji : String , text : String}
}

const Emojis = (props : EmojiProp) => {
  return (
    <TouchableOpacity>
    <View style={styles.emojiresponse}>
      <Text style={{textAlign : "center", fontFamily : fonts.MONTSERRAT_REGULAR , fontSize : 18 }}> {props.emojitype.emoji} </Text>
      <Text style={{textAlign : "center", fontFamily : fonts.MONTSERRAT_SEMIBOLD, fontSize : 12 }}>{props.emojitype.text}</Text>
    </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        alignItems : "center",
        backgroundColor : colors.DROIDCONKE_WHITE
    },
    feedbacktext : {
        textAlign : "center",
        color : "#000CEB" ,
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
    emojiresponse : {
        height : 67,
        width : 67,
        backgroundColor : "#F5F5F5",
        borderRadius : 4 ,
        margin : 30 ,
        justifyContent : "center",
        alignContent : "center"
    },
    responsetext : {
        color : "#20201E",
        fontSize : 14 ,
        fontFamily : fonts.MONTSERRAT_REGULAR,
        textAlign : "center",
        marginTop : 17,
    },
    emojiscontainer : {
        flexDirection : "row",
        justifyContent : "space-around"
    },
    textinput : {
        backgroundColor : "#F5F5F5",
        width : "90%",
        marginBottom : 30,
        height : 115,
        textAlign : "left",
        textAlignVertical : "top",
        padding : 5
    },
    button : {
        backgroundColor : "#000CEB",
        alignItems : "center",
        justifyContent : "center",
        width : "90%",
        borderRadius : 10,
        height : 45
    } ,
    buttontext : {
        fontSize : 16,
        fontFamily : fonts.MONTSERRAT_SEMIBOLD,
        color : "#F6F6F8",
        textAlign : "center"
    },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 5,
        justifyContent: "center",
        alignSelf : "center",
        marginTop : Dimensions.get("screen").height / 5.5
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      modalButton: {
        justifyContent : "center",
        alignContent : "center",
        width : 160,
        backgroundColor : "#000CEB",
        height : 45,
        borderRadius : 10,
        marginTop : 25
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        textAlign : "center",
        color : "#20201E",
        fontFamily : fonts.MONTSERRAT_BOLD,
        fontSize : 18,
        flexWrap : "wrap",
        width : 160
      },
      modalImage: {
        height : 160,
        width : 160
      }
})
export default FeedBackScreen;