import { ComponentStory } from "@storybook/react";
import React from "react";
import SessionsScreen, { SessionsScreenProps } from "./SessionsScreen";

const DEFAULT_PROPS: SessionsScreenProps = {
  dates: {
    items: [
      { selected: true, date: "16th", day: "Day 1" },
      { selected: false, date: "17th", day: "Day 2" },
      { selected: false, date: "18th", day: "Day 3" },
    ],
  },
  sessions: {
    items: [
      {
        star: false,
        title: "Registration & Breakfast",
        startTime: "8:00 AM",
        programTitle: "Arrival",
      },
      {
        star: false,
        title: "Community on a Global Scale",
        venue: "Room 1",
        startTime: "9:00 AM",
        endTime: "9:30 AM",
        presenter: "Greg Fawson",
        programTitle: "Keynote",
      },
      {
        star: false,
        title: "The community and the efforts",
        venue: "Room 1",
        startTime: "9:30 AM",
        endTime: "10:15 AM",
        presenter: "Omolara Adejuwon",
        programTitle: "Android 254",
      },
      {
        star: false,
        title: "Ruby's place in app development",
        venue: "Room 1",
        startTime: "10:15 AM",
        endTime: "11:00 AM",
        presenter: "Michael Kimathi",
        programTitle: "Nairuby",
      },
    ],
  },
};

export default {
  title: "DroidconKe/Screens/SessionsScreen",
  component: SessionsScreen,
  args: DEFAULT_PROPS,
};

const Template: ComponentStory<typeof SessionsScreen> = (args) => (
  <SessionsScreen {...args} />
);

export const SessionsScreenStory = Template.bind({});
