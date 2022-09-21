import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpeakersScreen from "./SpeakersScreen";

export default {
  title: "DroidconKe/Screens/SpeakersScreen",
  component: SpeakersScreen,
} as ComponentMeta<typeof SpeakersScreen>;

const Template: ComponentStory<typeof SpeakersScreen> = () => <SpeakersScreen />;

export const SpeakersScreenStory = Template.bind({});