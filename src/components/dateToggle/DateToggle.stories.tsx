import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DateToggle, { DateToggleProps } from "./DateToggle";

const DEFAULT_PROPS: DateToggleProps = {
  selected: false,
  date: "17th",
  day: "Day 2",
};

export default {
  title: "DroidconKe/components/DateToggle",
  component: DateToggle,
  args: DEFAULT_PROPS,
} as ComponentMeta<typeof DateToggle>;

const Template: ComponentStory<typeof DateToggle> = (args) => (
  <DateToggle {...args} />
);

export const DefaultDateToggle = Template.bind({});

export const SelectedDateToggle = Template.bind({});
SelectedDateToggle.args = {
  selected: true,
};
