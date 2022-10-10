// Main navigation.
import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";

// Create stack navigator.
const Stack = createNativeStackNavigator();

// Import screens.
import BottomTabsNavigator from "./BottomTabsNavigator";
import LoginScreen from "../screens/LoginScreen";
import SpeakersScreen from "../screens/SpeakersScreen";
import FeedBackScreen from "../screens/FeedbackScreen";

import { fonts } from "../assets/fonts/fonts";
import { TouchableOpacity, StyleSheet , Platform , View , Text, ImageBackground } from "react-native";
import BackArrowIcon from "../assets/icons/BackArrowIcon";
import { colors } from "../constants/Colors";
import SingleSpeakerScreen from "../screens/SingleSpeakerScreen";

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen_names.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screen_names.HOMETABS}
        component={BottomTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={screen_names.SPEAKERS}
        component={SpeakersScreen}
        options={({navigation}: {navigation : any}) => ({
          headerShadowVisible : false ,
          headerTitleAlign : "left" ,
          headerTitleStyle : {
            fontFamily : fonts.MONTSERRAT_REGULAR ,
            fontSize : 18
          } ,
          headerLeft : () => (
          <TouchableOpacity style={styles.speakersbackbutton} onPress= {() => navigation.goBack()}>
            <BackArrowIcon color={colors.DROIDCONKE_BLACK} />
          </TouchableOpacity>
         )
        }) }
      />
      <Stack.Screen
        name={screen_names.FEEDBACK}
        component={FeedBackScreen}
        options={({navigation}: {navigation : any}) => ({
          headerShadowVisible : false ,
          headerTitleAlign : "left" ,
          headerTitleStyle : {
            fontFamily : fonts.MONTSERRAT_REGULAR ,
            fontSize : 18,
            color : "#FFFFFF"
          } ,
          header : () => (
            <ImageBackground style={styles.feedback_backgroundimage} source={require("../assets/img/FeedbackBanner.png")}>
            <View style={styles.feedback_rowcontainer}>
            <TouchableOpacity style={styles.feedback_backbutton} onPress= {() => navigation.goBack()}>
            <BackArrowIcon color={colors.DROIDCONKE_WHITE} />
            </TouchableOpacity>
            <Text style={styles.feedback_headertext}> Feedback </Text>
            </View>
            </ImageBackground>
          )
        }) }
        />
        <Stack.Screen
        name={screen_names.SINGLESPEAKER}
        component={SingleSpeakerScreen}
        options={({navigation}: {navigation: any}) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  feedback_backbutton : {
    position : "absolute",
    left : 14,
  },
  feedback_headertext : {
    color : "#FFFFFF",
    fontFamily : fonts.MONTSERRAT_REGULAR,
    fontSize : 18,
    position : "absolute",
    left : 45,
    top : Platform.OS == "android" ? 2 : 4
  },
  feedback_backgroundimage : {
    height : 160
  },
  feedback_rowcontainer : {
    flexDirection : "row",
    marginTop : 20,
    position : "absolute"
  },
  speakersbackbutton : {
    marginRight : 8 ,
    marginBottom : 8 
  }
})

export default MainStackNavigator;
