import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PrimaryButton from "./PrimaryButton";

export default {
  title: "DroidconKe/Example/Button",
  component: PrimaryButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (_) => <PrimaryButton />;

export const PrimaryButtonStory = Template.bind({});
