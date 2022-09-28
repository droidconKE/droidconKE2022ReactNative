import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpeakerCard from "./SpeakerCard";
const placeholder = require("../../assets/img/DummySpeakerProfilePicture.jpeg")

export default {
  title: "DroidconKe/Cards/SpeakerCard",
  component: SpeakerCard,
} as ComponentMeta<typeof SpeakerCard>;

const Template: ComponentStory<typeof SpeakerCard> = () => <SpeakerCard id = "stuff"  ProfilePicture = {placeholder}  SpeakersName = "Harun Wangereka"  Content = "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++"  />;

export const SpeakerCardStory = Template.bind({});