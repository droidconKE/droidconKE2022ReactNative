import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpeakersScreen from "./SpeakersScreen";
import StoriesMockNavigation from "../navigation/StroriesMockNavigation";
import { screen_names } from "../constants/ScreenNames";
import { fonts } from '../assets/fonts/fonts';

export default {
  title: "DroidconKe/Screens/SpeakersScreen",
  component: StoriesMockNavigation,
} as ComponentMeta<typeof StoriesMockNavigation>;

const Template: ComponentStory<typeof StoriesMockNavigation> = () => 
       <StoriesMockNavigation screen_component={SpeakersScreen} 
       screen_name={screen_names.SPEAKERS} 
       options={{
        headerTitleAlign : "left" ,
        headerTitleStyle : {
          fontFamily : fonts.MONTSERRAT_REGULAR
        }
}}/>;

export const SpeakersScreenStory = Template.bind({});