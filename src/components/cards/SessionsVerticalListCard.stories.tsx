import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SessionsVerticalListCard, {
  SessionsVerticalListCardProps,
} from "./SessionsVerticalListCard";

const DEFAULT_PROPS: SessionsVerticalListCardProps = {
  star: false,
  title:
    "What it takes to run a community, the opportunities and available support",
  venue: "Room 1",
  startTime: "9:00 AM",
  endTime: "9:30 AM",
  presenter: "Greg Fawson",
  programTitle: "Keynote",
};

export default {
  title: "DroidconKe/cards/SessionsVerticalListCard",
  component: SessionsVerticalListCard,
  args: DEFAULT_PROPS,
} as ComponentMeta<typeof SessionsVerticalListCard>;

const Template: ComponentStory<typeof SessionsVerticalListCard> = (args) => (
  <SessionsVerticalListCard {...args} />
);

export const SessionsVerticalListCardStory = Template.bind({});
