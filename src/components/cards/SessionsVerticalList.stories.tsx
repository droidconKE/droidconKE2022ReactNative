import { ComponentStory } from "@storybook/react";
import React from "react";
import SessionsVerticalList, {
  SessionsVerticalListProps,
} from "./SessionsVerticalList";

const DEFAULT_PROPS: SessionsVerticalListProps = {
  items: [
    {
      star: false,
      title:
        "What it takes to run a community, the opportunities and available support",
      venue: "Room 1",
      startTime: "9:00 AM",
      endTime: "9:30 AM",
      presenter: "Greg Fawson",
      programTitle: "Keynote",
    },
    {
      star: false,
      title:
        "What it takes to run a community, the opportunities and available support",
      venue: "Room 1",
      startTime: "9:00 AM",
      endTime: "9:30 AM",
      presenter: "Greg Fawson",
      programTitle: "Keynote",
    },
    {
      star: false,
      title:
        "What it takes to run a community, the opportunities and available support",
      venue: "Room 1",
      startTime: "9:00 AM",
      endTime: "9:30 AM",
      presenter: "Greg Fawson",
      programTitle: "Keynote",
    },
    {
      star: false,
      title:
        "What it takes to run a community, the opportunities and available support",
      venue: "Room 1",
      startTime: "9:00 AM",
      endTime: "9:30 AM",
      presenter: "Greg Fawson",
      programTitle: "Keynote",
    },
  ],
};

export default {
  title: "DroidconKe/cards/SessionsVerticalList",
  component: SessionsVerticalList,
  args: DEFAULT_PROPS,
};

const Template: ComponentStory<typeof SessionsVerticalList> = (args) => (
  <SessionsVerticalList {...args} />
);

export const SessionsVerticalListCardStory = Template.bind({});
