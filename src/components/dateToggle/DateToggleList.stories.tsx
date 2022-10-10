import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DateToggleList, { DateToggleListProps } from "./DateToggleList";

const DEFAULT_PROPS: DateToggleListProps = {
  items: [
    { selected: true, date: "16th", day: "Day 1" },
    { selected: false, date: "17th", day: "Day 2" },
    { selected: false, date: "18th", day: "Day 3" },
  ],
};

export default {
  title: "DroidconKe/components/DateToggleList",
  component: DateToggleList,
  args: DEFAULT_PROPS,
} as ComponentMeta<typeof DateToggleList>;

const Template: ComponentStory<typeof DateToggleList> = (args) => (
  <DateToggleList {...args} />
);

export const DefaultDateToggleList = Template.bind({});
