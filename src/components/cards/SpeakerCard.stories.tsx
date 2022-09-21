import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpeakerCard from "./SpeakerCard";

export default {
  title: "DroidconKe/Cards/SpeakerCard",
  component: SpeakerCard,
} as ComponentMeta<typeof SpeakerCard>;

const Template: ComponentStory<typeof SpeakerCard> = () => <SpeakerCard />;

export const SpeakerCardStory = Template.bind({});