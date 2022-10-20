import { ComponentStory } from "@storybook/react";
import React from "react";
import SessionsScreen, { SessionsScreenProps } from "./SessionsScreen";

const DEFAULT_PROPS: SessionsScreenProps = {};

export default {
  title: "DroidconKe/Screens/SessionsScreen",
  component: SessionsScreen,
  args: DEFAULT_PROPS,
};

const Template: ComponentStory<typeof SessionsScreen> = (args) => (
  <SessionsScreen {...args} />
);

export const SessionsScreenStory = Template.bind({});
