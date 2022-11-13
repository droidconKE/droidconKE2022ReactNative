import React , { useEffect, useState } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Text , StyleSheet , View , TextInput , TouchableOpacity , Modal , Pressable ,Keyboard, Dimensions , Image , ScrollView , TextStyle, ViewStyle , ImageStyle} from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { fonts } from '../assets/fonts/fonts';
import { colors } from '../constants/Colors';
import { RootStackParamList } from '../types/Navigation';
import { useSendEventFeedbackMutation, useSendSessionFeedbackMutation } from '../services/auth';

const FeedBackScreen = ({navigation, route}: NativeStackScreenProps<RootStackParamList, screen_names.FEEDBACK, undefined>)  => {

    const {sessionSlug} = route.params

    const [modalVisible, setModalVisible] = useState(false);
    const [feedbackMessage, onChangeFeedbackMessage] = React.useState("");
    const [eventRating, setEventRating] = useState("");
    const GreatEventRating = { emoji : "😊" , text : "Great", value: "5"}
    const OkayEventRating = { emoji : "😐" , text : "Okay", value: "3" }
    const BadEventRating =  { emoji : "😔" , text : "Bad", value: "1"}

    const [sendEventFeedback, { data: eventFeedbackData, error: eventFeedbackError, isLoading: eventFeedbackIsLoading, isSuccess: eventFeedbackIsSuccess, isError: eventFeedbackIsError}] = useSendEventFeedbackMutation()
    const [sendSessionFeedback, { data: sessionFeedbackData, error: sessionFeedbackError, isLoading: sessionFeedbackIsLoading, isSuccess: sessionFeedbackIsSuccess, isError: sessionFeedbackIsError}] = useSendSessionFeedbackMutation()

    useEffect(() => {
      console.log({eventFeedbackData, eventFeedbackError, eventFeedbackIsLoading, eventFeedbackIsSuccess, eventFeedbackIsError})
      
      if(eventFeedbackIsSuccess && !eventFeedbackIsLoading && eventFeedbackData) {
        setModalVisible(!modalVisible)
      }

    },[eventFeedbackData, eventFeedbackError, eventFeedbackIsLoading, eventFeedbackIsSuccess, eventFeedbackIsError])

    useEffect(() => {
      console.log({sessionFeedbackData, sessionFeedbackError, sessionFeedbackIsLoading, sessionFeedbackIsSuccess, sessionFeedbackIsError})
      
      if(sessionFeedbackIsSuccess && !sessionFeedbackIsLoading && sessionFeedbackData) {
        setModalVisible(!modalVisible)
      }

    },[sessionFeedbackData, sessionFeedbackError, sessionFeedbackIsLoading, sessionFeedbackIsSuccess, sessionFeedbackIsError])

    const handleSubmitFeedback = () => {
      if(sessionSlug) {
        sendSessionFeedback({ feedback: feedbackMessage, rating: eventRating, sessionSlug: sessionSlug})
      } else {
        sendEventFeedback({feedback: feedbackMessage, rating: eventRating})
      }
    }
    return (
      <View style={styles.background_container}>
      <ScrollView contentContainerStyle={styles.main_container}>
            <Text style={styles.feedback_text}>Your feedback helps us improve</Text>
            <View style={styles.response_container}>
                <Text style={styles.response_container_text}>
                How is/was the event
                </Text>
                <View style={styles.emojis_response_container}>
                  <TouchableOpacity onPress={() => setEventRating(BadEventRating.value)} >
                    <EventRating eventrating={BadEventRating} containerstyle={ eventRating == BadEventRating.value ? [styles.emoji_container,styles.clicked_emoji_container] : styles.emoji_container}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setEventRating(OkayEventRating.value)} >
                    <EventRating eventrating={OkayEventRating} containerstyle={ eventRating == OkayEventRating.value  ? [styles.emoji_container,styles.clicked_emoji_container] : styles.emoji_container}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setEventRating(GreatEventRating.value)} >
                    <EventRating eventrating={GreatEventRating} containerstyle={ eventRating == GreatEventRating.value  ? [styles.emoji_container,styles.clicked_emoji_container] : styles.emoji_container}/>
                  </TouchableOpacity>
                </View>
            </View>
            <TextInput returnKeyType='done'  onSubmitEditing={() => {Keyboard.dismiss()}} style={styles.textinput_text} value={feedbackMessage} onChangeText={onChangeFeedbackMessage} multiline={true} placeholder={"Type message here"}></TextInput>
            <Modal
             transparent
             statusBarTranslucent={false}
             visible={modalVisible}
             onRequestClose={() => { setModalVisible(!modalVisible); }}
      >
        <View style={styles.modal_overlay}>
          <View style={styles.modal_view}>
            <Image source={require("../assets/img/cone_confetti.png")} style={styles.modal_image}/>
            <Text style={styles.modal_text}>Feedback sent successfully, Thank you</Text>
            <Pressable
              style={styles.modal_button}
              onPress={() => navigation.navigate(screen_names.HOME)}
            >
              <Text style={styles.button_text}>OKAY</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            <TouchableOpacity style={styles.button} disabled={feedbackMessage === "" || eventRating === "" || sessionFeedbackIsLoading === true} onPress={handleSubmitFeedback}>
                <Text style={styles.button_text}>
                    SUBMIT FEEDBACK
                </Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    )
};

type EventRatingProp = {
  eventrating  : {emoji : string , text : string},
  containerstyle : ViewStyle | ViewStyle[]
}

const EventRating = (props : EventRatingProp) => {
  const text : string = props.eventrating.text
  const emoji : string = props.eventrating.emoji
  return (
    <View style={props.containerstyle}>
      <Text style={styles.emoji_image}> {emoji} </Text>
      <Text style={styles.emoji_text}>{text}</Text>
    </View>
    )
}

type FeedbackStyle = {
  background_container : ViewStyle,
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
  background_container : {
    backgroundColor : colors.DROIDCONKE_WHITE,
    flex : 1
  },
    main_container : {
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
        color : colors.DROIDCONKE_FEEDBACK_INPUT_TEXT
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
        width : "60%"
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